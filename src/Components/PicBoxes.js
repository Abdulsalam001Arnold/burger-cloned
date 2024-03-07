import React from 'react'
import { menuItems } from './List';

export default function PicBoxes() {

    const menuList = menuItems
  return (
    <section className='bg-[rgb(245,235,220)] py-32 pb-[200px]'>
        <div className='flex flex-wrap items-center m-auto w-[75%] gap-6 md:flex-row mx-auto'>
            {
                menuItems.map((m, index) => (
                    <div key={index} className='flex flex-col w-[45%] mb-6 overflow-hidden rounded-[15px] xl:shadow-xl'>
                        <img src={m.imgUrl} alt={m.title} className='w-full max-h-[260px] md:h-[350px]' />
                        
                        <div className='px-5 bg-white h-[120px] flex flex-col justify-center'>
                            <h2 className='font-bold text-amber-950 text-2xl'>{m.title}</h2>

                            <div className='flex flex-col justify-between xl:flex-row xl:items-center'>
                            <p className='font-semibold'>{m.info}</p>
                            <button className='bg-[rgb(214,35,0)] rounded-[50px] max-w-fit xl:min-w-fit px-4 py-3 font-extrabold text-white text-[15px]'>{m.button}</button>
                            </div>
                        </div>
                    </div>
            ))
            }
        </div>
    </section>
  )
}


