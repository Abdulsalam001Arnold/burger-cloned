import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/offerimg-1340x2014.webp'
import playstore from "../images/playstore.png"
import applestore from "../images/applestore.png";

function Picboxchild() {
  return (
    <div className='bg-[rgb(240,230,204)] w-5/5 h-3/5 pt-[30px] overflow-hidden'>
        <div className='flex bg-[rgb(240,230,204)] w-[100%] h-[100%] ml-[50%]'>
        <Link href='./'><img src={logo} alt='' className='' /></Link>

        <div className='flex flex-col w-[20%] h-[100%]'>
            <h1 className='font-extrabold text-6xl text-[rgb(43,2,0)] m-auto mt-5'>
            Save £££
            With offers on demand  
            </h1>
            <div className='flex items-center gap-11 mt-[70px]'>
                <Link href='./'><img src={applestore} alt='' className='w-[140px] h-[40px] rounded-[5px]' /></Link>
               <Link href='./'><img src={playstore} alt='' className='w-[140px] h-[40px] rounded-[5px]' /></Link>   
            </div>
            <p className='text-amber-950 font-semibold mt-16'>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</p>
        </div>
        </div>
    </div>
  )
}

export default Picboxchild