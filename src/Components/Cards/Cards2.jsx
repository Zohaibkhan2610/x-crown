import React from 'react'
import CardI from './Images/logos.png'
export default function Cards2() {
  return (
    <>
    <div className='bg-black'>
        <div className="flex justify-center items-center flex-col gap-5 text-white">
            <h1 className='my-8 capitalize text-4xl font-bold'>Media outlets from all over the world</h1>
            <img src={CardI} alt="" className='mb-8' />
        </div>
    </div>
    </>
  )
}
