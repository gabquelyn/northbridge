import React from "react";
import { formatCurrency } from "@/app/utils/formatCurrency";
import moment from "moment"
export default function Receipt({
  amount,
  status,
  reference,
  createdAt,
  currency
}: {
  amount: number;
  status: string;
  reference: string;
  createdAt: string;
  currency: string
}) {
  return (
    <div className="w-full text-secondary max-w-md mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Header */}
      <div className="bg-linear-to-r from-primary to-[#010A1D] p-5 text-center">
        <p className="text-xs uppercase tracking-widest ">Payment Receipt</p>
        <h2 className="text-2xl text-white font-bold  mt-1">
          {formatCurrency(amount)}
        </h2>
        <p className="text-xs  mt-1">{status.toUpperCase()}</p>
      </div>

      {/* Body */}
      <div className="p-5 space-y-3 text-sm ">
        <div className="flex justify-between">
          <span className="">Reference</span>
          <span className="font-medium  truncate max-w-45 text-right">
            {reference}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="">Amount</span>
          <span className=" font-medium">{formatCurrency(amount)}</span>
        </div>

        <div className="flex justify-between">
          <span className="">Currency</span>
          <span className=" font-medium">{currency}</span>
        </div>

        <div className="flex justify-between">
          <span className="">Status</span>
          <span
            className={`font-semibold ${
              status === "success"
                ? "text-green-400"
                : status === "failed"
                  ? "text-red-400"
                  : "text-yellow-400"
            }`}
          >
            {status}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="">Date</span>
          <span className=" font-medium">
            {moment(createdAt).format("YYYY MMM D, h:mm A")}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-white/10 flex justify-between items-center text-xs ">
        <span>Powered by </span>
        <span>✔ Paystack</span>
      </div>
    </div>
  );
}
