import React from "react";

import type { IconType } from "./types";

function ExclamationCircleIcon({ color = "default", size = 4 }: IconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.2 8H12.8V9.6H11.2V8ZM12 16C12.44 16 12.8 15.64 12.8 15.2V12C12.8 11.56 12.44 11.2 12 11.2C11.56 11.2 11.2 11.56 11.2 12V15.2C11.2 15.64 11.56 16 12 16ZM12 4C7.584 4 4 7.584 4 12C4 16.416 7.584 20 12 20C16.416 20 20 16.416 20 12C20 7.584 16.416 4 12 4ZM12 18.4C8.472 18.4 5.6 15.528 5.6 12C5.6 8.472 8.472 5.6 12 5.6C15.528 5.6 18.4 8.472 18.4 12C18.4 15.528 15.528 18.4 12 18.4Z"
        fill="#3361FF"
      />
    </svg>
  );
}

export default ExclamationCircleIcon;
