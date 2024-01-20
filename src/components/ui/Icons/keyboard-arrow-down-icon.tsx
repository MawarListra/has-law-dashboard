import React from "react";

import type { IconType } from "./types";

function KeyboardArrowDownIcon({ color = "default", size = 4 }: IconType) {
  return (
    <svg
      className={`h-${size} w-${size} ${
        color === "default" && "text-inherit"
      } ${color === "red" && "text-ui-red"} ${
        color === "blue" && "text-ui-blue"
      }`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 96 960 960"
      width="24"
      aria-hidden="true"
    >
      <path d="M480 718q-12 0-23.5-4.5T436 700L252 516q-18-18-18-44t18-44q18-18 44-18t44 18l140 140 140-140q18-18 44-18t44 18q18 18 18 44t-18 44L524 700q-9 9-20.5 13.5T480 718Z" />
    </svg>
  );
}

export default KeyboardArrowDownIcon;
