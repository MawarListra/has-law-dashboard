import React from "react";

import type { IconType } from "./types";

function FolderIcon({ color = "default", size = 4 }: IconType) {
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
      shapeRendering="optimizeSpeed"
    >
      <path d="M172 930q-53 0-89.5-36.5T46 804V333q0-53 36.5-89.5T172 207h161q25.244 0 48.122 10T421 244l59 58h308q53 0 89.5 36.5T914 428v376q0 53-36.5 89.5T788 930H172Zm0-597v471h616V428H428l-95-95H172Zm0 0v471-471Z" />
    </svg>
  );
}

export default FolderIcon;
