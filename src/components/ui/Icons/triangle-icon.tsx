import React from "react";

import type { IconType } from "./types";

function TriangleIcon({ color = "default", size = 4 }: IconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.1998 9.8825L21.5898 20.1125H8.80985L15.1998 9.8825ZM14.3498 7.4725L6.14985 20.5825C5.73985 21.2525 6.21985 22.1125 6.99985 22.1125H23.3998C24.1898 22.1125 24.6598 21.2525 24.2498 20.5825L16.0498 7.4725C15.6598 6.8425 14.7398 6.8425 14.3498 7.4725Z"
        fill="#ADB8CC"
      />
    </svg>
  );
}

export default TriangleIcon;
