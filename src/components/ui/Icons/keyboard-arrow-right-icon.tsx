import React from "react";

import type { IconType } from "./types";

function KeyboardArrowRightIcon({ color = "default", size = 4 }: IconType) {
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
      <path d="M332 804q-18-18-18-44t18-44l140-140-140-140q-18-18-18-44t18-44q18-18 44-18t44 18l184 184q9 9 13.5 20.5T622 576q0 12-4.5 23.5T604 620L420 804q-18 18-44 18t-44-18Z" />
    </svg>
  );
}

export default KeyboardArrowRightIcon;
