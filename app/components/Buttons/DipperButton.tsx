import React, { ReactNode, useState } from "react";

type DipperButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  icon: ReactNode;
};

const DipperButton = ({ onClick, icon, ...props }: DipperButtonProps) => {
  return (
    <button {...props} onClick={onClick}>
      {icon}
    </button>
  );
};

export default DipperButton;
