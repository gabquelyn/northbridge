import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { NavLinks, NestedLink } from "../Navigation";

export default function MenuItem({ item }: { item: NavLinks }) {
  const [open, setOpen] = useState(false);

  const hasChildren = "children" in item;

  return (
    <li
      className="relative list-none text-[#010A1D]"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        className="cursor-pointer block py-2"
        href={!hasChildren ? item.href : ""}
      >
        {item.label}
      </Link>

      <AnimatePresence>
        {open && hasChildren && (
          <motion.ul
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full left-0 bg-white text-[#010A1D] shadow-lg min-w-70 overflow-hidden"
          >
            {(item as NestedLink).children.map((child, i) => (
              <Link
                key={i}
                href={child.href}
                className="px-4 py-2 block hover:bg-[#479DA526] cursor-pointer whitespace-nowrap"
              >
                {child.label}
              </Link>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
