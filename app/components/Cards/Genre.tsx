import React, { ReactNode } from "react";
import Image from "next/image";

type colorProps = {
  classname?: string;
  children: ReactNode;
};

const Genre = ({ classname, children}: colorProps) => {
  return (
    <div className="mt-2">
      <div
        className={`relative group flex flex-col flex-shrink  rounded-md overflow-hidden gap-x-4 hover:scale-105 transition p-3 h-[196px] w-[196px] md:[210px] sm:[200px] ${classname}`}
      >
        <h3 className="place-self-start font-extrabold text-lg"> {children}</h3>
      </div>
    </div>
  );
};

export default Genre;
