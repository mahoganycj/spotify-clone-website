"use client";

import React from "react";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { ICategory } from "../components/data2";
import GenreCard from "../components/Cards/GenreCard";
import YoumightAlsoLike from "../components/Cards/YoumightAlsoLike";

const Search = ({ name, image, id }: ICategory) => {
  return (
    <div className="w-full h-screen grid grid-cols-[max-content_auto] grid-rows-[5fr_1fr] gap-y-2 p-2 bg-black">
      <Sidebar />
      <div className="bg-secondary02 grid grid-cols-[1fr] overflow-hidden rounded-lg">
        <div className="overflow-y-auto">
          <div className="sticky top-0 h-20 w-full p-5 bg-black/50 z-10">
            <Header />
          </div>
          <div className="flex justify-center items-center p-5">
            <div>
           <GenreCard/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800">Song name</div>
      <div className="bg-slate-500">Player controls</div>
    </div>
  );
};

export default Search;

