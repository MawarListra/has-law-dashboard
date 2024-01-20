import React from "react";

import type { IconType } from "./types";

function UploadIcon({ color = "default", size = 4 }: IconType) {
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
      <path d="M220-96q-53 0-89.5-36.5T94-222v-181h126v181h518v-181h126v181q0 53-36.5 89.5T738-96H220Zm197-252v-306l-96 97-89-89 248-248 248 248-89 89-96-97v306H417Z" />
    </svg>
  );
}

export default UploadIcon;
