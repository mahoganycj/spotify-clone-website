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
          <div className="sticky top-0 h-20 w-full px-5 py-6 bg-black/50 z-10">
            <Header />
          </div>
          {/* <div className="w-full bg-red-400 h-5"></div> */}
          <div className="flex flex-row flex-wrap items-center gap-2 px-5 pt-10">
            {data.map((data) => {
              return <ThinCard image={data.image} title={data.title} />;
            })}
          
          </div>
          <div className="px-5 pt-8 flex justify-between">
            <h3 className="text-[28px] font-bold hover:underline">Made For LeannotFound</h3>
            <h4 className="self-end">Show all</h4>
          </div>
       
          <div className="flex gap-1 overflow-hidden px-5">
          {
            data2.map((data) =>{
              return(
                <SongCard image={data.image} title={data.title} artist={data.artist}/>
              )
            })
          }
            </div>
            <div className="px-5 pt-8 flex justify-between">
            <h3 className="text-[28px] font-bold hover:underline ">Recently played</h3>
            <h4 className="self-end">Show all</h4>
          </div>
       
          <div className="flex flex-row-reverse grow gap-1 overflow-hidden px-5">
          {
            data2.map((data) =>{
              return(
                <SongCard image={data.image} title={data.title} artist={data.artist}/>
              )
            })
          }
            </div>
            <div className="px-5 pt-8 flex justify-between">
            <h3 className="text-[28px] font-bold hover:underline ">Your top mix</h3>
            <h4 className="self-end">Show all</h4>
          </div>
       
          <div className="flex flex-row grow gap-1 overflow-hidden px-5">
          {
            data2.map((data) =>{
              return(
                <SongCard image={data.image} title={data.title} artist={data.artist}/>
              )
            })
          }
            </div>
            <div className="px-5 pt-8 flex justify-between">
            <h3 className="text-[28px] font-bold hover:underline ">Editor's Picks</h3>
            <h4 className="self-end">Show all</h4>
          </div>
       
          <div className="flex flex-row-reverse grow gap-1 overflow-hidden px-5">
          {
            data2.map((data) =>{
              return(
                <SongCard image={data.image} title={data.title} artist={data.artist}/>
              )
            })
          }
            </div>
            <div className="px-5 pt-8 flex justify-between">
            <h3 className="text-[28px] font-bold hover:underline ">Today's Biggest hits</h3>
            <h4 className="self-end">Show all</h4>
          </div>
       
          <div className="flex flex-row grow gap-1 overflow-hidden px-5">
          {
            data2.map((data) =>{
              return(
                <SongCard image={data.image} title={data.title} artist={data.artist}/>
              )
            })
          }
            </div>
          <div className="bg-secondary02 sticky top-0 w-full p-5 pt-48">
           <Footer/>
           </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Home;
