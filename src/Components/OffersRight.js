import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {MdOutlineSmartphone} from 'react-icons/md'
import { http } from './Axios';

export default function OffersRight() {

    const { id } = useParams()

    const [selectedOffer, setSelectedOffer] = useState({ 

      "imgUrl": "https://cdn.sanity.io/images/czqk28jt/prod_bk_gb/17da7c76013ab0f2fd8ab60cfa711f2a16147526-800x513.png?w=320&q=40&fit=max&auto=format",
      "title": "CLICK & COLLECT FIRST ORDER: FREE WHOPPER WITH PURCHASE OVER £3",
      "info": "A free Whopper (642 Kcal) with your first purchase using Click & Collect with a minimum spend of £3. Participating restaurants only"
  })

  useEffect(() => {
    if(id)
    http.get(`offerList/${id}`)
        .then(res => setSelectedOffer(res.data)) 
        
}, [id])

  // const [displayModal, setDisplayModal] = useState(false)

  return (
    <div className='flex flex-col justify-evenly items-center w-[70%] h-[100%] mt-0'>
 {
              
              <div className='bg-slate-100'>
                   <img src={selectedOffer.imgUrl} alt={selectedOffer.title} className='object-cover w-full lg:items-center' />
              </div>
  }

     <div className='bg-inherit w-full'>

         <div className='mt-1'>
               <div className='leading-tight mt-1'>
                 <h2 className='text-[rgb(43,2,0)] font-extrabold text-3xl w-full text-center'>{selectedOffer.title} </h2>
               </div>
                 <p className='text-[rgb(43,2,0)] md:w-full text-xs text-center font-semibold'>A free Whopper (642 Kcal) with your first purchase using Click & Collect with a minimum spend of £3. Participating restaurants only.</p>
                 
         </div>

         <div>
          <h5 className='text-[rgb(43,2,0)] md:w-full text-xs text-center font-semibold mt-2'>How to Redeem:</h5>
          <ul className='text-[rgb(43,2,0)] md:w-full text-xs text-center font-semibold mt-2'>
            <li>1) Sign in, click 'add to mobile order' & select restaurant </li>
            <li>2) Add Whopper to basket</li>
            <li>3) Add one or more products so basket total is over £3</li>
            <li>4) Checkout</li>
          </ul>
         </div>
        <div className='w-full flex flex-col items-center mt-3'>
         <button className='bg-[rgb(214,35,0)] hover:cursor-pointer hover:bg-[rgb(160,85,70)] px-3 py-1 rounded-full text-center items-center'>
           <span className='flex items-center gap-2'><MdOutlineSmartphone className='text-white'/> <p className='text-white'>Add to Offer</p></span>
         </button>

         <p className='text-center text-xs text-[rgb(214,35,0)] mt-3'>Your subtotal must be £2.91 to redeem this offer. Add £2.91 to redeem</p>

         <p className='text-center text-xs text-[rgb(43,2,0)]'>A free Whopper with your first purchase using Click and Collect. Offer must be redeemed with first purchase with a minimum spend of £3. Not valid in conjunction with any other offer. One voucher per transaction. Valid only in the UK. Subject to availability. Voucher valid at participating restaurants where Click and Collect is available only. Not valid at Burger King motorway service locations, airports train stations and holiday parks. © 2022 Burger King Europe GmbH. All rights reserved.</p>
         </div>
        

         
     </div>
     </div>
)
}