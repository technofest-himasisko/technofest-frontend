import { auth } from "@/lib/auth/auth";
import Footer from "@/ui/organisms/footer";
import Header from "@/ui/organisms/header";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default async function Layout({ children }: Readonly<Props>) {
  const session = await auth();

  if (!session) {
    return redirect("/login");
  }

  return (
    <>
      <Header session={session} />
      <main className="grow">{children}</main>
      <Footer minimal />
    </>
  );
}
