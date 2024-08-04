import { cn, isComingSoon } from "@/lib/utils/common";
import { FormButton } from "@/ui/atoms/form-button";
import { goodTimes } from "@/ui/fonts";
import MobileNavigation from "@/ui/molecules/mobile-navigation";
import MobileNavigationButton from "@/ui/molecules/mobile-navigation-button";
import UserMenu from "@/ui/molecules/user-menu";
import { Compass } from "@phosphor-icons/react/dist/ssr";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import DesktopNavigation from "../molecules/desktop-navigation";

interface Props {
  minimal?: boolean;
  session?: Session;
}

export default function Header({ minimal = false, session }: Props) {
  if (isComingSoon()) {
    return undefined;
  }

  return (
    <header className="relative">
      <div className="fixed z-20 flex h-16 w-full items-center bg-slate-950/50 backdrop-blur">
        <div className="container mx-auto flex flex-row items-center justify-between">
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

          {!minimal && (
            <div className="flex flex-row gap-x-6">
              <DesktopNavigation session={session!} />

              <div className="flex items-center gap-x-4">
                {session && (
                  <>
                    <FormButton
                      asChild
                      size="sm"
                      variant="ghost"
                      className="space-x-1 px-0 hover:bg-transparent"
                    >
                      <Link href="/u/home">
                        <Compass
                          weight="duotone"
                          className="inline size-8 md:size-7"
                        />
                        <span className="hidden md:inline">Dashboard</span>
                      </Link>
                    </FormButton>

                    <UserMenu />
                  </>
                )}

                <MobileNavigationButton />
              </div>
            </div>
          )}
        </div>
      </div>

      <MobileNavigation session={session!} />
    </header>
  );
}
