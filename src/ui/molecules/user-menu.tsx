import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../atoms/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../atoms/dropdown-menu";
import { Compass, SignOut, Ticket, User } from "@phosphor-icons/react/dist/ssr";
import { logout } from "@/lib/actions/logout";
import { getAvatarCallbackLetter, getSession } from "@/lib/utils";

export default async function UserMenu() {
  const session = await getSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="size-7 md:size-10">
          <AvatarImage src={session.user?.image!} alt={"Profile avatar"} />
          <AvatarFallback>
            {getAvatarCallbackLetter(session.user?.name || "")}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        collisionPadding={{ left: 10, right: 10 }}
        className="min-w-56"
      >
        <DropdownMenuLabel>
          <p>{session.user?.name}</p>
          <p className="text-xs font-normal text-slate-100/40">ID: P8201212</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/u/home">
            <Compass className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/u/profile">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/u/events">
            <Ticket className="mr-2 h-4 w-4" />
            <span>Daftar Events</span>
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
