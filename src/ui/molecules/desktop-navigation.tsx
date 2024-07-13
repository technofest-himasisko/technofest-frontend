"use client";

import config from "@/config";
import { cn, tw } from "@/lib/utils";
import { Session } from "next-auth";
import Link from "next/link";
import { Button } from "../atoms/button";
import { CaretDown, FingerprintSimple } from "@phosphor-icons/react";
import { useState } from "react";

const navigationItemClassName = tw`transition-color flex h-10 flex-row items-center font-semibold uppercase duration-200 hover:text-primary`;

interface Props {
  session: Session;
}

export default function DesktopNavigation({ session }: Props) {
  return (
    <nav className="hidden md:block">
      <ul className="flex flex-row gap-x-6">
        {config.headerNavigations.map((navigation, key) => (
          <li key={key}>
            {navigation.children ? (
              <NavigationDropdown navigation={navigation} />
            ) : (
              <Link
                href={navigation.href}
                className={cn(navigationItemClassName)}
              >
                {navigation.label}
              </Link>
            )}
          </li>
        ))}

        {!session && (
          <li className="ml-4">
            <Button asChild>
              <Link href="/login">
                <FingerprintSimple
                  weight="duotone"
                  className="inline text-[1.5em]"
                />
                &nbsp;Login
              </Link>
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
}

function NavigationDropdown({ navigation }: { navigation: any }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <button className={cn(navigationItemClassName, "gap-x-1")}>
          <span>{navigation.label}</span>
          <CaretDown
            weight="duotone"
            className={cn(
              isDropdownVisible && "rotate-180",
              "text-[1.2em] text-primary transition-transform duration-200",
            )}
          />
        </button>
        {/* <DropdownMenu /> */}
        <div
          className={cn(
            !isDropdownVisible && "h-0",
            "absolute -left-4 top-10 overflow-hidden bg-slate-900",
          )}
        >
          <ul className="flex w-[24rem] flex-col p-5">
            {navigation.children.map((subnavigation: any, key: number) => (
              <li key={key}>
                <Link
                  href={subnavigation.href}
                  className={cn(
                    "group flex select-none flex-row items-center gap-x-4 space-y-1 border border-transparent p-3 leading-none no-underline outline-none transition-colors hover:border-primary/20 hover:bg-primary/10 focus:bg-primary/20",
                  )}
                >
                  <div className="flex h-16 w-16 items-center justify-center bg-primary/10 group-hover:bg-primary/20">
                    <subnavigation.icon
                      weight="duotone"
                      className="text-[2em] text-primary/80 group-hover:text-primary"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-semibold leading-none text-slate-100 group-hover:text-primary">
                      {subnavigation.label}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-400 group-hover:text-primary/70">
                      {subnavigation.description}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
