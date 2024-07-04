"use client";

import { cn, isComingSoon, tw } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { goodTimes } from "../fonts";
import MenuButton from "../atoms/menu-button";
import config from "@/config";
import { CaretDown, FingerprintSimple } from "@phosphor-icons/react";
import { Button } from "../atoms/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../atoms/collabsible";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const [isMobileNavOpened, setIsMobileNavOpened] = useState<boolean>(false);

  function toggleMobileNav(isOpened: boolean) {
    setIsMobileNavOpened(isOpened);
  }

  useEffect(() => {
    setIsMobileNavOpened(false);
  }, [pathname]);

  if (isComingSoon()) {
    return undefined;
  }

  return (
    <header className="relative">
      <div className="fixed z-20 flex h-16 w-full items-center bg-slate-950/50 backdrop-blur">
        <div className="container mx-auto flex flex-row items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex flex-row items-center gap-x-4">
            <Image
              src="/images/tf2024_Regular.svg"
              alt=""
              width={32}
              height={32}
            />
            <p className={cn(goodTimes.className, "hidden md:block")}>
              <span className="text-slate-200">Technofest</span>
              &nbsp;
              <span className="text-primary">2024</span>
            </p>
          </Link>

          {/* NAVIGATIONS */}
          <nav className="hidden md:block">
            <ul className="flex flex-row gap-x-6">
              {config.headerNavigations.map((navigation, key) => (
                <li key={key}>
                  {navigation.children ? (
                    <NavigationDropdown navigation={navigation} />
                  ) : (
                    <Link
                      href={navigation.href}
                      className={cn(navigationLinkClassName)}
                    >
                      {navigation.label}
                    </Link>
                  )}
                </li>
              ))}

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
            </ul>
          </nav>

          {/* MOBILE NAV TOGGLE */}
          <MenuButton onClick={toggleMobileNav} className="md:hidden" />
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={cn(
          !isMobileNavOpened ? "hidden" : "flex",
          "fixed bottom-0 z-50 h-[calc(100dvh-4rem)] w-full flex-col bg-slate-950/50 backdrop-blur md:hidden",
        )}
      >
        <div className="container flex flex-col gap-y-6 pt-6 text-lg">
          {config.headerNavigations.map((navigation: any, key) => (
            <div key={key} className="w-full">
              {navigation.children ? (
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <button className="flex w-full flex-row items-center justify-between font-semibold text-slate-100">
                      <span>{navigation.label}</span>
                      <CaretDown size="1em" />
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="ml-1 mt-4 flex flex-col gap-y-6 border-l-2 border-slate-300 pl-4">
                      {navigation.children.map(
                        (subnavigation: any, subkey: number) => (
                          <div key={subkey}>
                            <Link
                              href={subnavigation.href}
                              className="block font-semibold focus:underline"
                            >
                              {subnavigation.label}
                            </Link>
                          </div>
                        ),
                      )}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link
                  href={navigation.href}
                  className="block font-semibold focus:underline"
                >
                  {navigation.label}
                </Link>
              )}
            </div>
          ))}

          <Button asChild>
            <Link href="/login">
              <FingerprintSimple
                weight="duotone"
                className="inline text-[1.5em]"
              />
              &nbsp;Login
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

const navigationLinkClassName = tw`transition-color flex h-10 flex-row items-center font-semibold uppercase duration-200 hover:text-primary`;

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
        <button className={cn(navigationLinkClassName, "gap-x-1")}>
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
            "absolute -left-4 top-10 overflow-hidden bg-slate-900/80",
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
