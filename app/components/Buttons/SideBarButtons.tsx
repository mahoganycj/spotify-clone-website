import { FlatButton } from "./FlatButton";
import { ReactNode } from "react";

type SideBarButtonsProps = {
  icon: ReactNode;
  label: string;
  href: string;
  active: boolean;
}

export const SideBarButtons = ({icon, label, href, active = false}: SideBarButtonsProps) => {
  return (
  <FlatButton
    href={href}
    className={`flex gap-5 text-md font-bold text-neutral02 hover:text-white ${
      active ? "text-white" : "text-neutral-400"
    }`}
  >
    {icon}
    {label}
  </FlatButton>)
};
