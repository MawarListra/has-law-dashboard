import React from "react";

import type { IconType } from "./types";

function OpenInNewIcon({ color = "default", size = 4 }: IconType) {
  return (
    <svg
      className={`h-${size} w-${size} ${
        color === "default" && "text-inherit"
      } ${color === "red" && "text-ui-red"} ${
        color === "blue" && "text-ui-blue"
      } ${color}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      aria-hidden="true"
    >
      <path d="M212-86q-53 0-89.5-36.5T86-212v-536q0-53 36.5-89.5T212-874h268v126H212v536h536v-268h126v268q0 53-36.5 89.5T748-86H212Zm207-246-87-87 329-329H560v-126h314v314H748v-101L419-332Z" />
    </svg>
  );
}

export default OpenInNewIcon;
