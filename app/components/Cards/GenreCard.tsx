import React, { Children } from "react";
import Genre from "./Genre";
import { GenreData } from "@/app/libs/data";
Genre

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
                lg:grid-cols-3 
                xl:grid-cols-5 
                2xl:grid-cols-8 
                gap-4
            "
      >
        {
          GenreData.map((genre)=>{
            return(
              <Genre 
              children ={genre.children}
              classname={genre.classname}
              image={genre.image}

              />
            )
          })
        }
      </div>
    </div>
  );
};

export default GenreCard;
