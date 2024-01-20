import React from "react";

import type { IconType } from "./types";

function AddCircleIcon({ color = "default", size = 4 }: IconType) {
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
      <path d="M432 624v112q0 20.4 13.8 34.2Q459.6 784 480 784q20.4 0 34.2-13.8Q528 756.4 528 736V624h112q20.4 0 34.2-13.8Q688 596.4 688 576q0-20.4-13.8-34.2Q660.4 528 640 528H528V416q0-20.4-13.8-34.2Q500.4 368 480 368q-20.4 0-34.2 13.8Q432 395.6 432 416v112H320q-20.4 0-34.2 13.8Q272 555.6 272 576q0 20.4 13.8 34.2Q299.6 624 320 624h112Zm48 386q-91 0-169.987-34.084-78.988-34.083-137.417-92.512T80.084 745.987Q46 667 46 576t34.084-169.987q34.083-78.988 92.512-137.417t137.417-92.512Q389 142 480 142t169.987 34.084q78.988 34.083 137.417 92.512t92.512 137.417Q914 485 914 576t-34.084 169.987q-34.083 78.988-92.512 137.417t-137.417 92.512Q571 1010 480 1010Zm0-126q130 0 219-89t89-219q0-130-89-219t-219-89q-130 0-219 89t-89 219q0 130 89 219t219 89Zm0-308Z" />
    </svg>
  );
}

export default AddCircleIcon;
