interface Props {
  children: React.ReactNode;
}

export default function CommonPageContainer({ children }: Props) {
  return <div className="mt-16">{children}</div>;
}
