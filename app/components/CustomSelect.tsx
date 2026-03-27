"use client";
import React from "react";
import Select, { SingleValue, ActionMeta } from "react-select";

export default function CustomSelect({
  option,
  setOption,
  label,
  options,
  isDisabled,
}: {
  label: string;
  options: SelectOption[];
  option: SelectOption | null;
  isDisabled?: boolean;
  setOption:
    | ((
        newValue: SingleValue<{ label: string; value: string }>,
        actionMeta: ActionMeta<{ label: string; value: string }>
      ) => void)
    | undefined;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        className={`text-sm font-medium ${
          isDisabled ? "text-gray-400" : "text-gray-900"
        }`}
      >
        {label}
      </label>

      <Select
        options={options}
        value={option}
        isDisabled={isDisabled}
        placeholder={`Select ${label.toLowerCase()}`}
        onChange={(val, meta) => {
          if (isDisabled) return; // extra safety
          setOption?.(val, meta);
        }}
        styles={{
          control: (provided, state) => ({
            ...provided,
            backgroundColor: isDisabled ? "#f3f4f6" : "#ffffff",
            border: isDisabled
              ? "1px solid #e5e7eb"
              : state.isFocused
              ? "1px solid #479da5"
              : "1px solid #e5e7eb",
            boxShadow: "none",
            padding: "0.3rem 0.4rem",
            borderRadius: "16px",
            minHeight: "48px",
            cursor: isDisabled ? "not-allowed" : "pointer",
            opacity: isDisabled ? 0.6 : 1,
            pointerEvents: isDisabled ? "none" : "auto", // 🔥 key
            transition: "all 0.2s ease",

            "&:hover": {
              border: isDisabled
                ? "1px solid #e5e7eb"
                : "1px solid #479da5",
            },
          }),

          menu: (provided) => ({
            ...provided,
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            marginTop: "8px",
            border: "1px solid #f1f5f9",
            boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
            overflow: "hidden",
            zIndex: 50,
            padding: "6px",
          }),

          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected
              ? "#479da5"
              : state.isFocused
              ? "rgba(71, 157, 165, 0.08)"
              : "transparent",
            color: state.isSelected ? "#ffffff" : "#111827",
            padding: "10px 12px",
            borderRadius: "10px",
            marginBottom: "2px",
            cursor: "pointer",
          }),

          singleValue: (provided) => ({
            ...provided,
            color: isDisabled ? "#9ca3af" : "#111827",
            fontWeight: 500,
          }),

          placeholder: (provided) => ({
            ...provided,
            color: "#9ca3af",
            fontSize: "0.9rem",
          }),

          dropdownIndicator: (provided, state) => ({
            ...provided,
            color: isDisabled
              ? "#d1d5db"
              : state.isFocused
              ? "#479da5"
              : "#9ca3af",
            transform: state.selectProps.menuIsOpen
              ? "rotate(180deg)"
              : "rotate(0deg)",
            cursor: isDisabled ? "not-allowed" : "pointer",
          }),

          indicatorSeparator: () => ({
            display: "none",
          }),
        }}
      />
    </div>
  );
}