import React, { useState } from "react";
import BigDipperIcon from "./Icons/BigDipperIcon";
import QueueIcon from "./Icons/QueueIcon";
import DevicesIcon from "./Icons/DevicesIcon";
import VolumeIcon from "./Icons/VolumeIcon";
import { CgMiniPlayer } from "react-icons/cg";
import ZoomIcon from "./Icons/ZoomIcon";
import DipperButton from "./Buttons/DipperButton";

const OtherControls = () => {
  const [active, setActive] = useState(false);
    const handleShow = () => {
        setActive(true);
      };
  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-2">
        <DipperButton onClick={handleShow} icon={<BigDipperIcon/>}/>
        <QueueIcon />
        <DevicesIcon />
        <div className="flex flex-row items-center gap-1 w-6/12 fill-neutral-500 hover:fill-white cursor-pointer">
          <VolumeIcon />
          <div className="rounded-full w-4/5 h-1 bg-neutral-600"></div>
        </div>
        <CgMiniPlayer size={24} className="text-neutral-500 hover:scale-110 hover:text-white" />
        <ZoomIcon />
      </div>
    </div>
  );
};

export default OtherControls;
