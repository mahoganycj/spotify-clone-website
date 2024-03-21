'use client'

import React from "react";
import { GoHome, GoHomeFill, GoSearch } from "react-icons/go";
import { SideBarButtons } from "./Buttons/SideBarButtons";
import { FiSearch } from "react-icons/fi";
import { SectionContainer } from "./SectionContainer";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const buttons = [
  {
    icon: <GoHomeFill size={32} />,
    label: "Home",
    href: "/",
  },
  {
    icon: <GoSearch size={32} />,
    label: "Search",
    href: "/search",
  },
];

const SideMenu = () => {
  const pathname = usePathname()
  console.log(pathname);
  return (
    <SectionContainer className="gap-6 px-6 py-5">
      {buttons.map((button) => (
        <SideBarButtons
          key={button.label}
          href={button.href}
          icon={button.icon}
          label={button.label}
          active={pathname === button.href}
        />
      ))}
    </SectionContainer>
  );
};

export default SideMenu;
