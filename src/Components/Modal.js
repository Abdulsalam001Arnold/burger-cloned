import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export default function Modal({setDisplayModal}) {

  const [promoCode, setPromoCode] = useState({
    promoCode: ''
  })

  function updatePromoCodes(e) {
    const {name, value} = e.target

    setPromoCode(prev => {
      return  {...prev, [name]: value}
      })
  }

  return (
    <section className='backdrop-brightness-[0.3] h-screen w-full fixed top-0 left-0 flex items-center justify-center z-50'>
        <div className=' flex items-center w-full h-[180px] mt-[40%] bg-[rgb(255,255,255)] rounded-t-3xl shadow-2xl relative z-50'>
          <div className='flex items-center  gap-[40%] border-b border-gray-300 w-[100%] h-[35%] absolute top-0 z-50'>
            <button onClick={() => setDisplayModal(false)} className='font-extrabold text-[20px] text-[rgb(80,35,20)] ml-5'><AiOutlineClose /></button>
            <h2 className='text-[15px] text-[rgb(80,35,20)] font-extrabold'>Apply Promo Code</h2>
          </div>
          <div className=' flex items-center gap-[25%] w-full mt-[20px]'>
            <div className='ml-4'>
            <input 
              type='number' 
              placeholder='Enter Promo Code' 
              id='PromoCode'
              value={promoCode.name} className='w-[700px] h-[45px] border-[2px] border-[rgba(0,0,0,0.1)] rounded-[5px] text-[15px] text-[rgb(80,35,20)]'
              name='promoCode'
              onChange={updatePromoCodes} />
            </div>
            <div className='w-[50%]'>
            <button className='px-14 py-3 bg-[rgb(245,235,220)] border-[rgb(214,35,0)] text-[rgb(80,35,20)] rounded-[20px] font-extrabold opacity-60'>Apply</button>
            </div>
          </div>

        </div>
    </section>
  )
}