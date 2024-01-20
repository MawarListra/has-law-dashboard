import React from "react";

import type { IconType } from "./types";

function VisibilityIcon({ color = "default", size = 4 }: IconType) {
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
      <path d="M480 736q75 0 127.5-52.5T660 556q0-75-52.5-127.5T480 376q-75 0-127.5 52.5T300 556q0 75 52.5 127.5T480 736Zm.176-93Q444 643 418.5 617.676 393 592.353 393 556.177 393 520 418.324 494.5q25.323-25.5 61.5-25.5Q516 469 541.5 494.323q25.5 25.324 25.5 61.5Q567 592 541.677 617.5 516.353 643 480.176 643ZM480 887q-146 0-267.5-79T27 598q-4.8-7.75-6.4-19.375Q19 567 19 556t1.6-22.625Q22.2 521.75 27 514q64-131 185.5-210T480 225q146 0 267.5 79T933 514q4.8 7.75 6.4 19.375Q941 545 941 556t-1.6 22.625Q937.8 590.25 933 598q-64 131-185.5 210T480 887Z" />
    </svg>
  );
}

export default VisibilityIcon;
