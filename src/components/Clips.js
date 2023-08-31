import React from 'react'
import { PlayIcon } from "@heroicons/react/24/solid"

const Clips = ({clip, imgsrc}) => {
  return (
    <div className='relative h-28 w-32  rounded-xl overflow-hidden group transition-all duration-300 lg:w-24 lg:h-20 md:w-24 sm:w-14  md:h-20 sm:h-12'>
        <img src={imgsrc} alt="/" 
            className='inset-80 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500'
        />
        <div className='bg-white blur-effect-theme absolute top-11 left-12 lg:top-6 lg:left-8 sm:top-4 sm:left-4 right-0 z-[100] w-8 h-8 md:h-8 md:w-8 sm:w-5 sm:h-5 flex items-center justify-center rounded-full '>
            <PlayIcon  className='icon-style text-slate-900 md:h-5 md:w-5 sm:w-3 sm:h-3'/>
        </div>
        <video autoPlay={true}
                muted={true}
                playsInline={true}
                loop={true}
                className='absolute top-0 left-0 right-0 flex h-full w-full object-cover
                z-0 opacity-0 group-hover:opacity-100
                    group-hover:z-50 rounded-xl 
                '
        >
            <source type='video/mp4' src={clip} />
        </video>
    </div>
  )
}

export default Clips