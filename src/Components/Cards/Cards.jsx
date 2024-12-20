import React from 'react'
import { faClock, faHdd, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faSatelliteDish, faServer, faWifi3 } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cards2 from './Cards2'
import { CardModula, CardModula2 } from './CardModula'
export default function Cards() {
    return (
        <>
            <div className="w-[100%] bg-black inline-flex justify-center items-center">
                <div className="px-4 grid xl:grid-cols-4 gap-4 sm:grid-cols-2 grid-cols-1 w-fit h-fit justify-evenly bg-black">
                    
                    <CardModula2 Time='1 Month' price='25'/>
                    <CardModula2 Time='3 Months' price='50'/>
                    <CardModula2 Time='6 Months' price='75'/>
                    <CardModula2 Time='1 Year' price='90'/>

                </div>
            </div>

            <Cards2 />
            <div className="bg-black md:px-6 flex flex-col items-center justify-center text-center">
                <div className='pt-6 text-center font-serif font-bold'>
                <h1 className='capitalize text-[2rem] text-white'>Get the best iPTV service on x-crown</h1>
                <h3 className='text-[1.17rem] text-white'>No Desire for buffering and Frezzers?</h3>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-2 grid-cols-1 md:w-[80%] mb-10 place-self-center">
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
