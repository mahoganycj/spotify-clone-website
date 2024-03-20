import { ReactNode } from "react";
import { FlatButton } from "./FlatButton";

type CircularButtonsProps = {
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  href?: string;
  children: ReactNode;
};

export const CircularButtons = ({
  type,
  href,
  className,
  children,
}: CircularButtonsProps) => {
  return (
    <FlatButton
      type={type}
      href={href}
      className={`flex rounded-[50%] aspect-square items-center justify-center ${className}`}
    >
      {children}
    </FlatButton>
  );
};
