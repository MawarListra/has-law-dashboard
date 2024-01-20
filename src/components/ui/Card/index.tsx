import React from "react";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

function Card({ children, className }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white p-4 shadow sm:p-6 md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
