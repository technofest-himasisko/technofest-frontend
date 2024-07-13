import { atom } from "recoil";

export type MobileNavigation = {
  opened: boolean;
};

const defaultMobileNavigation: MobileNavigation = {
  opened: false,
};

export const mobileNavigationState = atom<MobileNavigation>({
  key: "mobileNavigationState",
  default: defaultMobileNavigation,
});
