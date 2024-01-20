import React from "react";

import type { InputProps } from "../types";

function Input({
  name,
  value,
  placeholder,
  requiredMessages,
  type = "text",
  size = "default",
  inputMode = "text",
  fit = false,
  rounded = false,
  required = false,
  disabled = false,
  readOnly = false,
  iconLeft,
  iconRight,
  onChange,
  onKeyDown,
  onClick,
  onClickLeft,
  onClickRight,
  className = "",
  props,
}: InputProps) {
  const inputSize =
    size === "small"
      ? `${type !== "date" ? "p-2" : "p-[7px]"} text-xs md:text-sm`
      : size === "default"
      ? `${type !== "date" ? "p-2.5" : "p-[9px]"}`
      : `${type !== "date" ? "p-4" : "p-[15px]"} md:text-base`;
  return (
    <div className={`relative ${fit && "w-fit"} text-ui-gray-blue-50`}>
      {/* LEFT*/}
      {iconLeft && (
        <div
          className={`${
            onClickLeft && "cursor-pointer"
          } absolute inset-y-0 left-0 flex items-center pl-4 text-ui-gray-blue-80`}
          onClick={onClickLeft}
        >
          {React.cloneElement(iconLeft, { size: 4 })}
        </div>
      )}

      {/* MAIN INPUT */}
      <input
        type={type}
        id={name}
        name={name}
        value={value ?? ""}
        className={`w-full ${
          rounded ? "rounded-full" : "rounded-lg"
        } border-2 border-solid border-ui-gray-blue-97 bg-white ${inputSize} ${
          iconRight && `pr-10 md:pr-10`
        } ${
          iconLeft && "pl-10 md:pl-10"
        } font-bold shadow-md transition duration-100 placeholder:text-ui-gray-blue-70 focus:border-ui-blue/50 focus:outline-none focus:ring-1 focus:ring-ui-blue/50 disabled:border-ui-gray-blue-97/0 disabled:bg-ui-gray-blue-90 disabled:text-ui-gray-blue-40 ${className}`}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onClick={onClick}
        onInvalid={(e) => {
          if (requiredMessages) {
            (e.target as HTMLInputElement).setCustomValidity(requiredMessages);
          }
        }}
        onInput={(e) => {
          if (requiredMessages) {
            (e.target as HTMLInputElement).setCustomValidity("");
          }
        }}
        placeholder={placeholder}
        inputMode={inputMode}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        {...props}
      />

      {/* <input
        type="hidden"
        className="block w-full rounded-full border-2 border-solid border-ui-gray-blue-97 bg-white p-2.5 pr-10 text-sm font-medium shadow-md shadow-[rgba(38,51,77,0.03)] placeholder:text-ui-gray-blue-70 focus:border-ui-blue/50 focus:outline-none focus:ring-1 focus:ring-ui-blue/50 disabled:border-ui-gray-blue-97/0 disabled:bg-gray-200 md:p-4 md:font-bold"
      /> */}

      {/* RIGHT */}
      {iconRight && (
        <div
          className={`${
            onClickRight && "cursor-pointer"
          } absolute inset-y-0 right-0 flex items-center pr-4 text-sm font-medium text-ui-gray-blue-80`}
          onClick={onClickRight}
        >
          {React.cloneElement(iconRight, { size: 4 })}
        </div>
      )}
    </div>
  );
}

export default Input;
