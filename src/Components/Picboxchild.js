import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/new-phone.png'
import playstore from "../images/playstore.png"
import applestore from "../images/applestore.png";

function Picboxchild() {
  return (


    <div className='w-full px-12 py-12 bg-[rgb(215,35,0)] lg:grid lg:grid-cols-3 gap-10 items-center'>
       <Link href='./'><img src={logo} alt='' className='w-[37rem] lg:ml-5 col-span-1' /></Link>
       <div className='col-span-2'>
        <h1 className='text-white font-extrabold text-6xl'>Download our app and discover the incredible offers we have for you!</h1>
        <div className='flex gap-5 mt-5 mb-6 rounded overflow-hidden'>
          <img src={playstore} className='w-[10rem]'/>
          <img src={applestore} className='w-[10rem]'/>

        </div>
        <span className='text-white text-xs font-bold lg:max-w-16'>Apple and the Apple logo are trademarks of Apple Inc., registered in the US and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms and Conditions apply.</span>
       </div>
    </div>
    
       

        
  )
}

export default Picboxchild