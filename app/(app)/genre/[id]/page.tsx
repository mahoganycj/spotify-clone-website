'use client'
import Music from "@/app/components/Music";
import { GenreData } from "@/app/libs/data";
import { notFound } from "next/navigation";
import React from "react";
import YoumightAlsoLike from "@/app/components/Cards/YoumightAlsoLike";

const Genre = ({ params }: { params?: { id: number } }) => {
  console.log(params?.id);

  if (!params) {
    return <div>Genre not found</div>;
  }
  const genre = GenreData.find((genre) => genre.id == params.id);
  if (!genre) {
    notFound();
  }
  return (
    <div className={`${genre.classname} text-white flex-col`}>
      <div className={`h-20 sticky z-10 top-0 ${genre.classname} overflow-hidden`}></div>
      <div className="w-full h-60 flex items-end self-end ">
        <div className="text-8xl font-black sm:text-8xl px-5 pb-9">
          {genre.children}
        </div>
      </div>
      <div className="w-full bg-black/60 p-5 overflow-hidden">
        <YoumightAlsoLike/>
      </div>
      <div className="w-full bg-black/60 p-5 overflow-hidden">
        <YoumightAlsoLike/>
      </div>
      <div className="w-full bg-black/60 p-5 overflow-hidden">
        <YoumightAlsoLike/>
      </div>
    </div>
  );
};

export default Genre;
