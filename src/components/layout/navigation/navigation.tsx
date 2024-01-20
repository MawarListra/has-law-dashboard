import React from "react";
import Link from "next/link";

import useAppNav from "@/hooks/use-app-nav";

import NavButton from "./nav-button";
import { signOut } from "next-auth/react";
import LogoutIcon from "@/components/ui/Icons/logout-red";

interface NavigationProps {
  onMobileNav: () => any;
}

function Navigation({ onMobileNav }: NavigationProps) {
  const { navLinks, parentPath } = useAppNav();

  return (
    <nav className="mx-2">
      <ul>
        {navLinks.map((el, i) => (
          <li key={i}>
            {el.child.length === 0 ? (
              <Link href={el.path} onClick={onMobileNav}>
                <NavButton
                  name={el.name}
                  icon={el.icon}
                  isActive={parentPath === el.path}
                />
              </Link>
            ) : (
              <NavButton
                className="cursor-pointer"
                name={el.name}
                icon={el.icon}
                child={el.child}
                onClick={onMobileNav}
              />
            )}
          </li>
        ))}
        <li
          className={
            "flex h-12 w-full flex-row items-center rounded-md px-4 text-ui-gray-blue-80 transition duration-200 hover:text-ui-blue/80"
          }
        >
          <button
            className="flex flex-grow items-center gap-3"
            onClick={() => signOut({ callbackUrl: "/login" })}
          >
            <LogoutIcon />
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
