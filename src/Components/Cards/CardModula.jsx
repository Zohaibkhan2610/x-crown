
import React from 'react'

export default function CardModula({label,title,para}) {
  return (
    <>
    <div class="grid grid-cols-1 md:grid-cols-3 justify-center p-5 my-8 gap-4">
        <div className="card inline-flex flex-col w-[325px] h-[400px] border-4 border-transparent duration-300 rounded-2xl  hover:border-orange-400 justify-center items-center text-center bg-white p-9">
            <i className='border border-transparent rounded-[80%] w-20 h-20 text-[red] my-4 text-[2rem] px-2'>{label}</i>
            <h3 className='mb-4 text-[1.5rem] capitalize font-bold'>{title}</h3>
            <p className='mb-4 text-[1rem] w-[100%] capitalize'>{para}</p>
        </div>  
    </div>

    </>
  )
}
