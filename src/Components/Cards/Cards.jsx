import React from 'react'
import { faClock, faHdd, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faSatelliteDish, faServer, faWifi3 } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cards2 from './Cards2'
import CardModula from './CardModula'
export default function Cards() {
    return (
        <>
            <div className="w-[100%] bg-black inline-flex justify-center items-center">
                <div className="px-4 grid md:grid-cols-4 gap-4 sm:grid-cols-2 grid-cols-1 w-fit h-fit justify-evenly bg-black">
                    <div className="my-8 backdrop-blur-sm bg-white/25 text-white p-5 rounded-lg shadow-lg text-center w-[100%] mx-auto border-[2px] border-transparent duration-200 hover:border-orange-400">
                        <div className="text-3xl font-bold mb-2">3 MONTHS</div>
                        <div className="text-4xl font-bold text-orange-400 mb-5">$29.99</div>
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
                        <button className="bg-orange-400 text-white px-4 py-2 rounded-md cursor-pointer font-medium">ENROLL NOW</button>
                    </div>
                    <div className="my-8 backdrop-blur-sm bg-white/25 text-white p-5 rounded-lg shadow-lg text-center w-[100%] mx-auto border-[2px] border-transparent duration-200 hover:border-orange-400">
                        <div className="text-3xl font-bold mb-2">3 MONTHS</div>
                        <div className="text-4xl font-bold text-orange-400 mb-5">$29.99</div>
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
                        <button className="bg-orange-400 text-white px-4 py-2 rounded-md cursor-pointer font-medium">ENROLL NOW</button>
                    </div>
                    <div className="my-8 backdrop-blur-sm bg-white/25 text-white p-5 rounded-lg shadow-lg text-center w-[100%] mx-auto border-[2px] border-transparent duration-200 hover:border-orange-400">
                        <div className="text-3xl font-bold mb-2">3 MONTHS</div>
                        <div className="text-4xl font-bold text-orange-400 mb-5">$29.99</div>
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
                        <button className="bg-orange-400 text-white px-4 py-2 rounded-md cursor-pointer font-medium">ENROLL NOW</button>
                    </div>
                    <div className="my-8 backdrop-blur-sm bg-white/25 text-white p-5 rounded-lg shadow-lg text-center w-[100%] mx-auto border-[2px] border-transparent duration-200 hover:border-orange-400">
                        <div className="text-3xl font-bold mb-2">3 MONTHS</div>
                        <div className="text-4xl font-bold text-orange-400 mb-5">$29.99</div>
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
                        <button className="bg-orange-400 text-white px-4 py-2 rounded-md cursor-pointer font-medium">ENROLL NOW</button>
                    </div>
                </div>
            </div>

            <Cards2 />
            <div className="bg-black md:px-6 flex flex-col items-center justify-center text-center">
                <div className='pt-6 text-center font-serif font-bold'>
                <h1 className='capitalize text-[2rem] text-white'>Get the best iPTV service on x-crown</h1>
                <h3 className='text-[1.17rem] text-white'>No Desire for buffering and Frezzers?</h3>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-2 grid-cols-1 md:w-[100%] mb-10">
                    <CardModula
                    label={<FontAwesomeIcon className='h-12' icon={faClock}/>}
                    title={'Instant Activation'}
                    para={'Enjoy your fully activated IPTV Service once your payment is confirmed.'}/>
                    
                    <CardModula
                    label={<FontAwesomeIcon className='h-12' icon={faServer}/>}
                    title={'Work on all devices'}
                    para={'Enjoy your favorite shows and channels, anywhere, anytime.'}
                    />
                    <CardModula
                    label={<FontAwesomeIcon className='h-12' icon={faSatelliteDish}/>}
                    title={'watching live tv with zero effort!'}
                    para={'Over +25,000 live TV channels and +30,000 movies and +20,000 TV shows on demand.'}
                    />
                    <CardModula
                    label={<FontAwesomeIcon className='h-12' icon={faHdd}/>}
                    title={'Most stable server'}
                    para={'With a fleet of over 100 high-performance servers, you can be confident in their stability and reliability.'}
                    />
                    <CardModula
                    label={<FontAwesomeIcon className='h-12' icon={faThumbsUp}/>}
                    title={'free intallation'}
                    para={'Our free installation guide covers every step.'}
                    />
                    <CardModula
                    label={<FontAwesomeIcon className='h-12' icon={faWifi3}/>}
                    title={'Super Quality'}
                    para={'HD & 4K channels, smooth streaming, daily updates.'}
                    />
                </div>

            </div>


        </>
    )
}
