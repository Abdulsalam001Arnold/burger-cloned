import React, { useState, useEffect } from 'react'

import { menuLists } from './List';

export default function Menubox() {

    const [menuImgList, setImgList] = useState(null)

    useEffect(() => {
      fetch('http://localhost:3001/menuLists')
      .then((res) => res.json())
      .then(data => setImgList(data))
    }, [])


  return (
    <main className='bg-[rgb(245,235,220)]'>

        <div className='grid sm:grid-cols-3 md:items-center gap-2 my-1'>
            {
              menuImgList &&
                menuImgList.map((m, i) => (
                 <div key={m.id} className='rounded-lg shadow-md overflow-hidden'>
                    <img src={m.imgUrl} alt={m.title} className='w-full h-[200px]' />

                    <h2 className='h-[45px] text-center text-[rgb(43,2,0)] font-bold font-serif text-2xl bg-white flex items-center justify-center'>{m.title}</h2>

                 </div>

                ))
            }
        </div>
    </main>
  )
}