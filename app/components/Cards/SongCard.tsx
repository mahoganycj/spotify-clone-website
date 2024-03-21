"use client";

import Image from "next/image";
import PlayButton from "../PlayButton";
import { Song } from "../data";


type SongCardProps ={
    image: string;
    title : string;
    artist? : string;
    id ?: number;
  onClick?: (id: string) => void;
}

const SongCard= ({image, title, artist, onClick} : SongCardProps) => {
  return ( 
    <div className="mt-2">
       <div
      className="
        relative 
        group 
        flex 
        flex-col
        flex-shrink 
        items-center 
        justify-center 
        rounded-md 
        overflow-hidden 
        gap-x-4
        bg-neutral-400/5 
        cursor-pointer 
        hover:bg-neutral-400/10 
        transition 
        p-3
        h-[270px]
        w-[210px]
      "
    >
      <div 
        className="
          relative 
          aspect-square 
          w-full
          h-full 
          rounded-md 
          overflow-hidden
        "
      >
        <Image
          className="object-cover"
          src={image}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">
          {title}
        </p>
        <p 
          className="
            text-neutral-400 
            text-sm 
            pb-4 
            w-full 
            truncate
          "
        >
        {artist}
        </p>
      </div>
      <div 
        className="
          absolute 
          bottom-24 
          right-5
        "
      >
        <PlayButton  />
      </div>
    </div>
      
    </div>
   
   );
}
 
export default SongCard;
