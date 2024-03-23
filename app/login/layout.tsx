import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const LoginLayout = ({ children }: LayoutProps) => {
  return (
  <>
    {children}
  </>
  );
};

export default LoginLayout;
