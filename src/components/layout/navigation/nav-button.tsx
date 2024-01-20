import React from "react";
import Link from "next/link";

import useAppNav from "@/hooks/use-app-nav";

import KeyboardArrowDownIcon from "@/components/ui/Icons/keyboard-arrow-down-icon";
import KeyboardArrowUpIcon from "@/components/ui/Icons/keyboard-arrow-up-icon";

interface Props {
  name: string;
  icon: React.ReactElement;
  isActive?: boolean;
  child?: {
    name: string;
    path: string;
  }[];
  className?: string;
  onClick?: () => any;
}

function NavButton(props: Props) {
  const { name, icon, child = [], className, onClick = () => {} } = props;
  const { parentPath } = useAppNav();

  const childPath = child.find((el) => el.path === parentPath);
  const isParentActive = props.isActive || Boolean(childPath);

  const renderDropdown = child.length > 0;
  const HtmlTag = renderDropdown || name === "Logout" ? "button" : "div";

  const [toggleDropdown, setToggleDropdown] = React.useState(false);

  return (
    <div className="mb-4 text-sm">
      <HtmlTag
        className={`${
          renderDropdown && "mb-4"
        } flex h-12 w-full flex-row items-center rounded-md ${
          isParentActive
            ? "bg-ui-blue/20 text-ui-blue/80"
            : "text-ui-gray-blue-80"
        } px-4 transition duration-200 hover:text-ui-blue/80 ${className}`}
        onClick={() => {
          if (renderDropdown) setToggleDropdown(!toggleDropdown);
          if (name === "Logout") onClick;
        }}
      >
        <div className="flex flex-grow items-center gap-3">
          <span>{React.cloneElement(icon, { size: 5 })}</span>
          <span>{name}</span>
        </div>

        {renderDropdown && (
          <span>
            {toggleDropdown ? (
              <KeyboardArrowUpIcon size={5} />
            ) : (
              <KeyboardArrowDownIcon size={5} />
            )}
          </span>
        )}
      </HtmlTag>
      {renderDropdown && toggleDropdown && (
        <ul className="flex w-full flex-col pl-8 pr-4 font-bold text-ui-gray-blue-70">
          {child.map((el, i) => (
            <li
              key={i}
              className={`${
                child.length !== i + 1 && "mb-4"
              } flex h-12 items-center ${
                childPath?.path === el.path && "text-ui-blue/70"
              }  transition duration-200 hover:text-ui-blue/70`}
            >
              <Link href={el.path} onClick={props.onClick}>
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavButton;
