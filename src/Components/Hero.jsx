import React from 'react'
import Hero1 from './Images/hero background.jpg'
import './HeroSection.css'
export default function HeroSection() {
  return (
    <>
<section class="heroSection bg-gray-900 text-white">
        <div class="mx-auto w-[100%] px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div class="mx-auto w-[100%] text-center"
          >
            <h1
              class="bg-gradient-to-r mt-[-6.25rem] from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent sm:text-5xl flex flex-col md:text-7xl"
            >
              The Most Stable and Reliable <span>X-Crown</span>
              <span class="sm:block"> IPTV Service in the World </span>
            </h1>

            <p class="mx-auto mt-4 sm:text-xl/relaxed md:w-[70%] w-[100%]">
              Dive into a world of endless entertainment with X-Crown. Enjoy over +25,000 live TV channels, 30,000 movies, and +20,000 TV shows in stunning 4K quality. Access your favorite content on any device, anytime, anywhere.
              Enjoy our IPTV service on your favorite devices: Smart TVs, Android devices, Apple products, Amazon Fire Stick, KODI, and MAG Box. We've got you covered.
            </p>

            <div class="mt-16 flex flex-wrap justify-center gap-4">
              <div class="flip-card w-72 h-16 overflow-hidden">
                <div class="flip-card-inner">
                  <div class="flip-card-front border border-[red] rounded-full">
                    <button className='w-full h-full flex text-clip items-center justify-center text-2xl font-bold'>Free trail</button>
                  </div>
                  <div class="flip-card-back border-[black] rounded-full">
                    <button className='w-full h-full flex text-clip items-center justify-center text-2xl font-bold'>Free trail</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






    </>

  )
}


