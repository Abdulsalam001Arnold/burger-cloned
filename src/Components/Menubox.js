import React, { useState, useEffect } from 'react'

import { menuLists } from './List';

export default function Menubox() {

    const [menuImgList, setImgList] = useState(null)

    useEffect(() => {
      fetch('http://localhost:8001/menuLists')
      .then((res) => res.json())
      .then(data => setImgList(data))
    }, [])


  return (
    <main className='bg-[rgb(245,235,220)]'>

        <div className='flex flex-wrap items-center m-auto w-[80%] gap-6 md:flex-row mx-auto pt-10 pl-10 pb-5'>
            {
              menuImgList &&
                menuImgList.map((m, i) => (
                 <div key={m.id} className='flex flex-col w-[30%] overflow-hidden rounded-[10px] xl:shadow-xl'>
                    <img src={m.imgUrl} alt={m.title} className='w-full h-[200px]' />

                    <h2 className='h-[45px] text-center text-[rgb(43,2,0)] font-bold text-2xl bg-white flex items-center justify-center'>{m.title}</h2>

                 </div>

                ))
            }
        </div>
    </main>
  )
}