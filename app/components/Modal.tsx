import React, { useEffect, useRef } from "react";

export default function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose?: Fn;
}) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // lock scroll
    const handleClose = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose?.();
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", handleClose);
    return () => {
      // restore scroll
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
      <div
        className="flex bg-white p-7 rounded-2xl flex-col gap-5 max-w-xl min-w-lg"
        ref={modalRef}
      >
        {children}
      </div>
    </div>
  );
}
