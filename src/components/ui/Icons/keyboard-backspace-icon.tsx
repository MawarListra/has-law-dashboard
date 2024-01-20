import React from "react";

import type { IconType } from "./types";

function KeyboardBackspaceIcon({ color = "default", size = 4 }: IconType) {
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
      <path d="M365 848 92 576l273-272 88 88-121 121h536v126H332l121 121-88 88Z" />
    </svg>
  );
}

export default KeyboardBackspaceIcon;
