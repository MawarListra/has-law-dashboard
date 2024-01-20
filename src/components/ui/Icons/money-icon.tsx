import React from "react";

import type { IconType } from "./types";

function MoneyIcon({ color = "default", size = 4 }: IconType) {
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
      <path d="M600 736h120q17 0 28.5-11.5T760 696V456q0-17-11.5-28.5T720 416H600q-17 0-28.5 11.5T560 456v240q0 17 11.5 28.5T600 736Zm40-80V496h40v160h-40Zm-280 80h120q17 0 28.5-11.5T520 696V456q0-17-11.5-28.5T480 416H360q-17 0-28.5 11.5T320 456v240q0 17 11.5 28.5T360 736Zm40-80V496h40v160h-40Zm-160 80q17 0 28.5-11.5T280 696V456q0-17-11.5-28.5T240 416q-17 0-28.5 11.5T200 456v240q0 17 11.5 28.5T240 736Zm-80 206q-51.975 0-88.987-37.013Q34 867.975 34 816V336q0-51.975 37.013-88.987Q108.025 210 160 210h640q51.975 0 88.987 37.013Q926 284.025 926 336v480q0 51.975-37.013 88.987Q851.975 942 800 942H160Zm0-126h640V336H160v480Zm0 0V336v480Z" />
    </svg>
  );
}

export default MoneyIcon;
