import React from "react";

import type { IconType } from "./types";

function RadioButtonCheckedIcon({ color = "default", size = 4 }: IconType) {
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
      <path d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 234q-91 0-169.987-34.084-78.988-34.083-137.417-92.512T80.084-310.013Q46-389 46-480t34.084-169.987q34.083-78.988 92.512-137.417t137.417-92.512Q389-914 480-914t169.987 34.084q78.988 34.083 137.417 92.512t92.512 137.417Q914-571 914-480t-34.084 169.987q-34.083 78.988-92.512 137.417T649.987-80.084Q571-46 480-46Z" />
    </svg>
  );
}

export default RadioButtonCheckedIcon;