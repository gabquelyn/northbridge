import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinks, NestedLink } from "../Navigation";
import clsx from "clsx";
export default function MenuItem({
  item,
  mobile = false,
  closeMenu,
}: {
  item: NavLinks;
  mobile?: boolean;
  closeMenu?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const hasChildren = "children" in item;
  const pathname = usePathname();
  const toggle = () => setOpen(!open);

  return (
    <li
      className="relative list-none"
      onMouseEnter={!mobile ? () => setOpen(true) : undefined}
      onMouseLeave={!mobile ? () => setOpen(false) : undefined}
    >
      {hasChildren ? (
        <p
          onClick={mobile ? toggle : undefined}
          className={clsx(
            ["/grade12", "/grade11", "/ay12", "/caap"].includes(pathname)
              ? "border-[#479DA5] border-b-2"
              : "border-transparent",
            "w-full text-left py-2 cursor-pointer"
          )}
        >
          {item.label}
        </p>
      ) : (
        <Link
          href={item.href}
          onClick={closeMenu}
          className={clsx(
            pathname == item.href
              ? "border-[#479DA5] border-b-2"
              : "border-transparent",
            "w-full text-left block py-2 cursor-pointer border-b-2 hover:border-[#479DA5] transition-colors duration-300"
          )}
        >
          {item.label}
        </Link>
      )}

      <AnimatePresence>
        {open && hasChildren && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={clsx(
              mobile
                ? "pl-4"
                : "absolute top-full left-0 bg-white shadow-lg min-w-85"
            )}
          >
            {(item as NestedLink).children.map((child, i) => (
              <Link
                key={i}
                href={child.href}
                onClick={closeMenu}
                className="block px-4 py-2 md:text-nowrap hover:bg-[#479DA526]"
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
