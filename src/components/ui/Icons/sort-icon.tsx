import React from "react";

import type { IconType } from "./types";

function SortIcon({ color = "default", size = 4 }: IconType) {
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
      viewBox="0 -960 960 960"
      width="24"
      aria-hidden="true"
    >
      <path d="M97-202v-126h286v126H97Zm0-215v-126h526v126H97Zm0-215v-126h766v126H97Z" />
    </svg>
  );
}

export default SortIcon;
