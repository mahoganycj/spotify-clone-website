'user client'
import React from "react";
import PlaylistGrid from "./PlaylistGrid";
import { FlatButton } from "./Buttons/FlatButton";
import { FaEllipsisH, FaEllipsisV, FaPlay } from "react-icons/fa";
import Link from "next/link";
import { SongRowProps } from "../libs/type";

const SongRow = ({
  id,
  artist,
  title,
  album,
  duration,
  image,
  classname2,
  classname,
}: SongRowProps) => {
  return (
    <div>
      <PlaylistGrid className="group py-2 rounded-md hover:bg-neutral-700 items-center gap-x-2 justify-between">
        <div>
          <span className={`group-hover:hidden block ${classname}`}>{id}</span>
          <FlatButton className="group-hover:block hidden">
            <FaPlay size={18} />
          </FlatButton>
        </div>
        <div className="flex gap-3 overflow-hidden">
          <img src={image} loading="lazy" className="w-10" />
          <div className="w-full">
            <Link
              href="#"
              className={`max-w-[85%] overflow-hidden whitespace-nowrap text-ellipsis hover:underline hover:underline-offset-1 text-md font-semibold ${classname2}`}
            >
              {title}
            </Link>
            <p className="text-sm text-neutral01 group-hover:text-white">{artist}</p>
          </div>
        </div>

        <div className="whitespace-nowrap overflow-hidden text-ellipsis text-neutral01 group-hover:text-white">
          {album}
        </div>

        <div>
          <div className="flex flex-row items-center space-x-3 justify-end text-neutral01 group-hover:text-white">
            <text className="ml-5">{duration}</text>
            <FaEllipsisH />
          </div>
        </div>
      </PlaylistGrid>
    </div>
  );
};

export default SongRow;
