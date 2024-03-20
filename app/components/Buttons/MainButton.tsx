import React, { ReactNode } from "react";
import { RoundedButton } from "./RoundedButton";

type MainButtonProps = {
    type?: "submit" | "reset" | "button" | undefined;
    className?: string;
    href?: string;
    children: ReactNode;
  };

export const MainButton = ({ type, href, className, children }: MainButtonProps) => {
  return (
    <RoundedButton
      type={type}
      href={href}
      className={`text-black justify-center font-bold hover:scale-105 ${className}`}
    >
      {children}
    </RoundedButton>
  );
};
