import React from "react";
import PlayButton from "./PlayButton";
import { FaEllipsisH, FaHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import SongRow from "./SongRow";
import { Song } from "./data2";
import Footer from "./Footer";
import YoumightAlsoLike from "./Cards/YoumightAlsoLike";

const Collection = () => {
  return (
    <div className="w-full h-screen flex-[0.8] text-[white] bg-gradient-to-r from-red-500 to-orange-600  relative ">
      <div className=" bg-black/60 w-full h-screen py-[100px]">
        <div className="flex items-end ">
          <img
            src={
              "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebef138aa4569dba63ee549997/2/en/default"
            }
            className="h-[15vw] shadow-[0_4px_60px_rgba(0,0,0,0.7)] mx-5 my-0;"
            alt=""
          />
          <div className="flex-1 ">
            <strong className="text-sm">Playlist</strong>
            <h1 className="text-8xl font-black sm:text-5xl">Discover Weekly</h1>
            <p className="text-sm font-bold">
              {"Cavetown, The Walters, TEMPOREX and more"}
            </p>
          </div>
        </div>
        <div className="bg-black/70 ">
          <div className="  py-5 px-5 my-6">
            <div className="flex flex-row space-x-8 items-center align-middle mr-5  w-full">
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
              <div className="flex self-end space-x-5">
                <FaHeart fontSize="38px" className="" />
                <FaEllipsisH fontSize="24px" />
              </div>
            </div>
          </div>
          <div className="pt-6  bg-black/60 w-full p-[30px] h-screen">
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
            <div>
              <YoumightAlsoLike />
            </div>
          </div>
          <div className="h-16 py-16"></div>

          <div className="mx-5 mt-16">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
