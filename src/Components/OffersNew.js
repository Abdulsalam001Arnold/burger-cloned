import React, { useEffect, useState } from 'react'
import OfferTag from './OfferTag';
import { http } from '../Components/Axios'
import { Link } from 'react-router-dom'
import OffersRight from '../Components/OffersRight';

export default function OffersNew() {

    const [data, setData] = useState([])

    useEffect(() => {
      http.get('offerList')
       .then(res => setData(res.data))
    }, [])


  return (

    <section className='bg-[rgb(245,235,220)] w-[100%] h-[110vh] pb-[10px]'>

      <OfferTag />


    <div className='flex items-center w-[100%] h-[90%]'>
        <div className='bg-inherit w-[30%] h-[100%] overflow-y-scroll pb-[10px]'>
        <ul className=''>
        {
              data ?
                data.map((x, index) => (
                 <li className='list' key={index}>
                  <Link to={`/offers/${x.id}`} className='flex items-center list-none h-[90px] border border-y-[rgb(43,2,0)] border-opacity-20 gap-4 ml-4'>
                      <img src={x.imgUrl} alt={x.title} className='w-[25%] h-[90%]' />
                  
                  <div className='divide-[rgb(43,2,0)]'>
                    <h2 className='text-[rgb(43,2,0)] font-extrabold text-[10px]'>{x.title}</h2>
                    <p className='text-[rgb(43,2,0)] text-[10px] mt-2'>{x.info}</p>
                  </div>
                  </Link></li>

                )) : <div></div>
            }
        </ul>
      </div>
      <OffersRight />
    </div>

    </section>
)
}
