"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Tooltip from "./Tooltip";
import DipperButton from "./Buttons/DipperButton";

type NowPlayingTrackProps = {
  passedValue: boolean;
  updateValue: (newValue: boolean) => void;
};

const NowPlayingTrack = ({
  passedValue,
  updateValue,
}: NowPlayingTrackProps) => {
  const handleOpen = () => {
    updateValue(true);
  };

  const handleClose = () => {
    updateValue(false);
  };

  return (
    <div className="flex flex-row items-center gap-4">
      <div className="group relative">
        <Image
          className="rounded-sm"
          height={56}
          width={56}
          src={
            "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebef138aa4569dba63ee549997/2/en/default"
          }
          alt=""
        />
        <div className="hidden group-hover:block absolute top-0 right-0 bg-neutral-800/50 p-2 rounded-full shadow-md">
          {passedValue ? (
            <Tooltip message="Collapse">
              <DipperButton onClick={handleClose} icon={<IoIosArrowDown />} />
            </Tooltip>
          ) : (
            <Tooltip message="Expand">
              <DipperButton onClick={handleOpen} icon={<IoIosArrowUp />} />
            </Tooltip>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-x-0 justify-start">
        <div className="hover:underline cursor-pointer select-none font-bold text-md">
          Track Name
        </div>
        <div className="hover:underline cursor-pointer select-none text-neutral01 text-xs font-bold hover:text-white">
          Track Artist
        </div>
      </div>

      <FiPlusCircle
        size={24}
        className="text-neutral-500 hover:scale-110 hover:text-white cursor-pointer"
      />
    </div>
  );
};

export default NowPlayingTrack;
