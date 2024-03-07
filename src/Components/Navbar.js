import { FaBars } from "react-icons/fa"
import { Link } from "react-router-dom"
import logo from "../images/pngimg.com - burger_king_PNG15.png"
import { MdLocationPin } from "react-icons/md"
import { MdShoppingBag } from "react-icons/md";


export default function Navbar() {
    return (
        <header className={` bg-[rgb(245,235,220)] flex items-center justify-between w-100% h-[80px] text-[rgb(43,2,0)] md:flex fixed w-full top-0 left-0`}>
            
            <ul className="items-center w-[380px] justify-between font-bold text-lg md:flex">
            <div className="mr-2">
                <FaBars className="ml-10" />
            </div>
                <li><Link href="/delivery">Order</Link></li>
                <li><Link href="/offers">Offers</Link></li>
                <li><Link href="/menu">Menu</Link></li>
                <li><Link href="/delivery">Delivery</Link></li>
                <li><Link href="/">More</Link></li>
            </ul>
            <Link href='./'><img src={logo} alt="" className="w-[60px] h-[60px]" /></Link>

            <div className="flex items-center gap-6 mr-10">
            <div className="flex items-center gap-3 text-amber-950 font-black">
            <MdLocationPin className="font-extrabold text-2xl" />
            <Link>For item availability</Link>
            <Link className="underline ">Choose your location</Link>
            </div>
            <div className="flex items-center gap-4 text-[rgb(43,2,0)]">
                <button className="px-3 py-1 bg-orange-500 rounded-[50px] font-extrabold font-mono text-white text-[12px]">Sign Up</button>
                <button className="flex items-center gap-2 px-5 py-1 bg-[rgb(43,2,0)] rounded-[50px] text-white font-bold">
                <MdShoppingBag />
                <p>£0.00</p>
                </button>
            </div>
            </div>

        </header>
        
    )
}