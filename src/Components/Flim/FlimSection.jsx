import React from 'react'
import flimimg1 from './Flim Images/Flim1.jpg'
import flimimg2 from './Flim Images/Flim2.jpg'
import flimimg3 from './Flim Images/Flim3.jpg'
import flimimg4 from './Flim Images/Flim4.jpg'
import flimimg5 from './Flim Images/Flim5.jpg'
import flimimg6 from './Flim Images/Flim6.jpg'
import flimimg7 from './Flim Images/Flim7.jpg'
import flimimg8 from './Flim Images/Flim8.jpg'
import flimimg9 from './Flim Images/Flim9.jpg'
import flimimg10 from './Flim Images/Flim10.jpg'
import flimimg11 from './Flim Images/Flim11.jpg'
import flimimg12 from './Flim Images/Flim12.jpg'
export default function FlimSection() {
    
  return (
    <>
    <div className='bg-[black] relative overflow-hidden text-white text-center mb-8'>
        <div className='grid grid-cols-6 mt-2'>
            <img src={flimimg1} alt="" />
            <img src={flimimg2} alt="" />
            <img src={flimimg3} alt="" />
            <img src={flimimg4} alt="" />
            <img src={flimimg5} alt="" />
            <img src={flimimg6} alt="" />
        </div>
        <h1 className='text-3xl my-8 font-bold leading-[1.5rem] capitalize'>Premium 4K Video Content Providers for Movies and Channels</h1>
        <div className='flex'>
        <div className='grid grid-cols-6 mt-2 transition-transform duration-500 ease-in-out" id="image-carousel"'>
            <img src={flimimg7} className='w-[252px] h-[355px]' alt="" />
            <img src={flimimg8} className='w-[252px] h-[355px]' alt="" />
            <img src={flimimg9} className='w-[252px] h-[355px]' alt="" />
            <img src={flimimg10} className='w-[252px] h-[355px]' alt="" />
            <img src={flimimg11} className='w-[252px] h-[355px]' alt="" />
            <img src={flimimg12} className='w-[252px] h-[355px]' alt="" />
        </div>
        </div>
        
    </div>
    </>
  )
}
