"use client";

import Image from "next/image";
import { useState } from "react";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";
import ThinCard from "./components/Cards/ThinCard";
import { data } from "./components/data";
import SongCard from "./components/Cards/SongCard";
import Footer from "./components/Footer";
import { data2 } from "./components/data2";

const Home = () => {
  return (
    <div className="w-full h-screen grid grid-cols-[max-content_auto] grid-rows-[5fr_1fr] gap-y-2 p-2 bg-black">
      <Sidebar />

      <div className="bg-secondary02 grid grid-cols-[1fr] overflow-hidden rounded-lg">
        <div className="overflow-y-auto">
          <div className="flex sticky top-0 h-20 w-full px-5 py-6 bg-black/50 z-10">
            <Header />
          </div>
          {/* <div className="w-full bg-red-400 h-5"></div> */}
          {/* <div className="flex flex-row flex-wrap items-center gap-2 px-5 pt-10"> */}
          <div
            className="
        grid 
        grid-cols-2
        sm:grid-cols-2 
        md:grid-cols-2
        lg:grid-cols-3 
        xl:grid-cols-4 
        2xl:grid-cols-5
        gap-2
      
        items-center
        pt-10
        md:grow
        sm:grow
        mt-4
        px-5"
          >
            {data.map((data) => {
              return <ThinCard key={data.id} image={data.image} title={data.title} />;
            })}
          </div>
          <div className="px-5 pt-10 flex justify-between">
            <h3 className="text-[28px] font-bold hover:underline">
              Made For LeannotFound
            </h3>
            <h4 className="self-end">Show all</h4>
          </div>

          <div
            className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-1
        px-5
      "
          >
            {data2.map((data) => {
              return (
                <SongCard
                key={data.id}
                  image={data.image}
                  title={data.title}
                  artist={data.artist}
                />
              );
            })}
          </div>
          <div className="px-5 pt-10 flex justify-between">
            <h3 className="text-[28px] font-bold hover:underline ">
              Recently played
            </h3>
            <h4 className="self-end">Show all</h4>
          </div>

          <div
            className="grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-1
         px-5"
          >
            {data2.map((data) => {
              return (
                <SongCard
                key={data.id}
                  image={data.image}
                  title={data.title}
                  artist={data.artist}
                />
              );
            })}
          </div>
          <div className="px-5 pt-10 flex justify-between">
            <h3 className="text-[28px] font-bold hover:underline ">
              Your top mix
            </h3>
            <h4 className="self-end">Show all</h4>
          </div>

          <div
            className="grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-1
        px-5 "
          >
            {data2.map((data) => {
              return (
                <SongCard
                key={data.id}
                  image={data.image}
                  title={data.title}
                  artist={data.artist}
                />
              );
            })}
          </div>
          <div className="px-5 pt-10 flex justify-between">
            <h3 className="text-[28px] font-bold hover:underline ">
              Editor's Picks
            </h3>
            <h4 className="self-end">Show all</h4>
          </div>

          <div
            className="grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-1
        px-5"
          >
            {data2.map((data) => {
              return (
                <SongCard
                key={data.id}
                  image={data.image}
                  title={data.title}
                  artist={data.artist}
                />
              );
            })}
          </div>
          <div className="px-5 pt-10 flex justify-between">
            <h3 className="text-[28px] font-bold hover:underline ">
              Today's Biggest hits
            </h3>
            <h4 className="self-end">Show all</h4>
          </div>

          <div
            className="grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-1
        px-5"
          >
            {data2.map((data) => {
              return (
                <SongCard
                key={data.id}
                  image={data.image}
                  title={data.title}
                  artist={data.artist}
                />
              );
            })}
          </div>
          <div className="bg-secondary02 sticky top-0 w-full p-5 pt-48">
            <Footer />
          </div>
        </div>
        <div></div>
      </div>

      <div className="bg-slate-800">Song name</div>
      <div className="bg-slate-500">Player controls</div>
    </div>
  );
};

export default Home;
