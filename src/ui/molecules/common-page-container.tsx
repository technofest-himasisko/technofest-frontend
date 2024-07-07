interface Props {
  children: React.ReactNode;
}

export default function CommonPageContainer({ children }: Props) {
  return <div className="min-h-[100dvh] pb-20 pt-16">{children}</div>;
}
