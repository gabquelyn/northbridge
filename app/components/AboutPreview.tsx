"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGreaterThan } from "react-icons/fa";

export default function AboutPreview() {
  return (
    <div className="p-10 py-20 flex flex-col gap-8 items-center justify-center bg-[#f5fefd]">
      <div className="grid grid-cols-2 gap-12 px-[18%] items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative h-100 w-full overflow-hidden">
            <Image
              src={"/asset/flags.png"}
              fill
              alt=""
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className=" flex flex-col gap-4"
          >
            <p className="text-[2.5rem] font-bold text-center">
              Welcome to <span className="text-[#479DA5]">Northbridge</span>
            </p>
            <p>
              Northbridge Collegiate is a private Canadian educational
              institution inspected and authorized by the Ontario Ministry of
              Education to deliver Ontario Secondary School Diploma (OSSD)
              programs in accordance with provincial requirements.
            </p>
            <p>
              As a Canadian University Preparation institution, we offer
              secondary-level academic programs through both online and in-class
              delivery.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-end mt-4"
          >
            <motion.div
              className="bg-linear-0 from-[#479DA5] to-[#17757E] p-2 px-6 rounded-3xl w-fit text-white flex gap-2 items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <p>Learn More</p>
              <FaGreaterThan />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
