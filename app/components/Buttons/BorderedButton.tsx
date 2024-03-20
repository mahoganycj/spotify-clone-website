import React, { ReactNode } from "react";
import { RoundedButton } from "./RoundedButton";

type BorderedButtonProps = {
    type?: "submit" | "reset" | "button" | undefined
    className: string
    href?: string
    children: ReactNode;
}

export const BorderedButton = ({ type, href, className, children }: BorderedButtonProps) => {
  return (
    <RoundedButton
      type={type}
      href={href}
      className={`border-[1px] px-3 border-zinc-500 hover:border-white ${className}`}
    >
      {children}
    </RoundedButton>
  );
};
