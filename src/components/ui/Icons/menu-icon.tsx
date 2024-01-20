import React from "react";

import type { IconType } from "./types";

function MenuIcon({ color = "default", size = 4 }: IconType) {
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
      <path d="M97 854V728h766v126H97Zm0-215V513h766v126H97Zm0-215V298h766v126H97Z" />
    </svg>
  );
}

export default MenuIcon;
