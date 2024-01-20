import React from "react";

import type { IconType } from "./types";

function ListAltIcon({ color = "default", size = 4 }: IconType) {
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
      <path d="M212 970q-53 0-89.5-36.5T86 844V308q0-53 36.5-89.5T212 182h536q53 0 89.5 36.5T874 308v536q0 53-36.5 89.5T748 970H212Zm0-126h536V308H212v536Zm108-74q17 0 28.5-11.5T360 730q0-17-11.5-28.5T320 690q-17 0-28.5 11.5T280 730q0 17 11.5 28.5T320 770Zm0-154q17 0 28.5-11.5T360 576q0-17-11.5-28.5T320 536q-17 0-28.5 11.5T280 576q0 17 11.5 28.5T320 616Zm0-154q17 0 28.5-11.5T360 422q0-17-11.5-28.5T320 382q-17 0-28.5 11.5T280 422q0 17 11.5 28.5T320 462Zm160 308h160q17 0 28.5-11.5T680 730q0-17-11.5-28.5T640 690H480q-17 0-28.5 11.5T440 730q0 17 11.5 28.5T480 770Zm0-154h160q17 0 28.5-11.5T680 576q0-17-11.5-28.5T640 536H480q-17 0-28.5 11.5T440 576q0 17 11.5 28.5T480 616Zm0-154h160q17 0 28.5-11.5T680 422q0-17-11.5-28.5T640 382H480q-17 0-28.5 11.5T440 422q0 17 11.5 28.5T480 462ZM212 844V308v536Z" />
    </svg>
  );
}

export default ListAltIcon;
