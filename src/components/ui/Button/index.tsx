import React from "react";

interface ButtonProps {
  type?: "button" | "submit";
  color?: "blue" | "red" | "light";
  size?: "small" | "default" | "large";
  fit?: boolean;
  rounded?: boolean;
  outlined?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  className?: string;
  onClick?: () => any;
  children: React.ReactNode;
}

function Button({
  type = "button",
  color = "blue",
  size = "default",
  className = "",
  fit = false,
  rounded = false,
  outlined = false,
  disabled = false,
  iconLeft,
  iconRight,
  onClick,
  children,
}: ButtonProps) {
  const btnSize =
    size === "small"
      ? "px-3 py-2 text-xs md:px-3 md:py-2 md:text-sm"
      : size === "default"
      ? "px-3 py-2 md:px-5 md:py-2.5"
      : "px-5 py-2.5 md:px-5 md:py-3 md:text-base";

  const btnColor =
    color === "blue"
      ? `border-ui-blue focus:ring-ui-blue/30 ${
          outlined ? "disabled:border-ui-blue/70" : "disabled:border-ui-blue/0"
        }`
      : color === "red"
      ? `border-ui-red focus:ring-ui-red/30 ${
          outlined ? "disabled:border-ui-red/70" : "disabled:border-ui-red/0"
        }`
      : `border-white shadow-md focus:ring-ui-gray-blue-60/30 ${
          outlined
            ? "border-ui-gray-blue-60 disabled:border-ui-gray-blue-60/50"
            : "disabled:border-white/0"
        }`;

  // prettier-ignore
  const btnOutlined = outlined
    ? (color === "blue"
      ? "text-ui-blue disabled:text-ui-blue/70"
      : color === "red"
      ? "text-ui-red disabled:text-ui-red/70"
      : "text-ui-gray-blue-60 disabled:text-ui-gray-blue-60/50")
    : (color === "blue"
    ? "bg-ui-blue disabled:bg-ui-blue/70"
    : color === "red"
    ? "bg-ui-red disabled:bg-ui-red/70"
    : "bg-white disabled:bg-ui-gray-blue-60/30");

  return (
    <React.Fragment>
      <div
        className={`flex ${fit ? "w-fit" : "w-full"} ${
          color === "light" ? "text-ui-gray-blue-60" : "text-white"
        }`}
      >
        {/* MAIN BUTTON */}
        <button
          type={type}
          className={`flex w-full flex-row items-center justify-center gap-2 text-center ${
            rounded ? "rounded-full" : "rounded-lg"
          } border-2 border-solid ${btnColor} ${btnOutlined} ${btnSize} text-center focus:outline-none focus:ring-4 disabled:cursor-not-allowed ${className}`}
          onClick={onClick}
          disabled={disabled}
        >
          {/* LEFT */}
          {iconLeft && (
            <div className={`flex items-center`}>
              {React.cloneElement(iconLeft, { size: 4 })}
            </div>
          )}
          {children}
          {/* RIGHT */}
          {iconRight && (
            <div className={`absolute inset-y-0 right-0 flex items-center`}>
              {React.cloneElement(iconRight, { size: 4 })}
            </div>
          )}
        </button>

        {/* <input
          type="hidden"
          className="w-full rounded-lg border-2 border-solid border-ui-blue bg-ui-blue p-2.5 px-5 pl-10 text-center text-xs text-ui-blue focus:outline-none focus:ring-4 focus:ring-ui-blue/30 disabled:bg-ui-blue/70 md:p-4"
        /> */}
      </div>
    </React.Fragment>
  );
}

export default Button;
