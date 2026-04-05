import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { getYear, getMonth, parseISO, isValid } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
// Helper range function
const range = (start: number, end: number, step = 1) => {
  const output = [];
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const years = range(1980, getYear(new Date()) + 1);

const CustomHeader = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: any) => (
  <div className="flex items-center justify-between px-3 py-2">
    <button
      onClick={decreaseMonth}
      disabled={prevMonthButtonDisabled}
      className="px-2 py-1 rounded-lg border"
    >
      {"<"}
    </button>

    <div className="flex gap-2">
      <select
        value={getYear(date)}
        onChange={(e) => changeYear(Number(e.target.value))}
        className="px-2 py-1 rounded-lg border"
      >
        {years.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        value={getMonth(date)}
        onChange={(e) => changeMonth(Number(e.target.value))}
        className="px-2 py-1 rounded-lg border"
      >
        {MONTHS.map((month, index) => (
          <option key={month} value={index}>
            {month}
          </option>
        ))}
      </select>
    </div>

    <button
      onClick={increaseMonth}
      disabled={nextMonthButtonDisabled}
      className="px-2 py-1 rounded-lg border"
    >
      {">"}
    </button>
  </div>
);

export default function DateManager({
  label,
  name,
  value,
  onDateChange
}: {
  label?: string;
  name: string;
  value: string;
  onDateChange: (name: string, value: string) => void
}) {
const parsedDate = value ? parseISO(value) : null;
const safeDate = parsedDate && isValid(parsedDate) ? parsedDate : null;

  return (
    <div className="flex flex-col gap-1 w-full">
      <label>{label}</label>
      <DatePicker
        selected={safeDate}
        name={name}
        onChange={(e: Date | null) => {
          if (e) {
            onDateChange(name, e.toISOString().split("T")[0])
          }
        }}
        renderCustomHeader={CustomHeader}
        className="bg-primary/2 w-full p-3 rounded-2xl border border-gray-200 outline-none  transition-all focus:ring-[#479DA5] focus:ring-2"
        calendarClassName="rounded-xl shadow-lg"
      />
    </div>
  );
}
