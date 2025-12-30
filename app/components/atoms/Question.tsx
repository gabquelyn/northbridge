"use client";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

export default function Question({
  question,
  ans,
}: {
  question: string;
  ans: string;
}) {
  return (
    <motion.div
      className="bg-[#151e2f] p-6 rounded-lg flex flex-col gap-3 cursor-pointer"
      initial="closed"
      whileHover="open"
      animate="closed"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className="font-medium">{question}</p>

        <motion.span
          variants={{
            closed: { rotate: 0 },
            open: { rotate: 45 },
          }}
          transition={{ duration: 0.3 }}
        >
          <BsArrowUpRight />
        </motion.span>
      </div>

      {/* Answer */}
      <motion.div
        variants={{
          closed: { height: 0, opacity: 0 },
          open: { height: "auto", opacity: 1 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <p className="text-sm text-gray-300">{ans}</p>
      </motion.div>
    </motion.div>
  );
}
