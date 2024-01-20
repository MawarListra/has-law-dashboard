import React from "react";

import type { IconType } from "./types";

function ChangeHistoryIcon({ color = "default", size = 4 }: IconType) {
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
      <path d="M132 930q-37 0-55-32.5t2-64.5l348-556q18-30 53-30t53 30l348 556q20 32 2 64.5T828 930H132Zm113-126h470L480 429 245 804Zm235-188Z" />
    </svg>
  );
}

export default ChangeHistoryIcon;
