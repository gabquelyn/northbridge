"use client";
import React, { useState } from "react";
import ReviewMessage from "./ReviewMessage";
import Modal from "@/app/components/Modal";
import RescindMessage from "./RescindMessage";
import DeleteApplication from "./DeleteApplication";
import AcceptApplication from "./AcceptApplication";
import DiscountForm from "./DiscountHandler";

export default function AdminControls({
  application,
}: {
  application: Application;
}) {
  const isDisabled = application.granted;

  const [review, setReview] = useState(false);
  const [accept, setAccept] = useState(false);
  const [delete_, setDelete_] = useState(false);
  const [rescind, setRescind] = useState(false);
  const [applying, setApplying] = useState(false);

  return (
    <div>
      {review && (
        <Modal onClose={() => setReview(false)}>
          <ReviewMessage
            id={application._id}
            onClose={() => setReview(false)}
          />
        </Modal>
      )}

      {rescind && (
        <Modal onClose={() => setRescind(false)}>
          <RescindMessage
            id={application._id}
            onClose={() => setRescind(false)}
          />
        </Modal>
      )}

      {delete_ && (
        <Modal onClose={() => setDelete_(false)}>
          <DeleteApplication
            id={application._id}
            onClose={() => setDelete_(false)}
          />
        </Modal>
      )}

      {accept && (
        <Modal onClose={() => setAccept(false)}>
          <AcceptApplication
            mode={application.mode}
            name={application.profile.bio.firstName}
            onCancel={() => setAccept(false)}
            id={application._id}
          />
        </Modal>
      )}

      <div className="relative overflow-hidden rounded-2xl p-5 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
        {/* ambient glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(71,157,165,0.18),transparent_65%)]" />

        {/* header */}
        <div className="relative mb-5 flex items-center justify-end">
          <div className="text-[10px] px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            Secure
          </div>
        </div>

        <hr className="border border-slate-200 mb-4" />

        <div className="relative space-y-10">
          {/* Primary actions */}
          <section>
            <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-primary/70 font-bold">
              Primary Actions
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setReview(true)}
                className="group relative flex-1 cursor-pointer overflow-hidden rounded-xl px-4 py-3 text-sm transition-all duration-300 border border-primary bg-primary text-[#d9f3f5] hover:bg-primary hover:shadow-lg"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Review Message
                </span>
                {!isDisabled && (
                  <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-linear-to-r from-primary/20 to-transparent" />
                )}
              </button>

              <button
                onClick={() => setAccept(true)}
                disabled={isDisabled}
                className={`group relative flex-1 overflow-hidden rounded-xl px-4 py-3 text-sm  transition-all duration-300 ${
                  isDisabled
                    ? "cursor-not-allowed bg-[#2a2a2a] text-white/30 shadow-none"
                    : "bg-linear-to-r from-primary to-[#2f7e85] text-white shadow-md hover:scale-[1.03] hover:shadow-[0_10px_25px_rgba(71,157,165,0.35)]"
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Accept Application
                </span>
                {!isDisabled && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-r from-white/20 via-transparent to-transparent -translate-x-full group-hover:translate-x-full" />
                )}
              </button>
            </div>
          </section>

          {/* Destructive actions */}
          <section>
            <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-red-400/70 font-semibold">
              Danger Zone
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                className="bg-red-500 rounded-xl border-2 text-white px-4 py-3 border-red-500 w-full cursor-pointer text-sm  transition-all duration-300 hover:bg-red-600"
                onClick={() => setDelete_(true)}
              >
                Delete Application
              </button>

              <button
                className="bg-red-500 rounded-xl border-2 text-white px-4 py-3 border-red-500 cursor-pointer w-full text-sm  transition-all duration-300 hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:border-slate-300"
                onClick={() => setRescind(true)}
                disabled={application.rescinded}
              >
                Rescind
              </button>
            </div>
          </section>

          <hr className="border border-slate-200" />

          <div className="mt-5">
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary/70">
              Discount Controls
            </p>
            <DiscountForm
              initialDiscount={application?.discount}
              initialExpiry={application?.discountExpires?.split("T")[0]}
              id={application._id}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
