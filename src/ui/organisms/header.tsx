import { isComingSoon } from "@/lib/utils";

export default function Header() {
  if (isComingSoon()) {
    return undefined;
  }

  return <header></header>;
}
