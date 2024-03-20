import React, { ReactNode } from "react";
import { Card } from "./Card";

type VerticalCardProps = {
    className?: string;
    head?: ReactNode;
    children?: ReactNode;
}

export const VerticalCard = ({ className, head, children }: VerticalCardProps) => {
  return (
    <Card className={`flex-col ${className}`} head={head}>
      {children}
    </Card>
  );
};
