import React from "react";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}

function Label({ htmlFor, children, className }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`mb-2 block text-sm font-bold text-ui-gray-blue-50 ${className}`}
    >
      {children}
    </label>
  );
}

export default Label;
