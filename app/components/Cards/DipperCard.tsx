import Image from "next/image";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";

const DipperCard = () => {
  return (
    <div>
      <Image
        className="rounded-md"
        height={500}
        width={500}
        src={
          "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebef138aa4569dba63ee549997/2/en/default"
        }
        alt=""
      />
      <div className="flex justify-between">
        <div className="flex flex-col gap-x-0 py-5">
          <div className="font-bold text-2xl hover:underline cursor-pointer">
            Track Name
          </div>
          <div className="font-bold text-neutral01 hover:underline cursor-pointer">
            Track Name
          </div>
        </div>

        <div className="flex flex-row gap-5 items-center">
          <FiPlusCircle
            size={24}
            className="text-neutral-500 hover:scale-110 hover:text-white cursor-pointer"
          />
          <BsThreeDots
            size={24}
            className="text-neutral-500 hover:scale-110 hover:text-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default DipperCard;
