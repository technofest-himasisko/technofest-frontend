"use client";

import { logout } from "@/lib/actions/logout";
import { getAvatarCallbackLetter, toParticipantId } from "@/lib/utils/common";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/atoms/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/atoms/dropdown-menu";
import {
  Compass,
  GearSix,
  SignOut,
  Ticket,
} from "@phosphor-icons/react/dist/ssr";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function UserMenu() {
  // const session = await getSession();
  const { data: session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar size="sm">
          <AvatarImage
            src={session?.user?.avatar || ""}
            alt={"Profile avatar"}
          />
          <AvatarFallback>
            {getAvatarCallbackLetter(session?.user?.name || "")}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        collisionPadding={{ left: 10, right: 10 }}
        className="min-w-56"
      >
        <DropdownMenuLabel>
          <p>{session?.user?.name}</p>
          <p className="text-xs font-normal text-slate-100/40">
            ID: {toParticipantId(session?.user?.uid || "")}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/u/home">
            <Compass className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/u/events">
            <Ticket className="mr-2 h-4 w-4" />
            <span>Daftar Events</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/u/setting">
            <GearSix className="mr-2 h-4 w-4" />
            <span>Setting</span>
          </Link>
        </DropdownMenuItem>
        <form action={logout}>
          <DropdownMenuItem
            asChild
            className="w-full text-red-500 focus:bg-red-500/10 focus:text-red-500"
          >
            <button type="submit">
              <SignOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </button>
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
