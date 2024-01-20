import React from "react";

interface TagProps {
  color?: "blue" | "red" | "light";
  fill?: boolean;
  children: React.ReactNode;
}

function Tag({ color, fill, children }: TagProps) {
  const tagColor =
    color === "red"
      ? "bg-ui-red"
      : color === "light"
      ? "bg-white shadow-md"
      : "bg-ui-blue";

  return (
    <React.Fragment>
      <div
        className={`relative ${
          color === "light" ? "text-ui-gray-blue-60" : "text-white"
        }`}
      >
        <div
          className={`${
            !fill ? "w-fit" : "w-full"
          } rounded-full ${tagColor} px-3 py-2 text-center text-xs`}
        >
          {children}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Tag;
