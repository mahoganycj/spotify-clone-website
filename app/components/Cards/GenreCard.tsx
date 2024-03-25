import React, { Children } from "react";
import Genre from "./Genre";
import { GenreData } from "@/app/libs/data";
import { GoSearch } from "react-icons/go";
Genre;

const GenreCard = () => {
  return (
    <div>
      <h3 className="text-[28px] font-bold hover:underline"></h3>
      <label
        htmlFor="email"
        className=" block relative text-gray-400 focus-within:text-gray-600 lg:hidden"
      >
        <GoSearch className="pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 left-3" />
        <input
          type="search"
          placeholder="What do you want to listen?"
          className="form-input w-full rounded-md h-10 bg-white placeholder:text-black text-black px-8"
        />
      </label>
      <div className=" pt-3 flex justify-between">
        <h3 className="text-sm font-bold hover:underline lg:text-[28px]">Browse all</h3>
      </div>
      <div
        className="
                grid 
                grid-cols-2 
                sm:grid-cols-3 
                md:grid-cols-3 
                lg:grid-cols-3 
                xl:grid-cols-5 
                2xl:grid-cols-8 
                gap-4
            "
      >
        {GenreData.map((genre) => {
          return (
            <Genre
              children={genre.children}
              classname={genre.classname}
              image={genre.image}
              id={genre.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GenreCard;
