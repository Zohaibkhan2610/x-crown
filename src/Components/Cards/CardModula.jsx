
import React from 'react'

export default function CardModula({label,title,para}) {
  return (
        <div className="bg-white w-[300px] md:p-4 my-4 border-[4px] rounded-xl border-transparent hover:border-orange-400">
            <div className="flex flex-wrap w-full justify-center items-center">
            <i className='border border-transparent rounded-[80%] w-20 h-[100px] text-[red] my-4 text-[2rem] flex justify-center items-center mb-4'>{label}</i>
            </div>
            <div className="inline-flex flex-col h-[200px] pt-3 items-center">
            <h3 className=' text-[1.1rem] capitalize font-bold'>{title}</h3>
            <p className=' text-[1rem] w-[100%] capitalize'>{para}</p>
            </div>
        </div>  

  )
}
