"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import { SongList } from "@/app/libs/type";



const ThinCard = ({image, id, title} : SongList) => {
  const router = useRouter();
  console.log({image})
  
  return ( 
    <Link href={`/playlist/${id}`} key={id}>
   
    <button
      className="
        relative 
        group 
        flex 
        flex-shrink
        items-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-100/10 
        cursor-pointer 
        hover:bg-neutral-100/20 
        transition
        h-[48px]
        sm:flex-grow
        md:w-full
      "
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image
          className="object-cover"
          src={image}
          fill
          alt="Image"
        />
      </div>
      <p className="font-medium truncate py-5">
        {title}
      </p>
      <div 
        className="
          absolute 
          transition 
          opacity-0 
          rounded-full 
          flex
          items-center
          justify-center
          bg-green-500 
          p-2 
          drop-shadow-xl
          right-3
          group-hover:opacity-100 
          hover:scale-110
          ml-72
        "
      >
        <FaPlay className="text-black " size={12}/>
      </div>
    </button>
    </Link>
   );
}
 
export default ThinCard;