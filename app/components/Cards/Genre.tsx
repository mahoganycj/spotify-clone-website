import React, { ReactNode } from "react";
import Image from "next/image";
import { GenreProps } from "@/app/libs/type";


const Genre = ({ classname, children, image}: GenreProps) => {
  return (
    <div className="mt-2">
      <div
        className={`relative group flex flex-col flex-shrink rounded-md overflow-hidden gap-x-4 hover:scale-105 transition p-3 h-48 w-48 ${classname}`}
      >
        <div className="place-self-start font-extrabold text-lg"> {children}</div>
        <img className="h-28 w-28 absolute -right-7 top-20 transform rotate-[20deg]" src={image}/>
      </div>
     
    </div>
  );
};

export default Genre;
