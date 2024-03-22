import React from "react";
import { data2 } from "../data2";
import SongCard from "./SongCard";
import Genre from "./Genre";

const GenreCard = () => {
  return (
    <div>
      <div className=" pt-3 flex justify-between">
        <h3 className="text-[28px] font-bold hover:underline">Browse all</h3>
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
                gap-4
            "
      >
        <Genre classname="bg-genre-04-pink">
          <h2>Music</h2>
          <img src=""/>
        </Genre>
        <Genre classname="bg-genre-03-green">
          <h2>Podcast</h2>
        </Genre>
        <Genre classname="bg-genre-08-blue">
          <h2>Live Events</h2>
        </Genre>
        <Genre classname="bg-genre-07-purple">
          <h2>Made For You</h2>
        </Genre>
        <Genre classname="bg-genre-10-red">
          <h2>New Release</h2>
        </Genre>
        <Genre classname="bg-genre-09-orange">
          <h2>OPM</h2>
        </Genre>
        <Genre classname="bg-genre-12-brown">
          <h2>Pop</h2>
        </Genre>
        <Genre classname="bg-genre-06-darkblue">
          <h2>Hip-Hop</h2>
        </Genre>
        <Genre classname="bg-genre-12-brown">
          <h2>K-pop</h2>
        </Genre>
        <Genre classname="bg-genre-02-green">
          <h2>Podcast Charts</h2>
        </Genre>
        <Genre classname="bg-genre-10-red">
          <h2>Pag-ibig</h2>
        </Genre>
        <Genre classname="bg-genre-07-purple">
          <h2>Video Podcast</h2>
        </Genre>
        <Genre classname="bg-genre-01-green">
          <h2>Charts</h2>
        </Genre>
      </div>
    </div>
  );
};

export default GenreCard;
