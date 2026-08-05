"use client";

import React, { memo, ReactNode, useCallback, useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";

import {
  LuBold,
  LuItalic,
  LuUnderline,
  LuStrikethrough,
  LuHighlighter,
  LuLink,
  LuHeading1,
  LuHeading2,
  LuQuote,
  LuList,
  LuListOrdered,
  LuAlignLeft,
  LuAlignCenter,
  LuAlignRight,
  LuUndo2,
  LuRedo2,
  LuEraser,
} from "react-icons/lu";

interface ToolbarButtonProps {
  title: string;
  children: ReactNode;
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
}

interface RichTextEditorProps {
  content?: string;
  placeholder?: string;
  editable?: boolean;
  minHeight?: number;
  onChange?: (html: string) => void;
}

const ToolbarButton = memo(
  ({
    title,
    children,
    onClick,
    active = false,
    disabled = false,
  }: ToolbarButtonProps) => (
    <button
      type="button"
      title={title}
      aria-label={title}
      aria-pressed={active}
      disabled={disabled}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={[
        "inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors",
        disabled
          ? "cursor-not-allowed text-gray-300"
          : active
            ? "bg-[#e6f2f3] text-primary"
            : "text-secondary hover:bg-gray-100",
      ].join(" ")}
    >
      {children}
    </button>
  ),
);

ToolbarButton.displayName = "ToolbarButton";

const Divider = memo(() => (
  <div className="mx-1.5 self-stretch w-px bg-gray-200" />
));

Divider.displayName = "Divider";

export default function RichTextEditor({
  content = "",
  placeholder = "Start typing...",
  editable = true,
  minHeight = 320,
  onChange,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),

      Underline,

      TextStyle,

      Color,

      Highlight,

      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          rel: "noopener noreferrer",
          target: "_blank",
        },
      }),

      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),

      Placeholder.configure({
        placeholder,
      }),
    ],

    editable,

    content,

    onUpdate({ editor }) {
      onChange?.(editor.getHTML());
    },
  });

  /**
   * Keep editor content synced with parent
   */
  useEffect(() => {
    if (!editor) return;

    if (content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  /**
   * Editable can change
   */
  useEffect(() => {
    editor?.setEditable(editable);
  }, [editable, editor]);

  const chain = useCallback(() => editor?.chain().focus(), [editor]);

  const heading = useCallback(
    (level: 1 | 2 | 3) => {
      chain()?.toggleHeading({ level }).run();
    },
    [chain],
  );

  const setLink = useCallback(() => {
    if (!editor) return;

    const previous = editor.getAttributes("link").href;

    const url = window.prompt("Enter URL", previous || "https://");

    if (url === null) return;

    if (!url.trim()) {
      chain()?.unsetLink().run();
      return;
    }

    chain()
      ?.extendMarkRange("link")
      .setLink({
        href: url,
      })
      .run();
  }, [editor, chain]);

  if (!editor) return null;

  const icon = 16;

  return (
    <div className="mt-2 flex h-150 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="z-10 flex flex-wrap items-center gap-1 border-b bg-gray-50 p-2">
        <ToolbarButton
          title="Undo"
          disabled={!editor.can().undo()}
          onClick={() => chain()?.undo().run()}
        >
          <LuUndo2 size={icon} />
        </ToolbarButton>

        <ToolbarButton
          title="Redo"
          disabled={!editor.can().redo()}
          onClick={() => chain()?.redo().run()}
        >
          <LuRedo2 size={icon} />
        </ToolbarButton>

        <Divider />

        <ToolbarButton
          title="Heading 1"
          active={editor.isActive("heading", { level: 1 })}
          onClick={() => heading(1)}
        >
          <LuHeading1 size={icon} />
        </ToolbarButton>

        <ToolbarButton
          title="Heading 2"
          active={editor.isActive("heading", { level: 2 })}
          onClick={() => heading(2)}
        >
          <LuHeading2 size={icon} />
        </ToolbarButton>

        <Divider />

        <ToolbarButton
          title="Bold"
          active={editor.isActive("bold")}
          onClick={() => chain()?.toggleBold().run()}
        >
          <LuBold size={icon} />
        </ToolbarButton>

        <ToolbarButton
          title="Italic"
          active={editor.isActive("italic")}
          onClick={() => chain()?.toggleItalic().run()}
        >
          <LuItalic size={icon} />
        </ToolbarButton>

        <ToolbarButton
          title="Underline"
          active={editor.isActive("underline")}
          onClick={() => chain()?.toggleUnderline().run()}
        >
          <LuUnderline size={icon} />
        </ToolbarButton>

        <ToolbarButton
          title="Strike"
          active={editor.isActive("strike")}
          onClick={() => chain()?.toggleStrike().run()}
        >
          <LuStrikethrough size={icon} />
        </ToolbarButton>

        <ToolbarButton
          title="Highlight"
          active={editor.isActive("highlight")}
          onClick={() => chain()?.toggleHighlight().run()}
        >
          <LuHighlighter size={icon} />
        </ToolbarButton>

        <ToolbarButton
          title="Link"
          active={editor.isActive("link")}
          onClick={setLink}
        >
          <LuLink size={icon} />
        </ToolbarButton>

        <Divider />

        <ToolbarButton
          title="Align Left"
          active={editor.isActive({ textAlign: "left" })}
          onClick={() => chain()?.setTextAlign("left").run()}
        >
          <LuAlignLeft size={icon} />
        </ToolbarButton>

        <ToolbarButton
          title="Align Center"
          active={editor.isActive({ textAlign: "center" })}
          onClick={() => chain()?.setTextAlign("center").run()}
        >
          <LuAlignCenter size={icon} />
        </ToolbarButton>

        <ToolbarButton
          title="Align Right"
          active={editor.isActive({ textAlign: "right" })}
          onClick={() => chain()?.setTextAlign("right").run()}
        >
          <LuAlignRight size={icon} />
        </ToolbarButton>

        <Divider />

        <ToolbarButton
          title="Bullet List"
          active={editor.isActive("bulletList")}
          onClick={() => chain()?.toggleBulletList().run()}
        >
          <LuList size={icon} />
        </ToolbarButton>

        <ToolbarButton
          title="Ordered List"
          active={editor.isActive("orderedList")}
          onClick={() => chain()?.toggleOrderedList().run()}
        >
          <LuListOrdered size={icon} />
        </ToolbarButton>

        <ToolbarButton
          title="Quote"
          active={editor.isActive("blockquote")}
          onClick={() => chain()?.toggleBlockquote().run()}
        >
          <LuQuote size={icon} />
        </ToolbarButton>

        <Divider />

        <ToolbarButton
          title="Clear Formatting"
          onClick={() => chain()?.clearNodes().unsetAllMarks().run()}
        >
          <LuEraser size={icon} />
        </ToolbarButton>
      </div>

      <div
        className="editor-scroll flex-1 overflow-y-auto px-5 py-4"
        style={{ minHeight }}
      >
        <EditorContent
          editor={editor}
          className="
        prose
        prose-sm
        max-w-none
        h-full
        [&_.ProseMirror]:h-full
        [&_.ProseMirror]:min-h-full
        [&_.ProseMirror]:outline-none
      "
        />
      </div>
    </div>
  );
}
