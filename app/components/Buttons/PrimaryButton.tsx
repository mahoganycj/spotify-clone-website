import { ReactNode } from "react";
import { MainButton } from "./MainButton";

type PrimaryButtonProps = {
    type?: "submit" | "reset" | "button" | undefined;
    className?: string;
    href?: string;
    children: ReactNode;
  };

export default function PrimaryButton({ type, href, className, children }: PrimaryButtonProps) {
  return (
    <MainButton
      type={type}
      href={href}
      className={`py-3 bg-brand ${className}`}
    >
      {children}
    </MainButton>
  );
}
