import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'
import { RiMap2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import LocationFav from "../Components/LocationFav";

export default function Order() {

    const [displayFav, setDisplayFav] = useState({
        nearby: true,
        fav: false,
        recent: false
    })

  return (
    <section className='bg-[rgb(245,235,220)] w-full h-[93svh] overflow-hidden font-serif'>
        <div className='flex items-center gap-[20%] bg-[rgb(214,35,0)] w-full h-[70px] m-auto'>
            <div className='ml-[46.5%]'>
                <h1 className='text-white text-3xl font-extrabold'>Locations</h1>
            </div>

            <div className='flex items-center gap-2'>
                <h1 className='text-white text-xl font-extrabold'>Map</h1>
                <RiMap2Line className='text-white text-3xl' />  
            </div>

        </div>

        <div className='flex items-center gap-[30px] ml-[23.5%] mt-8'>
            <div className='flex items-center text-lg font-medium border-gray-300'>
                <button className='bg-[rgb(43,2,0)] w-[70px] h-[45px] rounded-l-[5px] text-white border-gray-300 border-[2px]'>Pick Up</button>
                <button className='w-[80px] h-[45px] rounded-r-[5px] bg-white border-gray-300 border-[2px]'>Delivery</button>
            </div>
            <div className='flex items-center relative'>
                <input type='text' placeholder='Your Address' className='w-[625px] h-[45px] border-[2px] border-[rgba(0,0,0,0.1)] rounded-[5px] text-[rgb(80,35,20)] text-[15px]' />
                <MdSearch className='text-gray-400 text-3xl absolute right-5' />    

            </div>
        </div>

        <div className=''>
            <ul className='flex items-center justify-center list-none mr-[5%] mt-11 text-xl font-semibold w-[60%] ml-[20.5%] relative'>
                <div className={`absolute bottom-0 bg-red-600 h-1 w-[33.33%] ${displayFav.fav ? 'left-[33.33%]' : displayFav.recent ? 'left-[66.66%]' : 'left-0'}`}></div>
                <div className='hover:border-b-[rgb(214,35,0)] w-[33.33%] flex flex-col border-[3px] border-x-0 border-t-0 ease-in-out cursor-pointer pb-[15px]'>
                    <Link to='' className='w-[100%] ml-[40%] flex items-center' onClick={() => setDisplayFav({nearby: true, fav: false, recent: false})}><li>Nearby</li></Link>
                </div>
                <div className='hover:border-b-[rgb(214,35,0)] w-[33.33%] flex flex-col border-[3px] border-x-0 border-t-0 ease-in-out cursor-pointer pb-[15px]'>
                    <Link to='' className='flex items-center w-[100%] ml-[35%]' onClick={() => setDisplayFav(prev => {return {...prev, fav: true, nearby: false}})}><li>Favourites</li></Link>
                </div>
                <div className='hover:border-b-[rgb(214,35,0)] w-[33.33%] flex flex-col border-[3px] border-x-0 border-t-0 ease-in-out cursor-pointer pb-[15px]'>
                    <Link to='' className='flex items-center w-[100%] ml-[35%]' onClick={() => setDisplayFav(prev => {return {...prev, recent: true, nearby: false}})}><li>Recents</li></Link>
                </div>
            </ul>
            <div className='flex items-center w-[60%] border-[rgba(0,0,0,0.1)] border-[1px] ml-[20.5%]'></div>
        </div>

        <div>
        </div>
        <LocationFav displayFav={displayFav}/>
    </section>
  )
}
