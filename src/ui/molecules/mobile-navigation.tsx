"use client";

import config from "@/config";
import { mobileNavigationState } from "@/lib/recoil/mobileNavigationAtom";
import { cn } from "@/lib/utils";
import { useRecoilState } from "recoil";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../atoms/collabsible";
import { CaretDown, FingerprintSimple } from "@phosphor-icons/react";
import Link from "next/link";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button } from "../atoms/button";

interface Props {
  session: Session;
}

export default function MobileNavigation({ session }: Props) {
  const [mobileNavigation, setMobileNavigation] = useRecoilState(
    mobileNavigationState,
  );

  const pathname = usePathname();

  function handleCloseMobileNavigation() {
    setMobileNavigation((prev) => {
      return {
        ...prev,
        opened: false,
      };
    });
  }

  useEffect(() => {
    handleCloseMobileNavigation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!mobileNavigation.opened) {
    return undefined;
  }

  return (
    <div
      className={cn(
        "no-doc-scroll fixed bottom-0 z-50 flex h-[calc(100dvh-4rem)] w-full flex-col bg-slate-950/50 backdrop-blur md:hidden",
      )}
    >
      <div className="container flex flex-col gap-y-8 pt-6 text-xl font-light">
        {config.headerNavigations.map((navigation: any, key) => (
          <div key={key} className="w-full">
            {navigation.children ? (
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <button className="flex w-full flex-row items-center justify-between text-slate-100 [&[data-state=open]>svg]:-rotate-180">
                    <span>{navigation.label}</span>
                    <CaretDown
                      size="1em"
                      className="transition-transform duration-200"
                    />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="ml-1 mt-6 flex flex-col gap-y-6 border-l-2 border-primary/40 pl-4">
                    {navigation.children.map(
                      (subnavigation: any, subkey: number) => (
                        <div key={subkey}>
                          <Link
                            onClick={handleCloseMobileNavigation}
                            href={subnavigation.href}
                            className="block focus:underline"
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
                onClick={handleCloseMobileNavigation}
                href={navigation.href}
                className="block focus:underline"
              >
                {navigation.label}
              </Link>
            )}
          </div>
        ))}

        {!session && (
          <Button asChild>
            <Link onClick={handleCloseMobileNavigation} href="/login">
              <FingerprintSimple
                weight="duotone"
                className="inline text-[1.5em]"
              />
              &nbsp;Login
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
