import React from "react";

import type { IconType } from "./types";

function EditIcon({ color = "default", size = 4 }: IconType) {
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
      <path d="M776 464 601 290l50-51q27-27 65.5-28t69.5 28l42 41q31 29 29 67t-29 65l-52 52ZM176 952q-26 0-44.5-18.5T113 889v-86q0-13 4.5-24t14.5-21l411-411 176 175-411 411q-10 10-21.5 14.5T262 952h-86Z" />
    </svg>
  );
}

export default EditIcon;
