import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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
      <span className="cursor-pointer block py-2">
        {item.label}
      </span>

      <AnimatePresence>
        {open && hasChildren && (
          <motion.ul
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full left-0 bg-[#17757E] shadow-lg min-w-70 overflow-hidden"
          >
            {(item as NestedLink).children.map((child, i) => (
              <li
                key={i}
                className="px-4 py-2 hover:bg-[#479DA5] cursor-pointer whitespace-nowrap"
              >
                {child.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
