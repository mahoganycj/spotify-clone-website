import SongRow from '@/app/components/SongRow'
import React from 'react'
import { queueSong } from '@/app/libs/data'

const Queue = () => {
  return (
    <div>
      <div className=" pt-3 px-5 flex justify-between">
        <h3 className="text-sm font-bold lg:text-2xl">Queue</h3>

      </div>
      <div>
      <h4 className='text-sm font-bold  lg:text-md text-neutral01 px-5 pt-8 pb-3'>Now playing</h4>
      <div className='px-8'>
      <SongRow id={1} artist='Future, Metro Boomin, Kendrick Lamar' title='Like That' album={`WE DON'T TRUST YOU`} duration='4:27' image='https://i.scdn.co/image/ab67616d00001e02a46b07c291e6dfdee13b3ee8'   classname='text-green-500 font-black' classname2='text-green-500 font-black text-lg'/>
    
      </div>
        </div>
        <h4 className='text-sm font-bold  lg:text-md text-neutral01 px-5 pt-10 pb-3'>Next Up</h4>
        <div className='px-8'>
            {
                queueSong.map((queue)=>{
                    return(
                        <SongRow
                        artist={queue.artist}
                        duration={queue.duration}
                        image={queue.image}
                        id={queue.id}
                        album={queue.album}
                        title={queue.title}
                      

                        />
                    )
                })
            }

        </div>
    </div>
  )
}

export default Queue
