import React from 'react'
import { data2 } from '@/app/libs/data';
import SongCard from './SongCard';

const YoumightAlsoLike = () => {
  return (
    <>
      
      <div className=" pt-5 flex justify-between">
            <h3 className="text-[28px] font-bold hover:underline">
             You might Also like
            </h3>
        
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

    </>
  )
}

export default YoumightAlsoLike
