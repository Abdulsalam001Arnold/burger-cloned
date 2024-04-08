import { FaBars } from "react-icons/fa"
import { Link } from "react-router-dom"
import { Carousel } from "antd";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../images/pngimg.com - burger_king_PNG15.png"
import { MdLocationPin } from "react-icons/md"
import { MdShoppingBag } from "react-icons/md"
import More from '../Components/More';
import { useState } from "react"


 
export default function Navbar() {

    // const [displayMore, setDisplayMore] = useState(false)
    const [open, setOpen] = useState(false)
    return (
        // <header className={` bg-[rgb(245,235,220)] flex items-center justify-between w-100% h-[80px] text-[rgb(43,2,0)] md:flex fixed w-full top-0 left-0 font-serif`}>


        //     <ul className="items-center w-[380px] justify-between font-extrabold text-lg md:flex ">
        //     <div className="mr-2">
        //         <Link to='/'><FaBars className="ml-10" /></Link>
        //     </div>
        //         <li className="hover:text-[rgb(37,30,29)] gap-5"><Link to="/orders">Order</Link></li>
        //         <li className="hover:text-[rgb(214,35,0)] gap-9"><Link to="/offers">Offers</Link></li>
        //         <li className="hover:text-[rgb(214,35,0)]"><Link to="/menu">Menu</Link></li>
        //         <li className="hover:text-[rgb(214,35,0)]"><Link to="/delivery">Delivery</Link></li>
        //         <li className="hover:text-[rgb(214,35,0)] cursor-pointer" onClick={() => setDisplayMore(true)}>More</li>
        //     </ul>
        //     <Link to='./'><img src={logo} alt="" className="w-[50px] h-[50px] ml-[120px]" /></Link>

        //     <div className="flex items-center gap-6 mr-10">
        //     <div className="flex items-center gap-3 text-amber-950 font-black">
        //     <MdLocationPin className="font-extrabold text-2xl" />
        //     <Link>For item availability</Link>
        //     <Link className="underline ">Choose your location</Link>
        //     </div>
        //     <div className="flex items-center gap-4 text-[rgb(43,2,0)]">
        //         <button className="px-3 py-1 bg-[rgb(214,35,0)] rounded-[50px] font-extrabold font-mono text-white text-[12px]">Sign Up</button>
        //         <button className="flex items-center gap-2 px-5 py-1 bg-[rgb(43,2,0)] rounded-[50px] text-white font-bold">
        //         <MdShoppingBag />
        //         <p>£0.00</p>
        //         </button>
        //     </div>
        //     </div>
        //     {displayMore && <More setDisplayMore={setDisplayMore} />}    
        // </header>
        
        <header className={`bg-[rgb(245,235,220)] py-5 px-10 w-full shadow-md fixed top-0
         left-0 z-40`}>
          <div className="md:flex items-center justify-between md:px-10 px-7">
          <div className="cursor-pointer flex items-center">
          <Link to="/">
          <img src={logo} className="w-10 mr-7 md:items-start"/>
          </Link>
          </div>
            
          <div className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden" onClick={() => setOpen(!open)}>
            <AiOutlineMenu name={open ? 'AiOutlineClose' : 'AiOutlineMenu'} />
          </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[rgb(245,235,220)] md:z-10 z-[10] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${open ? 'top-20': 'top-[-490px]'}`}>
          <li className="hover:text-[rgb(0,0,0)] font-bold text-[rgb(101,76,72)] mr-6 md:my-0 my-13"><Link to="/orders">Order</Link></li>
               <li className="hover:text-[rgb(0,0,0)] font-bold text-[rgb(101,76,72)] gap-9 md:mr-6 md:my-0 my-7"><Link to="/offers">Offers</Link></li>
                <li className="hover:text-[rgb(0,0,0)] font-bold text-[rgb(101,76,72)] mr-6 md:my-0 my-7"><Link to="/menu">Menu</Link></li>
             <li className="hover:text-[rgb(0,0,0)] font-bold text-[rgb(101,76,72)]] mr-6 md:my-0 my-7"><Link to="/delivery">Delivery</Link></li>
          </ul>
          </div>
          
        </header>
    )
}