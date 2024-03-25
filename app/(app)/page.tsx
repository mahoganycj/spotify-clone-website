"use client";

import ThinCard from "../components/Cards/ThinCard";
import { data } from "../libs/data";
import SongCard from "../components/Cards/SongCard";
import { data2 } from "../libs/data";
import Link from "next/link";

const Home = () => {
  return (
    <div className="overflow-y-auto">
      <div>
        {/* <SongRow artist='Leandro' title='Leandro' album='Leandro' duration="100" image="https://i.scdn.co/image/ab67706f0000000281b1c03176a914df48d38319" /> */}
      </div>
      <div
        className="
        hidden
        lg:grid 
        grid-cols-2
        sm:grid-cols-2 
        md:grid-cols-2
        lg:grid-cols-3 
        xl:grid-cols-4 
        2xl:grid-cols-5
        gap-2
        items-center
        pt-32
        md:grow
        sm:grow
        mt-4
        px-5"
      >
        {data.map((data) => {
          return (     
              <ThinCard key={data.id} id={data.id} image={data.image} title={data.title} />
          
          );
        })}
      </div>
      <div className="px-5 pt-10 flex justify-between">
        <h3 className="text-3xl font-bold hover:underline">
          Made For Lean
        </h3>
        <h3 className="text-xs lg:text-sm self-end">Show all</h3>
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
        <h4 className="text-xs lg:text-sm self-end">Show all</h4>
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
        <h3 className="text-[28px] font-bold hover:underline ">Your top mix</h3>
        <h4 className="text-xs lg:text-sm self-end">Show all</h4>
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
        <h4 className="text-xs lg:text-sm self-end">Show all</h4>
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
        <h3 className="text-[28px] font-bold hover:underline">
          Today's Biggest hits
        </h3>
        <h4 className="text-xs lg:text-sm self-end">Show all</h4>
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
    </div>
  );
};

export default Home;
