import React from "react";
import { GoHome, GoHomeFill, GoSearch } from "react-icons/go";
import { SideBarButtons } from "./Buttons/SideBarButtons";
import { FiSearch } from "react-icons/fi";
import { SectionContainer } from "./SectionContainer";

const buttons = [
  {
    icon: <GoHomeFill size={32} />,
    label: "Home",
    href: "#",
  },
  {
    icon: <GoSearch size={32} />,
    label: "Search",
    href: "#",
  },
];

const SideMenu = () => {
  return (
    <SectionContainer className="gap-6 px-6 py-5">
      {
        <div className="flex flex-col gap-5">
          <SideBarButtons label="Home" Icon={GoHome} />
          <SideBarButtons label="Search" Icon={FiSearch} />
        </div>
      }
    </SectionContainer>
  );
};

export default SideMenu;
