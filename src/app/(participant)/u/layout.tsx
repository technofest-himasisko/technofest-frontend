import Header from "@/ui/organisms/header";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Readonly<Props>) {
  return (
    <>
      <Header />
      <main className="grow">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
