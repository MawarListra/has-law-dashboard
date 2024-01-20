import React from "react";
import KeyboardArrowRightIcon from "../Icons/keyboard-arrow-right-icon";
import Link from "next/link";

interface BreadcrumbProps {
  item: {
    title: string;
    linkTo?: string;
    active?: boolean;
  }[];
  className?: string;
}

const BreadcrumbItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <li className={`inline-flex items-center ${className}`}>{children}</li>
);

function Breadcrumb({ item, className = "" }: BreadcrumbProps) {
  return (
    <div className={`flex text-ui-gray-blue-80 ${className}`}>
      <ol
        className="inline-flex items-center space-x-2 md:space-x-4"
        aria-label="Breadcrumb"
      >
        {item.map((el, i) => (
          <React.Fragment key={i}>
            {el.linkTo && !el.active ? (
              <Link href={el.linkTo}>
                <BreadcrumbItem className="cursor-pointer transition duration-200 hover:text-ui-blue">
                  {el.title}
                </BreadcrumbItem>
              </Link>
            ) : (
              <BreadcrumbItem className={`${el.active && "text-ui-blue"}`}>
                {el.title}
              </BreadcrumbItem>
            )}
            {i < item.length - 1 && (
              <BreadcrumbItem>
                <KeyboardArrowRightIcon />
              </BreadcrumbItem>
            )}
          </React.Fragment>
        ))}
      </ol>
    </div>
  );
}

export default Breadcrumb;
