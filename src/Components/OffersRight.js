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
    <div className='flex flex-col justify-center bg-inherit w-[70%] h-[100%]'>
 {
              
              <div className='bg-slate-100 flex flex-col items-center justify-center w-[100%] h-[40%] text-[rgb(43,2,0)] font-extrabold text-[25px] text-center pt-[10px]'>
                   <img src={selectedOffer.imgUrl} alt={selectedOffer.title} className='w-[40%] h-[100%] m-auto' />
              </div>
  }

     <div className='bg-inherit w-[100%] h-[60%]'>

         <div className='divide-[rgb(43,2,0)] h-[40%] mt-3'>
               <div className='leading-tight'>
                 <h2 className='text-[rgb(43,2,0)] font-extrabold text-[25px] max-w-[75%] h-[45%] ml-[13%] text-center'>{selectedOffer.title} </h2>
               </div>
                 <p className='text-[rgb(43,2,0)] text-[10px] font-extrabold mt-2 ml-[35%] max-w-[36%] h-[30%]'>A free Whopper (642 Kcal) with your first purchase using Click & Collect with a minimum spend of £3. Participating restaurants only</p>
         </div>

         <div className='opacity-70 ml-[10%] mt-[-60px]'>
           <p className='text-[rgb(43,2,0)] text-[11px] font-bold ml-[41%]'>How to redeem:</p>
           
           <p className='text-[rgb(43,2,0)] text-[11px] font-bold ml-[30%]'>1) Sign in, click 'add to mobile order' & select restaurant</p>
             <p className='text-[rgb(43,2,0)] text-[11px] font-bold ml-[38%]'>2) Add Whopper to basket</p>
             <p className='text-[rgb(43,2,0)] text-[11px] font-bold ml-[31%]'>3) Add one or more products so basket total is over £3</p>
             <p className='text-[rgb(43,2,0)] text-[11px] font-bold ml-[41%]'>4) Checkout</p>
           
         </div>

         <div className='flex flex-col items-center ml-[1%] pt-[20px] mt-[5px]'>
           <button className='flex items-center gap-3 w-[23%] h-[40px] bg-[rgb(214,35,0)] text-white font-bold rounded-[50px]'>
             <MdOutlineSmartphone className='ml-[30px] text-[25px] font-extrabold' />
             <h2 className='text-[15px] font-extrabold'>Redeem Reward</h2>
           </button>
           <div className='flex flex-col items-center justify-center'>
           <p className='text-[rgb(214,35,0)] text-[8.5px] font-semibold mt-[20px]'>Your subtotal must be £2.91 to redeem this offer. Add £2.91 to redeem</p>
           <p className='text-[rgb(43,2,0)] text-[8.5px] font-semibold w-[40%] ml-[5%] mt-5'>A free Whopper with your first purchase using Click and Collect. Offer must be redeemed with first purchase with a minimum spend of £3. Not valid in conjunction with any other offer. One voucher per transaction. Valid only in the UK. Subject to availability. Voucher valid at participating restaurants where Click and Collect is available only. Not valid at Burger King motorway service locations, airports train stations and holiday parks. © 2022 Burger King Europe GmbH. All rights reserved.</p>
           </div>

         </div>
     </div>
     </div>
)
}