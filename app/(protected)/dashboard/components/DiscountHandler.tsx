"use client";
import { useState, useMemo, useEffect } from "react";
import { useAddDiscount } from "@/app/hooks/useAdmission";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { ClipLoader } from "react-spinners";
import moment from "moment";
interface DiscountFormProps {
  initialDiscount?: number;
  initialExpiry?: string;
  id: string;
}

const MAX_DISCOUNT = 50;

function startOfDay(d: Date) {
  const copy = new Date(d);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b?.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function DiscountForm({
  initialDiscount = 0,
  initialExpiry,
  id,
}: DiscountFormProps) {
  const today = useMemo(() => startOfDay(new Date()), []);

  const [discount, setDiscount] = useState(initialDiscount);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
   initialExpiry ? new Date(initialExpiry) : null,
  );
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const { mutate, isPending, isError, error, data, isSuccess } =
    useAddDiscount();

  useEffect(() => {
    if (isError) {
      const msg = (error as AxiosError<ApiErrorMessage>)?.response?.data
        ?.message;
      toast.error(msg || "Something went wrong");
      console.log(error);
    }
    if (isSuccess) {
      toast.success("Successful");
    }
  }, [isError, isSuccess]);

  const monthLabel = new Date(viewYear, viewMonth, 1).toLocaleString(
    "default",
    {
      month: "long",
      year: "numeric",
    },
  );

  const isCurrentMonth =
    viewMonth === today.getMonth() && viewYear === today.getFullYear();

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstWeekday = new Date(viewYear, viewMonth, 1).getDay();

  const days: (number | null)[] = [
    ...Array(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  function goPrevMonth() {
    if (isCurrentMonth) return;
    const prev = new Date(viewYear, viewMonth - 1, 1);
    setViewMonth(prev.getMonth());
    setViewYear(prev.getFullYear());
  }

  function goNextMonth() {
    const next = new Date(viewYear, viewMonth + 1, 1);
    setViewMonth(next.getMonth());
    setViewYear(next.getFullYear());
  }

  function selectDay(day: number) {
    const picked = startOfDay(new Date(viewYear, viewMonth, day));
    if (picked < today) return;
    setSelectedDate(picked);
  }

  function handleDiscountChange(value: number) {
    setDiscount(value);
  }

  const fillPercent = (discount / MAX_DISCOUNT) * 100;
  const addDiscount = () => {
    mutate({
      id,
      discountExpires: moment(selectedDate).format("YYYY-MM-DD") || "",
      discount,
    });
  };

  return (
    <div>
      <div className="font-sans text-slate-900 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Discount slider */}
        <div>
          <div className="flex items-baseline justify-end mb-2">
            <span className="text-xl font-bold text-primary">{discount}%</span>
          </div>
          <input
            id="discount-slider"
            type="range"
            min={0}
            max={MAX_DISCOUNT}
            step={1}
            value={discount}
            onChange={(e) => handleDiscountChange(Number(e.target.value))}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-primary
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-primary
            [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer
            [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-primary
            [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer"
            style={{
              background: `linear-gradient(to right, #479da5 ${fillPercent}%, #e2e8f0 ${fillPercent}%)`,
            }}
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1.5">
            <span>0%</span>
            <span>{MAX_DISCOUNT}% max</span>
          </div>
        </div>

        {/* Expiry calendar */}
        <div>
          <div className="mt-2 border border-slate-200 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2.5">
              <button
                type="button"
                onClick={goPrevMonth}
                disabled={isCurrentMonth}
                aria-label="Previous month"
                className="w-7 h-7 rounded-md bg-slate-100 text-slate-900 text-base leading-none
                disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer hover:bg-slate-200
                disabled:hover:bg-slate-100"
              >
                ‹
              </button>
              <span className="text-sm font-semibold">{monthLabel}</span>
              <button
                type="button"
                onClick={goNextMonth}
                aria-label="Next month"
                className="w-7 h-7 rounded-md bg-slate-100 text-slate-900 text-base leading-none
                cursor-pointer hover:bg-slate-200"
              >
                ›
              </button>
            </div>

            <div className="grid grid-cols-7 text-center">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <span key={i} className="text-[11px] text-slate-400 pb-1.5">
                  {d}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-7 text-center">
              {days.map((day, i) => {
                if (day === null) return <span key={i} />;
                const cellDate = startOfDay(new Date(viewYear, viewMonth, day));
                const disabled = cellDate < today;
                const isSelected =
                  selectedDate !== null && isSameDay(cellDate, selectedDate);
                const isToday = isSameDay(cellDate, today);

                return (
                  <button
                    key={i}
                    type="button"
                    disabled={disabled}
                    onClick={() => selectDay(day)}
                    className={[
                      "py-1.5 text-sm rounded-md cursor-pointer",
                      disabled
                        ? "text-slate-300 cursor-not-allowed"
                        : "text-slate-900 hover:bg-blue-50",
                      isToday && !isSelected ? "font-bold" : "",
                      isSelected
                        ? "bg-primary text-white hover:bg-primary"
                        : "",
                    ].join(" ")}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {selectedDate && (
            <p className="mt-2 text-sm text-slate-600">
              Expires{" "}
              {selectedDate.toLocaleDateString("default", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-end mt-3">
        <button
          className="p-2 px-4 md:px-8 text-white text-sm rounded-lg bg-black cursor-pointer "
          onClick={addDiscount}
          disabled={isPending}
        >
          {isPending ? <ClipLoader size={15} color="white" /> : <p>Save</p>}
        </button>
      </div>
    </div>
  );
}
