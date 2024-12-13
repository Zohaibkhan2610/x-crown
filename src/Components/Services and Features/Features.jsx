import React from 'react'
import Image from './Images/Feature1.jpg'
import Image2 from './Images/Feature2.jpg'
import Image3 from './Images/Feature3.jpg'
export default function Features() {
  
  return (
    <>
    <div class="bg-gray-800 grid md:grid-cols-3 grid-cols-1 gap-4 pb-6">
      <div class="bg-gray-800 p-4 rounded-lg items-center text-center inline-flex flex-col justify-center">
        <img src={Image} className='w-[185px] mx-4 mb-3' alt="" />
        <h2 class="text-2xl font-bold text-white mb-4">Unlock Lightning-Fast Streaming</h2>
        <p class="text-gray-400 md:w-[90%] w-[100%] capitalize">Experience the power of our expertly engineered IPTV service, with 9+ years of uninterrupted entertainment guaranteed!</p>
      </div>
    
      <div class="bg-gray-800 p-4 rounded-lg items-center text-center inline-flex flex-col justify-center">
        <img src={Image2} className='w-[180px] h-[100px] mx-4 mb-3' alt="" />
        <h2 class="text-2xl font-bold text-white mb-4">Maximize Your Viewing Pleasure</h2>
        <p class="text-gray-400 md:w-[90%] w-[100%] capitalize">Enjoy seamless TV on multiple devices at once with our innovative multiScreen technology - no interruptions, no hassle!</p>
      </div>
    
      <div class="bg-gray-800 p-4 rounded-lg items-center text-center inline-flex flex-col justify-center">
        <img src={Image3} className='w-[180px] h-[100px] mx-4 mb-3' alt="" />
        <h2 class="text-2xl font-bold text-white mb-4">Global Servers for a Local Experience</h2>
        <p class="text-gray-400 md:w-[90%] w-[100%] capitalize">Our strategically located USA & European-based servers ensure a lag-free, high-quality viewing experience, no matter where you are!</p>
      </div>
    </div>

    </>
  )
}
