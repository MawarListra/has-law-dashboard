import React from "react";

import type { IconType } from "./types";

function CodeIcon({ color = "default", size = 4 }: IconType) {
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
      shapeRendering="optimizeSpeed"
    >
      <path d="M699 805q-18 18-44.5 17.5T610 804q-18-18-18-44.5t18-44.5l139-139-139-139q-18-18-17.5-44t18.5-44q18-18 44.5-18t44.5 18l183 183q18 18 18 44t-18 44L699 805Zm-438-2L77 620q-18-18-18-44t18-44l184-185q18-18 45-18t45 18q18 18 18 44.5T351 436L211 576l139 139q18 18 18 44t-18 44q-18 18-44.5 18T261 803Z" />
    </svg>
  );
}

export default CodeIcon;
