import React from 'react'
import PlayButton from "./PlayButton";
import { FaEllipsisH, FaHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import SongRow from "./SongRow";
import { Song } from "./data2";
import Footer from "./Footer";
import YoumightAlsoLike from "./Cards/YoumightAlsoLike";

const Music = () => {
  return (
    <div className="w-full h-screen flex-[0.8] text-[white] bg-gradient-to-r from-genre-04-pink to-pink-600  relative ">
    <div className=" bg-black/60 w-full h-screen py-[100px]">
      <div className="flex items-end self-end ">
        <div className='h-7'></div>
          <h1 className="text-8xl font-black sm:text-8xl">Music</h1>
      </div>
      <div className="bg-black/70 ">
        <div className="  py-5 px-5 my-6">
          <div className="flex flex-row space-x-8 items-center align-middle mr-5  w-full">
          
           
          </div>
        </div>
        <div className="pt-6  bg-black/60 w-full p-[30px] h-screen">
          
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
  )
}

export default Music
