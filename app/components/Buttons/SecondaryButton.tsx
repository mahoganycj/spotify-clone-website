import React, { ReactNode } from 'react'
import { MainButton } from './MainButton'


type SecondaryButtonProps = {
    type?: "submit" | "reset" | "button" | undefined;
    className?: string;
    href?: string;
    children: ReactNode;
  };

export const SecondaryButton = ({ type, href, className, children }: SecondaryButtonProps) => {
  return (
    <MainButton
      type={type}
      href={href}
      className={`text-sm bg-white ${className}`}
    >
      {children}
    </MainButton>
  )
}