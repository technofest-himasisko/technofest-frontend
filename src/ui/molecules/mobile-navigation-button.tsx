"use client";

import { mobileNavigationState } from "@/lib/recoil/mobileNavigationAtom";
import MenuButton from "@/ui/atoms/menu-button";
import { useRecoilState } from "recoil";

export default function MobileNavigationButton() {
  const [mobileNavigation, setMobileNavigation] = useRecoilState(
    mobileNavigationState,
  );

  function handleToggleMobileNavigation() {
    setMobileNavigation((prev) => {
      return {
        ...prev,
        opened: !mobileNavigation.opened,
      };
    });
  }

  return (
    <MenuButton
      onClick={handleToggleMobileNavigation}
      opened={mobileNavigation.opened}
      className="md:hidden"
    />
  );
}
