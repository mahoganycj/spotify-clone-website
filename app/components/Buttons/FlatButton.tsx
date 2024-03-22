import Link from 'next/link';
import React, { ReactNode } from 'react'

type FlatButtonProps = {
    type?: "submit" | "reset" | "button" | undefined
    className?: string;
    href?: string;
    children: ReactNode;
}

export const FlatButton = ({ type, className, href = "", children }: FlatButtonProps) => {
    const btnClass = `focus:outline-[3px] focus:outline-white whitespace-nowrap ${className}`;
    return href === "" ? (
    <button type={type} className={btnClass}>
      {children}
    </button>
  ) : (
    <Link href={href} className={btnClass}>
      {children}
    </Link>
  )
}
