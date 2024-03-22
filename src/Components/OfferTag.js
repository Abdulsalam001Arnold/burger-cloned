import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tag from "../images/tag2.webp"
import Modal from '../Components/Modal';


export default function OfferTag() {

  const [displayModal, setDisplayModal] = useState(false)

  return (
    <div className='flex items-center gap-5 bg-inherit w-[100%] h-[10%] mt-[80px] mb-[8px]'>
          <Link to='./'><img src={Tag} alt="" className="bg-inherit w-[30px] h-[30px] ml-[30px]" onClick={() => setDisplayModal(true)} /></Link>

          <Link><h2 className='text-[rgb(43,2,0)] text-lg font-extrabold' onClick={() => setDisplayModal(true)}>Have a Promo Code?</h2></Link>

          {displayModal && <Modal setDisplayModal={setDisplayModal} />}

      </div>
      
  )
}
