import React from 'react'
import Menubox from '../Components/Menubox'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import OurMenu from '../Components/OurMenu'

function Menu() {
  return (
    <div className='flex flex-col'>
      <div>
        <Navbar className='fixed z-[999px]' />
      </div>
      <div className='mt-24'>
        <OurMenu className='' />
        <Menubox />
        <Footer className='' />
      </div>  
    </div>
  )
}

export default Menu