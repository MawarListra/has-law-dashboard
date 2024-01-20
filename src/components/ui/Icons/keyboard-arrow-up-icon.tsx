import React from "react";

import type { IconType } from "./types";

function KeyboardArrowUpIcon({ color = "default", size = 4 }: IconType) {
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
      <path d="M252 700q-18-18-18-44t18-44l184-184q10-10 21-14t23-4q12 0 23.5 4.5T524 428l184 184q18 18 18 44t-18 44q-18 18-44 18t-44-18L480 560 340 700q-18 18-44 18t-44-18Z" />
    </svg>
  );
}

export default KeyboardArrowUpIcon;
