import { FaBars } from "react-icons/fa"
import { Link } from "react-router-dom"
import logo from "../images/pngimg.com - burger_king_PNG15.png"
import { MdLocationPin } from "react-icons/md"
import { MdShoppingBag } from "react-icons/md"
import More from '../Components/More';
import { useState } from "react"


export default function Navbar() {

    const [displayMore, setDisplayMore] = useState(false)

    return (
        <header className={` bg-[rgb(245,235,220)] flex items-center justify-between w-100% h-[80px] text-[rgb(43,2,0)] md:flex fixed w-full top-0 left-0 font-serif`}>
            
            <ul className="items-center w-[380px] justify-between font-extrabold text-lg md:flex ">
            <div className="mr-2">
                <Link to='/'><FaBars className="ml-10" /></Link>
            </div>
                <li className="hover:text-[rgb(214,35,0)]"><Link to="/orders">Order</Link></li>
                <li className="hover:text-[rgb(214,35,0)]"><Link to="/offers">Offers</Link></li>
                <li className="hover:text-[rgb(214,35,0)]"><Link to="/menu">Menu</Link></li>
                <li className="hover:text-[rgb(214,35,0)]"><Link to="/delivery">Delivery</Link></li>
                <li className="hover:text-[rgb(214,35,0)] cursor-pointer" onClick={() => setDisplayMore(true)}>More</li>
            </ul>
            <Link to='./'><img src={logo} alt="" className="w-[50px] h-[50px] ml-[120px]" /></Link>

            <div className="flex items-center gap-6 mr-10">
            <div className="flex items-center gap-3 text-amber-950 font-black">
            <MdLocationPin className="font-extrabold text-2xl" />
            <Link>For item availability</Link>
            <Link className="underline ">Choose your location</Link>
            </div>
            <div className="flex items-center gap-4 text-[rgb(43,2,0)]">
                <button className="px-3 py-1 bg-[rgb(214,35,0)] rounded-[50px] font-extrabold font-mono text-white text-[12px]">Sign Up</button>
                <button className="flex items-center gap-2 px-5 py-1 bg-[rgb(43,2,0)] rounded-[50px] text-white font-bold">
                <MdShoppingBag />
                <p>£0.00</p>
                </button>
            </div>
            </div>
            {displayMore && <More setDisplayMore={setDisplayMore} />}    
        </header>
        
    )
}