"use client";
import React from "react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { MdClose } from "react-icons/md";
import Cartitem from "./Cartitem";
export default function CartDrawer({
  onClose,
  open,
}: {
  onClose: Fn;
  open: boolean;
}) {

 
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-[90%] sm:w-100 bg-[#f2f2f2] z-50 shadow-xl p-5 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-md">My cart</h2>
              <button onClick={onClose} className="cursor-pointer">
                <MdClose size={20} />
              </button>
            </div>

           

            {/* Items */}
            <Cartitem  />
            {/* Footer */}
           
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
