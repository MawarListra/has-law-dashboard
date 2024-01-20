import React from "react";

import type { IconType } from "./types";

function DeleteIcon({ color = "default", size = 4 }: IconType) {
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
      ria-hidden="true"
    >
      <path d="M269 970q-53 0-89.5-36.5T143 844V347q-26 0-44.5-18.5T80 284q0-26 18.5-44.5T143 221h195q0-26 18.5-44.5T401 158h158q26 0 44.5 18.5T622 221h195q26 0 44.5 18.5T880 284q0 26-18.5 44.5T817 347v497q0 53-36.5 89.5T691 970H269Zm73-246q0 21 15 36t36 15q21 0 36.5-15t15.5-36V467q0-21-15.5-36.5T393 415q-21 0-36 15.5T342 467v257Zm173 0q0 21 15.5 36t36.5 15q21 0 36-15t15-36V467q0-21-15-36.5T567 415q-21 0-36.5 15.5T515 467v257Z" />
    </svg>
  );
}

export default DeleteIcon;
