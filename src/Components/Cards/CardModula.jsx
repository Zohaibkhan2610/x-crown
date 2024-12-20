
import React from 'react'

const CardModula = ({ label, title,para}) => {
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
const CardModula2 = ({ Time,price}) => {
return(
  <div className="my-8 backdrop-blur-sm bg-white/25 text-white p-5 rounded-lg shadow-lg text-center w-[100%] mx-auto border-[2px] border-transparent duration-200 hover:border-orange-400">
                        <div className="text-3xl font-bold mb-2">{Time}</div>
                        <div className="text-4xl font-bold text-orange-400 mb-5">£{price}</div>
                        <div className="mb-5">
                            <ul className="list-none p-0 m-0 text-left md:text-[1rem] sm:text-lg text-[0.700rem]">
                                <li className="mb-1">&#10004; Unbeatable Variety of Channels</li>
                                <li className="mb-1">&#10004; A Treasure Trove of Movies & Series</li>
                                <li className="mb-1">&#10004; Exceptional Picture Quality</li>
                                <li className="mb-1">&#10004; Comprehensive TV Guide</li>
                                <li className="mb-1">&#10004; Cutting-Edge Technology</li>
                                <li className="mb-1">&#10004; Seamless Updates</li>
                                <li className="mb-1">&#10004; Universal Compatibility</li>
                                <li className="mb-1">&#10004; Premium Sports Packages</li>
                                <li className="mb-1">&#10004; Exceptional Customer Support</li>
                            </ul>
                        </div>
                        <button className="bg-orange-400 text-white px-4 py-2 rounded-md cursor-pointer font-medium">BUY NOW</button>
                    </div>
)
}


export { CardModula,CardModula2 };
