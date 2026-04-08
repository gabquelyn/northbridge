import React from "react";

export default function AdminControls({
  review,
  accept,
  paid,
  granted,
  outstanding,
}: {
  review: () => void;
  accept: () => void;
  paid: boolean;
  granted: boolean;
  outstanding?: number;
}) {
  const isDisabled = granted;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#0b1c1e] via-[#0f2a2d] to-[#161616] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
      
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-linear(circle_at_top,rgba(71,157,165,0.18),transparent_65%)]" />

      {/* header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary/70">
            Admin Controls
          </p>
          <h3 className="text-white font-semibold text-lg tracking-tight">
            Application Actions
          </h3>
        </div>

        <div className="text-[10px] px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
          {granted ? "Completed" : "Secure"}
        </div>
      </div>

      {/* status hint */}
      {granted && (
        <p className="mb-4 text-xs text-white/50">
          This application has already been processed. Actions are locked.
        </p>
      )}

      {/* actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        
        {/* Review Button */}
        <button
          onClick={review}
          disabled={isDisabled}
          className={`
            group relative flex-1 overflow-hidden rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300
            ${
              isDisabled
                ? "cursor-not-allowed border border-white/5 bg-white/5 text-white/30 shadow-none"
                : "border border-primary/20 bg-primary/5 text-[#d9f3f5] hover:bg-primary/10 hover:shadow-lg"
            }
          `}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Send Review Message
          </span>

          {/* hover glow (only when enabled) */}
          {!isDisabled && (
            <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-linear-to-r from-primary/20 to-transparent" />
          )}
        </button>

        {/* Accept Button */}
        <button
          onClick={accept}
          disabled={isDisabled}
          className={`
            group relative flex-1 overflow-hidden rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300
            ${
              isDisabled
                ? "cursor-not-allowed bg-[#2a2a2a] text-white/30 shadow-none"
                : "bg-linear-to-r from-primary to-[#2f7e85] text-white shadow-md hover:scale-[1.03] hover:shadow-[0_10px_25px_rgba(71,157,165,0.35)]"
            }
          `}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Accept Application
          </span>

          {/* shine effect (only when enabled) */}
          {!isDisabled && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-r from-white/20 via-transparent to-transparent -translate-x-full group-hover:translate-x-full" />
          )}
        </button>
      </div>

      
    </div>
  );
}