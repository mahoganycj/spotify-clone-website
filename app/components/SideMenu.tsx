import React from "react";
import { GoHome, GoHomeFill, GoSearch } from "react-icons/go";
import { SectionContainer } from "./SectionContainer";
import { LibraryIcon } from "../libs/LibraryIcon";
import { SideBarButtons } from "./Buttons/SideBarButtons";
import { FiSearch } from "react-icons/fi";

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
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col bg-secondary02 rounded-lg gap-6 px-6 py-5">
        <SideBarButtons label="Home" Icon={GoHome} />
        <SideBarButtons label="Search" Icon={FiSearch} />
      </div>

      <div className="flex flex-col bg-secondary02 rounded-lg gap-6 px-6 py-5">
      <SideBarButtons label="Library" Icon={LibraryIcon} />
      </div>
    </div>
  );
};

export default SideMenu;
