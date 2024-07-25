import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default async function Layout({ children }: Readonly<Props>) {
  const session = await auth();

  if (!session?.user?.user_profile) {
    return redirect("/u");
  }

  return children;
}
