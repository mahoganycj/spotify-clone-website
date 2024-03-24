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
import { IoClose, IoCloseOutline } from "react-icons/io5";
import LeftSidebar from "../components/LeftSideBar";
import RightSidebar from "../components/RightSideBar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState(false);
  const handleShow = () => {
    setActive(true);
  };
  return (
    <>
      <div className="w-full h-screen grid grid-cols-[auto_1fr_auto] grid-rows-[7fr_1fr] gap-y-2 p-2 bg-black">
        <LeftSidebar />
        <div
          className={`bg-secondary02 grid grid-cols-[1fr] overflow-hidden rounded-lg ${
            active ? "" : "col-span-2"
          }`}
        >
          <div className="overflow-y-auto">
            <div className="sticky top-0 h-20 w-full p-5 bg-black/50 z-10">
              <Header />
            </div>
            {children}
            <div className="px-5 py-5">
              <Footer />
            </div>
          </div>
        </div>
        <RightSidebar
          passedValue={active}
          updateValue={(newValue) => setActive(newValue)}
        />
        <div className="fixed bottom-0 left-0 right-0 z-10 h-28 grid grid-cols-4 p-2">
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
