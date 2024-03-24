import React, { useState, useEffect, useRef, useContext } from "react";
import SideMenu from "./SideMenu";
import { SideLibrary } from "./SideLibrary";
import Link from "next/link";
import DipperButton from "./Buttons/DipperButton";
import { IoCloseOutline } from "react-icons/io5";
import AppLayout from "../(app)/layout";
import Image from "next/image";
import { FiPlusCircle } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import DipperCard from "./Cards/DipperCard";
import { BorderedButton } from "./Buttons/BorderedButton";

const [minWidth, maxWidth, defaultWidth] = [295, 425, 425];

type RightSideBarProps = {
  passedValue: boolean;
  updateValue: (newValue: boolean) => void;
};

const RightSidebar = ({ passedValue, updateValue }: RightSideBarProps) => {
  const [width, setWidth] = useState(defaultWidth);
  const isResized = useRef(false);

  const handleChange = () => {
    // Modify the value and call the updateValue callback
    updateValue(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (!isResized.current) {
        return;
      }

      setWidth((previousWidth) => {
        const newWidth = previousWidth - e.movementX / 2;

        const isWidthInRange = newWidth >= minWidth && newWidth <= maxWidth;

        return isWidthInRange ? newWidth : previousWidth;
      });
    });

    window.addEventListener("mouseup", () => {
      isResized.current = false;
    });
  }, []);

  return (
    <div
      className={`${
        passedValue ? "" : "hidden"
      } flex relative overflow-y-hidden select-none justify-end w-full`}
    >
      {/* Handle (moved to the left) */}
      <div
        className="w-1 bg-transparent cursor-col-resize hover:bg-slate-300 rounded-xl mx-0.5"
        onMouseDown={() => {
          isResized.current = true;
        }}
      />
      <aside
        style={{ width: `${width / 16}rem` }}
        className="bg-secondary02 grid grid-cols-[1fr] overflow-hidden rounded-lg"
      >
        <div className="overflow-y-auto p-5">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between">
              <Link href={"/track"} className="hover:underline hover">
                Track Name
              </Link>
              <DipperButton
                onClick={handleChange}
                icon={
                  <IoCloseOutline
                    size={24}
                    className="rounded-full hover:bg-neutral-700"
                  />
                }
              />
            </div>

            <DipperCard />

            <div className="relative bg-black rounded-lg cursor-pointer">
              <div className="absolute top-0 h-20 w-full p-5 bg-black/0 z-10 font-bold hover:underline cursor-pointer">
                About the artist
              </div>
              <Image
                className="w-full h-full object-cover rounded-lg filter brightness-50"
                height={500}
                width={500}
                src={
                  "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebef138aa4569dba63ee549997/2/en/default"
                }
                alt=""
              />
              <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>

              <div className="absolute inset-x-0 bottom-0 bg-neutral-800 rounded-b-lg h-1/3 px-5 py-4">
                <div className="font-bold text-white hover:underline cursor-pointer">Artist Name</div>
                <div className="font-semibold text-neutral01 flex justify-between items-center">
                  Monthly Listeners
                  <BorderedButton className="hover:scale-105 px-4 py-1 flex items-center gap-1 text-sm font-bold">
                    Follow
                  </BorderedButton>
                </div>
                <div className="font-semibold text-neutral01 text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                  eius?
                </div>
              </div>
            </div>

            <div className="bg-neutral-800 rounded-md p-5 flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="font-bold ">Credits</div>
                <div className="text-neutral01 font-bold text-sm hover: underline hover:text-white cursor-pointer">Show All</div>
              </div>

              <div className="font-semibold text-neutral01 flex justify-between items-center">
                  Artist
                  <BorderedButton className="hover:scale-105 px-4 py-1 flex items-center gap-1 text-sm font-bold">
                    Follow
                  </BorderedButton>
                </div>

                <div className="font-semibold text-neutral01 flex justify-between items-center">
                  Writer/Lyricist
                  <BorderedButton className="hover:scale-105 px-4 py-1 flex items-center gap-1 text-sm font-bold">
                    Follow
                  </BorderedButton>
                </div>

                <div className="font-semibold text-neutral01 flex justify-between items-center">
                  Composer
                  <BorderedButton className="hover:scale-105 px-4 py-1 flex items-center gap-1 text-sm font-bold">
                    Follow
                  </BorderedButton>
                </div>
            </div>
            
          </div>
        </div>
      </aside>
    </div>
  );
};

export default RightSidebar;
