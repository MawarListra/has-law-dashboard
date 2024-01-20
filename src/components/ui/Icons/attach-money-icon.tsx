import React from "react";

import type { IconType } from "./types";

function AttachMoneyIcon({ color = "default", size = 4 }: IconType) {
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
      <path d="M483 951q-20 0-34-13.5T435 904v-42q-48-11-83.5-38.5T294 750q-9-20 1-41.5t33-29.5q19-8 38.5 1t33.5 30q16 24 39 36t52 12q38 0 60-14t22-44q0-28-23-48t-101-43q-82-25-116-67t-34-100q0-61 39.5-102t96.5-52v-40q0-20 14-33.5t34-13.5q20 0 33.5 13.5T530 248v40q38 9 67.5 27.5T647 363q13 18 4.5 40.5T619 436q-16 7-35 1t-42-24q-11-10-26.5-15.5T480 392q-37 0-53.5 13.5T410 439q0 26 22.5 42T533 520q73 22 112 68t39 110q0 75-44 115t-110 51v40q0 20-13.5 33.5T483 951Z" />
    </svg>
  );
}

export default AttachMoneyIcon;
