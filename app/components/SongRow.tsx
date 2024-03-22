'user client'
import React from "react";
import { data } from "./data";
import { Song } from "./data";
import PlaylistGrid from "./PlaylistGrid";
import { FlatButton } from "./Buttons/FlatButton";
import { FaEllipsisH, FaEllipsisV, FaPlay } from "react-icons/fa";
import Link from "next/link";
import { SongRowProps } from "./data2";

const SongRow = ({
  artist,
  title,
  album,
  duration,
  image,
  id,
}: SongRowProps) => {
  return (
    <div>
      <PlaylistGrid className=" py-1 rounded-md hover:bg-neutral-700 items-center gap-x-2 [&:hover_.trackRow-number]:hidden [&:hover_.trackRow-playBtn]:block justify-between">
        <div>
          <span className="trackRow-number">{id}</span>
          <FlatButton className="hidden trackRow-playBtn">
            <FaPlay size="sm" />
          </FlatButton>
        </div>
        <div className="flex gap-3 overflow-hidden">
          <img src={image} loading="lazy" className="w-10" />
          <div className="w-full">
            <Link
              href="#"
              className="text-white max-w-[85%] overflow-hidden whitespace-nowrap text-ellipsis hover:underline hover:underline-offset-1"
            >
              {title}
            </Link>
            <p className="text-sm">{artist}</p>
          </div>
        </div>

        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
          {album}
        </div>

        <div>
          <div className="flex flex-row items-center space-x-3 justify-end">
            <text className="ml-5">{duration}</text>
            <FaEllipsisH />
          </div>
        </div>
      </PlaylistGrid>
    </div>
  );
};

export default SongRow;
