import React, { ReactNode } from "react";

type SectionContainerProps ={
  className: string;
  children: ReactNode;
}

export const SectionContainer = ({ className, children }: SectionContainerProps) => {
  return (
    <div className={`flex flex-col bg-neutral-900 rounded-lg ${className} `}>
      {children}
    </div>
  );
};