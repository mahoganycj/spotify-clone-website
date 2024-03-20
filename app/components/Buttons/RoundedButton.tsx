import React, { ReactNode } from "react";
import { FlatButton } from "./FlatButton";

type RoundedButtonProps = {
    type?: "submit" | "reset" | "button" | undefined
    className: string
    href?: string
    children: ReactNode;
}

export const RoundedButton = ({ type, className, href, children }: RoundedButtonProps) => {
  return (
    <FlatButton type={type} href={href} className={`rounded-3xl ${className}`}>
      {children}
    </FlatButton>
  );
};
