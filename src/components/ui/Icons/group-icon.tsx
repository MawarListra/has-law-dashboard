import React from "react";

import type { IconType } from "./types";

function GroupIcon({ color = "default", size = 4 }: IconType) {
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
      width="24"
      viewBox="0 96 960 960"
      aria-hidden="true"
      shapeRendering="optimizeSpeed"
    >
      <path d="M72 947q-26 0-44.5-18.5T9 884v-85q0-43 22.5-79.5T92 664q65-32 133-48.5T363 599q72 0 140 16t131 48q38 19 60.5 55t22.5 81v85q0 26-18.5 44.5T654 947H72Zm710 0q13-11 21.5-27.5T812 883v-89q0-48-23.5-93.5T717 611q40 8 77 21t72 31q40 20 62.5 56t22.5 78v87q0 26-18.5 44.5T888 947H782ZM363 559q-74 0-125.5-51.5T186 382q0-74 51.5-125.5T363 205q74 0 125.5 51.5T540 382q0 74-51.5 125.5T363 559Zm449-177q0 73-52 125t-125 52q-12 0-28-3t-31-8q29-34 44-77t15-89q0-46-15-89t-44-77q15-6 29-8.5t30-2.5q73 0 125 52t52 125Z" />
    </svg>
  );
}

export default GroupIcon;
