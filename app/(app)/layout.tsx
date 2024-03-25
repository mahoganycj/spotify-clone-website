"use client";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MusicPlayer from "../components/MusicPlayer";
import NowPlayingTrack from "../components/NowPlayingTrack";
import DipperButton from "../components/Buttons/DipperButton";
import QueueIcon from "../components/Icons/QueueIcon";
import DevicesIcon from "../components/Icons/DevicesIcon";
import VolumeIcon from "../components/Icons/VolumeIcon";
import { CgMiniPlayer } from "react-icons/cg";
import ZoomIcon from "../components/Icons/ZoomIcon";
import BigDipperIcon from "../components/Icons/BigDipperIcon";
import LeftSidebar from "../components/LeftSideBar";
import RightSidebar from "../components/RightSideBar";
import { GoHomeFill, GoSearch } from "react-icons/go";
import FillLibraryIcon from "../components/Icons/FillLibraryIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState(false);
  const handleShow = () => {
    setActive(true);
  };
  return (
    <>
      <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-[auto_1fr_auto]  grid-rows-1 gap-y-2 p-2 bg-black lg:grid-rows-[9fr_1fr]">
        <LeftSidebar />

        <div
          className={`bg-secondary02 grid grid-cols-[1fr] overflow-hidden rounded-lg ${
            active ? "" : "col-span-2"
          }`}
        >
<<<<<<< Updated upstream
          <div className="overflow-x-hidden lg:overflow-y-auto">
            <div className="hidden lg:flex sticky top-0 h-20 w-full p-5 bg-black/20 z-50">
=======
          <div className="relative overflow-x-hidden lg:overflow-y-auto">
            <div className="hidden lg:flex sticky-container absolute top-0 h-20 w-full p-5 bg-black/20 z-50">
>>>>>>> Stashed changes
              <Header />
            </div>
            {children}
            <div className="statice bottom-0 py-14 mt-28 p-5 pt-12">
              <Footer />
            </div>
          </div>
        </div>

        <RightSidebar
          passedValue={active}
          updateValue={(newValue) => setActive(newValue)}
        />

        <div className="flex flex-row justify-center items-center gap-7 p-5 lg:hidden md:gap-20">
          <Link href={'/'} className="flex flex-col items-center text-xs">
            <GoHomeFill size={28} className="fill-neutral01" />
            Home
          </Link>
          <Link href={'/search'} className="flex flex-col items-center text-xs">
            <GoSearch size={28} className="fill-neutral01" />
            Search
          </Link>
          <Link href={'/playlist'} className="flex flex-col items-center text-xs">
            <div className="fill-neutral01 scale-75">
              <FillLibraryIcon />
            </div>
            <span className="">Your Library</span>
          </Link>
          <Link href={'/'} className="flex flex-col items-center text-xs gap-1">
            <FontAwesomeIcon icon={faSpotify} size="2x" color="#B2B2B2" />
            Get App
          </Link>
        </div>

        <div className="hidden lg:grid fixed bottom-0 left-0 right-0 z-10 h-24 grid-cols-4 p-2">
          <div className="bg-black col-span-1 px-2 flex items-center">
            <NowPlayingTrack
              passedValue={active}
              updateValue={(newValue) => setActive(newValue)}
            />
          </div>

          <div className="bg-black col-span-2 flex items-center justify-center">
            <MusicPlayer />
          </div>

          <div className="bg-black col-span-1 px-2 flex items-center justify-end">
            <div className="w-full">
              <div className="flex items-center justify-center gap-2">
                <DipperButton
                  onClick={handleShow}
                  icon={<BigDipperIcon active={active} />}
                />
                <QueueIcon />
                <DevicesIcon />
                <div className="flex flex-row items-center gap-1 w-6/12 fill-neutral-500 hover:fill-white cursor-pointer">
                  <VolumeIcon />
                  <div className="rounded-full w-4/5 h-1 bg-neutral-600"></div>
                </div>
                <CgMiniPlayer
                  size={24}
                  className="text-neutral-500 hover:scale-110 hover:text-white cursor-pointer"
                />
                <ZoomIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
