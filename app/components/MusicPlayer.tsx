import React from 'react'
import ShuffleIcon from './Icons/ShuffleIcon'
import PrevIcon from './Icons/PrevIcon'
import PlayIcon from './Icons/PlayIcon'
import ForwardIcon from './Icons/ForwardIcon'
import RepeatIcon from './Icons/RepeatIcon'

const MusicPlayer = () => {
  return (
    <div className='w-4/5'>
        <div className='flex items-center justify-center gap-2'>
            <ShuffleIcon />
            <PrevIcon />
            <PlayIcon /> 
            <ForwardIcon />
            <RepeatIcon />
        </div>

        <div className='flex items-center justify-center gap-2'>
            <p className='select-none text-sm font-normal'>0:00</p>
            <div className='rounded-full w-full h-1 bg-neutral-500'></div>
            <p className='select-none text-sm font-normal'>0:00</p>
        </div>
    </div>
  )
}

export default MusicPlayer