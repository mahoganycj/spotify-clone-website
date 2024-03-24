
import React from "react";
import PlayButton from "./PlayButton";
import { FaCircle, FaEllipsisH, FaHeart, FaPlusCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import SongRow from "./SongRow";
import { Song } from "../libs/data";
import Footer from "./Footer";
import { CiCirclePlus } from "react-icons/ci";
import { GoKebabHorizontal } from "react-icons/go";
import { FaList } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import YoumightAlsoLike from "./Cards/YoumightAlsoLike";

const Collection= () => {
  return (
    <div className="w-full flex-[0.8] text-[white] ">
      <div className="bg-gradient-to-r from-red-800 to-orange-800 pt-32 pb-7">
        <div className="flex items-end ">
          <img
            src={
              "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebef138aa4569dba63ee549997/2/en/default"
            }
            className="h-[15vw] shadow-[0_4px_60px_rgba(0,0,0,0.7)] mx-5 my-0;"
            alt=""
          />
          <div className="flex-1 ">
            <strong className="text-sm p-1">Playlist</strong>
            <h1 className="text-5xl font-bold lg:text-8xl md:text-5xl sm:2xl mb-3">Daily Mix 1</h1>
            <p className="text-sm font-bold text-neutral01 p-1">
              {"Cavetown, The Walters, TEMPOREX and more"}
            </p>
            <p className="text-sm font-bold text-white flex ">
             <span className="items-center justify-center align-middle self-center text-green-500 p-1"><FaSpotify/></span> Spotify 20 songs, <span className="text-neutral01">about 45 mins</span>
            </p>
          </div>
        </div>
      </div>
      <div className="m-5">
        <div className="  py-3 my-3">
          <div className="flex flex-row space-x-8 items-center align-middle w-full">
            <div>
              <button
                className="
              transition  
              rounded-full 
              items-center 
              justify-center 
              align-middle
              bg-green-500 
              p-6
              drop-shadow-xl
              translate
              translate-y-1/4
              group-hover:opacity-100 
              group-hover:translate-y-0
              hover:scale-110  
            "
              >
                <FaPlay className="text-black " />
              </button>
            </div>
            <div className="flex self-end items-center space-x-5">
              <CiCirclePlus
                size={"42px"}
                className="text-neutral01 font-black hover:text-white cursor-pointer hover:scale-110"
                title="Save to your Album"
              />
              <GoKebabHorizontal
                size={"24px"}
                className="text-neutral01 font-semibold hover:text-white cursor-pointer hover:scale-110"
                title="More options"
              />
            </div>
            <div className="flex flex-1 justify-end self-end place-content-end items-end">
              
              <div className="flex space-x-2 pr-8">
              <h3 className="text-end place-self-end">List</h3>
              <h3 className="self-center"><FaList/></h3>
              </div>
             
            </div>
          </div>
        </div>
        <div className="p-8 w-full">
          <div className="h-10 flex flex-row justify-between items-center pr-16 top-20 overflow-hidden w-full text-neutral01 ">
            <div className="flex space-x-5">
              <h3>#</h3>
              <h3>Title</h3>
            </div>
            <h3 className="pr-36 ">Album</h3>
            <h3 className=""><FaRegClock/></h3>
          </div>
          <div className="bg-neutral01 min-h-px mt-1 mb-8"></div>
          {Song.map((song) => {
            return (
              <SongRow
                artist={song.artist}
                album={song.album}
                image={song.image}
                duration={song.duration}
                id={song.id}
                title={song.title}
              />
            );
          })}
        </div>
        <div className="w-full">
          <YoumightAlsoLike />
        </div>
      </div>
    </div>
  );
};

export default Collection;
