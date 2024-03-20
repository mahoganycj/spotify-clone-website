import React, { ReactNode } from "react";

type CardProps = {
    className: string;
    head: ReactNode;
    children: ReactNode;
}

export const Card = ({ className, head, children }: CardProps) => {
  return (
    <div className={`flex ${className}`}>
      {head}
      {children}
    </div>
  );
};
