import React from 'react'
import SongCard from './Cards/SongCard'
import { ArtistCardProps } from '../libs/type'
import PlayButton from './PlayButton'
import Image from 'next/image'

const ArtistCard = ({image, name, type}:ArtistCardProps) => {
  return (
    <div className="mt-2">
      <div
        className="
        relative 
        group 
        flex 
        flex-col
        flex-shrink 
        items-center 
        justify-center 
        rounded-md 
        overflow-hidden 
        gap-x-4
        bg-neutral-400/5 
        cursor-pointer 
        hover:bg-neutral-400/10 
        transition 
        p-3
        md:[210px]
        sm:[200px]
      "
      >
        <div
          className="
          relative 
          aspect-square 
          w-full
          h-full 
          rounded-full
          overflow-hidden
        "
        >
          <Image className="object-cover" src={image} fill alt="Image" />
        </div>
        <div className="flex flex-col items-start w-full pt-4 gap-y-1">
          <p className="font-semibold truncate w-full">{name}</p>
          <p
            className="
            text-neutral-400 
            text-sm 
            pb-4 
            w-full 
            truncate
          "
          >
            {type}
          </p>
        </div>
        <div
          className="
          absolute 
          bottom-24 
          right-5
        "
        >
          <PlayButton />
        </div>
      </div>
    </div>
  )
}

export default ArtistCard
