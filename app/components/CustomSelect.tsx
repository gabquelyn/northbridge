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
        newValue: SingleValue<{
          label: string;
          value: string;
        }>,
        actionMeta: ActionMeta<{
          label: string;
          value: string;
        }>
      ) => void)
    | undefined;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-900">
        {label}
      </label>

      <Select
        options={options}
        value={option}
        isDisabled={isDisabled}
        placeholder={`Select ${label.toLowerCase()}`}
        styles={{
          control: (provided, state) => ({
            ...provided,
            backgroundColor: isDisabled ? "#f9fafb" : "#ffffff",
            border: state.isFocused
              ? "1px solid #479da5"
              : "1px solid #e5e7eb",
            boxShadow: state.isFocused
              ? "none"
              : "none",
            padding: "0.3rem 0.4rem",
            borderRadius: "16px",
            minHeight: "48px",
            cursor: isDisabled ? "not-allowed" : "pointer",
            transition: "all 0.2s ease",
            opacity: isDisabled ? 0.7 : 1,
            "&:hover": {
              border: "1px solid #479da5",
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

          menuList: (provided) => ({
            ...provided,
            padding: 0,
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
            transition: "all 0.15s ease",
          }),

          input: (provided) => ({
            ...provided,
            color: "#111827",
          }),

          singleValue: (provided) => ({
            ...provided,
            color: "#111827",
            fontWeight: 500,
          }),

          placeholder: (provided) => ({
            ...provided,
            color: "#9ca3af",
            fontSize: "0.9rem",
          }),

          indicatorSeparator: () => ({
            display: "none",
          }),

          dropdownIndicator: (provided, state) => ({
            ...provided,
            color: state.isFocused ? "#479da5" : "#9ca3af",
            transition: "all 0.2s ease",
            transform: state.selectProps.menuIsOpen
              ? "rotate(180deg)"
              : "rotate(0deg)",
            "&:hover": {
              color: "#479da5",
            },
          }),

          valueContainer: (provided) => ({
            ...provided,
            padding: "0 6px",
          }),
        }}
        onChange={setOption}
      />
    </div>
  );
}