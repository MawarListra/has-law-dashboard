import React from "react";

import type { IconType } from "./types";

function KeyboardArrowLeftIcon({ color = "default", size = 4 }: IconType) {
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
      <path d="M516 804 332 620q-9-9-13.5-20.5T314 576q0-12 4.5-23.5T332 532l184-184q18-18 44-18t44 18q18 18 18 44t-18 44L464 576l140 140q18 18 18 44t-18 44q-18 18-44 18t-44-18Z" />
    </svg>
  );
}

export default KeyboardArrowLeftIcon;
