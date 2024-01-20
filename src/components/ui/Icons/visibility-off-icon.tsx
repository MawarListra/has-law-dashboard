import React from "react";

import type { IconType } from "./types";

function VisibilityOffIcon({ color = "default", size = 4 }: IconType) {
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
      <path d="M804 765 650 611q5-12 7.5-28t2.5-27q0-75-52.5-127.5T480 376q-13 0-27 2.5t-28 7.5L298 259q41-17 88-25.5t94-8.5q146 0 266.5 77T933 514q5 8 6.5 19.5T941 556q0 11-2 22.5t-6 19.5q-24 49-57.5 92T804 765Zm-58 214L630 863q-33 12-70.5 18t-79.5 6q-146 0-266.5-77.5T27 598q-5-8-6.5-19.5T19 556q0-11 1.5-22.5T27 514q20-41 47.5-78t59.5-69l-72-73q-14-14-14-33t14-33q14-14 33.5-14t33.5 14l684 684q14 14 14 33.5T813 979q-14 14-33.5 14T746 979ZM480 736q6 0 11.5-.5T503 733L301 533q-1 6-1 12v11q0 75 52.5 127.5T480 736Zm75-220-28-28q14-2 22 7.5t6 20.5Z" />
    </svg>
  );
}

export default VisibilityOffIcon;
