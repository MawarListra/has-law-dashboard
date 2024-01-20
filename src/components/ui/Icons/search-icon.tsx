import React from "react";

import type { IconType } from "./types";

function SearchIcon({ color = "default", size = 4 }: IconType) {
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
      <path d="M738 930 523 715q-29 20-67.5 32T372 759q-118 0-200.5-82.5T89 476q0-118 82.5-200.5T372 193q118 0 200.5 82.5T655 476q0 46-12 83.5T611 625l217 218q18 18 17.5 43.5T827 930q-18 18-44.5 18T738 930ZM372 633q66 0 111.5-45.5T529 476q0-66-45.5-111.5T372 319q-66 0-111.5 45.5T215 476q0 66 45.5 111.5T372 633Z" />
    </svg>
  );
}

export default SearchIcon;
