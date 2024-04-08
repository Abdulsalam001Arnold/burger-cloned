import React from 'react'
import { Link } from "react-router-dom"
import { IoGlobeOutline } from "react-icons/io5"
import { FaInstagram } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { CiYoutube } from "react-icons/ci"
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-[rgba(80,35,20,0.89)] w-full px-7 md:px-20 py-14'>
    <div className='md:flex justify-between'>
  <h1 className='text-white font-extrabold text-2xl'><Link to='./'>BURGER KING</Link></h1>
      <div className='lg:grid grid-cols-3'>
         <div className='col-span-1'>
          <h1 className='text-white font-extrabold text-2xl'>BK® INFO</h1>
          <ul className='mt-3'>
          <li className='text-white font-semibold text-sm mt-3'><Link>About Bk</Link></li>
          <li className='text-white font-semibold text-sm mt-3'><Link>Privacy Policy</Link></li>
          <li className='text-white font-semibold text-sm mt-3'><Link>Reach out to US</Link></li>
          <li className='text-white font-semibold text-sm mt-3'><Link>Terms and Conditions</Link></li>
          </ul>

         </div>

         <div className='col-span-1'>
          <h1 className='text-white font-extrabold text-2xl'>BK® Cares</h1>
          <ul  className='mt-3'>
          <li className='text-white font-semibold text-sm mt-3'><Link>Alergens Info</Link></li>
          <li className='text-white font-semibold text-sm mt-3'><Link>Food quality</Link></li>
          <li className='text-white font-semibold text-sm mt-3'><Link>Responsibility</Link></li>
          
          </ul>

         </div>
         <div className='col-span-1'>
          <h1 className='text-white font-extrabold text-2xl'>BK® and YOU</h1>
          <ul  className='mt-3'>
          <li className='text-white font-semibold text-sm mt-3'><Link>Careers</Link></li>
          <li className='text-white font-semibold text-sm mt-3'><Link>Privacy Policy</Link></li>
          
          </ul>

         </div>
      </div>
     
    </div>
    <div className='bg-[rgb(133,101,91)] h-[2px] w-full mt-7'></div>
    <div className='w-full mt-8 md:flex justify-between items-center'>
      <span className='text-[rgb(244,255,255)] font-bold text-xs'>TM & Copyright 2021 Burger King Corporation. All Rights Reserved</span>
      <div className='flex gap-4 mt-6'>
        <FaFacebookSquare className='text-white text-xl'/>
        <FaTwitter className='text-white text-xl'/>
        <FaInstagram className='text-white text-xl'/>
        <CiYoutube className='text-white text-xl'/>
      </div>
    </div>
    </div>
                

        
            
  )
}

export default Footer