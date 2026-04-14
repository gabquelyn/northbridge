"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { cartContext } from "../providers/cartContextProvider";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "sonner";

function stripHtml(html: string) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "");
}

export default function CourseCard({
  data,
  category,
  enrolled,
  paid,
  granted,
}: {
  data: Course;
  category?: { id: number; name: string };
  enrolled?: boolean;
  paid?: boolean;
  granted?: boolean;
}) {
  const ctx = useContext(cartContext);
  const active = paid && granted;
  console.log(category)
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      {/* IMAGE */}
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={data.image || "/asset/library.jpg"}
          alt={data.fullname}
          fill
          className={clsx(
            active ? "grayscale-0" : enrolled ? "grayscale-100" : "",
            "object-cover transition-transform duration-500 group-hover:scale-105",
          )}
        />

        {/* Gradient overlay */}
        <div className="absolute z-20 inset-0 bg-linear-to-t from-black/40 to-transparent opacity-60" />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        {/* Title */}
        <div className="flex justify-between items-end">
          <h3 className="text-[1rem] font-semibold text-gray-800 line-clamp-2">
            {data.fullname}
          </h3>
          {/* Shortname */}
          {category && (
            <p
              className={clsx(
                enrolled
                  ? "text-secondary bg-slate-50"
                  : category.id == 2
                    ? "text-yellow-500 bg-yellow-100"
                    : category.id == 3
                      ? "bg-rose-100 text-rose-500"
                      : category.id == 6
                        ? "bg-primary/10 text-primary"
                        : "",
                "text-xs p-2 px-4 rounded-2xl shrink-0",
              )}
            >
              {category.name}
            </p>
          )}
        </div>

        <p className="text-xs text-secondary mt-1">{data.shortname}</p>

        {/* Summary */}
        <p className="text-sm text-gray-500 mt-3 line-clamp-3">
          {stripHtml(data.summary)}
        </p>

        {/* CTA */}
        <div className="mt-4 flex justify-end items-center">
          {/* <span className="text-xs text-secondary">View course</span> */}

          <button
            className="flex items-center justify-center gap-2 disabled:bg-[#f2f2f2] disabled:cursor-not-allowed cursor-pointer hover:text-white rounded-2xl bg-[#f2f2f2] p-2 bg-gray-10 px-4 hover:bg-[#1e3a8a] transition"
            onClick={() => {
              if (ctx) {
                ctx.updateCartHandler(data.id);
                toast.info(`${data.shortname} added to cart`);
              }
            }}
            disabled={ctx?.cart.includes(data.id) || enrolled}
          >
            {ctx?.cart.includes(data.id) ? (
              <p>Carted</p>
            ) : enrolled ? (
              <p>Applied</p>
            ) : active ? (
              <p>Enrolled</p>
            ) : (
              <p>Enrol</p>
            )}{" "}
            <FaCartPlus />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
