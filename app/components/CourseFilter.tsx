"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiFilter, FiChevronDown } from "react-icons/fi";

type FilterProps = {
  categories: { id: number; name: string }[];
  selectedCategory: number | null;
  onChange: (categoryId: number | null) => void;
};

const CourseFilterDropdown: React.FC<FilterProps> = ({
  categories,
  selectedCategory,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel =
    categories.find((c) => c.id === selectedCategory)?.name || "All";

  return (
    <div className="relative inline-block" ref={ref}>
      {/* Trigger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center cursor-pointer gap-2 px-4 py-2 rounded-3xl bg-white text-secondary border-gray-200 hover:bg-gray-50"
      >
        <FiFilter />

        <span className="text-sm">{selectedLabel}</span>

        {/* ✅ Rotating caret */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center"
        >
          <FiChevronDown />
        </motion.span>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute mt-2 w-56 bg-white rounded-lg shadow-lg z-50 overflow-hidden"
          >
            <button
              onClick={() => {
                onChange(null);
                setOpen(false);
              }}
              className={`w-full text-left cursor-pointer px-4 py-2 text-sm hover:bg-gray-100 ${
                selectedCategory === null ? "bg-gray-100 font-medium" : ""
              }`}
            >
              All
            </button>

            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onChange(cat.id);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 cursor-pointer py-2 text-sm hover:bg-gray-100 ${
                  selectedCategory === cat.id
                    ? "bg-gray-100 font-medium"
                    : ""
                }`}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CourseFilterDropdown;