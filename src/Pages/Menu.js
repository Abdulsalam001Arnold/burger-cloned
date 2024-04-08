import React from 'react'
import Menubox from '../Components/Menubox'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import OurMenu from '../Components/OurMenu'

function Menu() {
  return (
    <div className=''>
      <div>
        <Navbar/>
      </div>
      <div className=''>
        <OurMenu className='' />
        <Menubox />
        <Footer className='' />
      </div>  
    </div>
  )
}

export default Menu