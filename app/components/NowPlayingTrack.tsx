import Image from 'next/image'
import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'

const NowPlayingTrack = () => {
  return (
    <div className='flex flex-row items-center gap-4'>
        <Image className='rounded-sm' height={56} width={56} src={"https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebef138aa4569dba63ee549997/2/en/default"} alt=''/>
        
        <div>
            <div className='hover:underline cursor-pointer select-none'>Track Name</div>
            <div className='hover:underline cursor-pointer select-none'>Track Artist</div>
        </div>

        <FiPlusCircle size={24} className="text-neutral-500 hover:scale-110 hover:text-white cursor-pointer"/>
    </div>
  )
}

export default NowPlayingTrack