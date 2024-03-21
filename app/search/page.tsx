"use client";

import React from "react";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";

const Search = () => {
  return (
    <div className="w-full h-screen grid grid-cols-[max-content_auto] grid-rows-[5fr_1fr] gap-y-2 p-2 bg-black">
      <Sidebar />
      <div className="bg-secondary02 grid grid-cols-[1fr] overflow-hidden rounded-lg">
        <div className="overflow-y-auto">
          <div className="sticky top-0 h-20 w-full p-5 bg-black/50 z-10">
            <Header />
          </div>
          <div className="flex justify-center items-center p-10">Search Browse</div>
          <div className="bg-secondary02 sticky top-0 w-full p-5">.Footers</div>
        </div>
      </div>
      <div className="bg-slate-800">Song name</div>
      <div className="bg-slate-500">Player controls</div>
    </div>
  );
};

export default Search;
