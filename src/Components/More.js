import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export default function More({setDisplayMore}) {

  const [displayMore] = useState({
    displayMore: ''
  })

  function updateMore() {

    setDisplayMore(true)
  }

  return (
    <div className='bg-inherit w-[200px] h-[400] fixed top-[80px] left-[20%] overflow-y-scroll pl-5 pb-3 shadow-2xl'>
      <div className=''>
        <button onClick={() => setDisplayMore(false)} className='font-extrabold text-[20px] text-[rgb(80,35,20)] bg-[rgb(214,35,0)] absolute left-0 mb-4'><AiOutlineClose /></button>
      </div>
        <ul className='text-[rgb(43,2,0)] mt-10 mb-2 text-[10px] font-semibold hover:underline' value={displayMore.name} name='displayMore'>
          <li><a href='/'>About BK</a></li>
          <li><a href='menu'>YourBurgerKing</a></li>
          <li>Responsible Business</li>
          <li>Locations</li>
          <li>Nutrition Explorer</li>
          <li>FAQs</li>
          <li>Allergen Info</li>
          <li>Terms & Conditions</li>
          <li>Animal Welfare Policy</li>
          <li>Gender Pay Gap</li>
          <li>Corporate Policies</li>
          <li>Get in touch</li>
        </ul>

        <div className='w-[90%] h-[0.5px]'></div>
        
        <ul className='text-[rgb(43,2,0)] text-[10px]'>
          <li>Careers</li>
          <li>Privacy & Cookies Policy</li>
          <li>Tax Strategy</li>
        </ul>
    </div>
  )
}
