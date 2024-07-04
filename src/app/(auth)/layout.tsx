interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Readonly<Props>) {
  return (
    <>
      <main className="grow">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
