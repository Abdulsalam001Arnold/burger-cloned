import { Link } from 'react-router-dom';
import logo from '../images/0cf1af0a0daab9d078b561f98d55a73aec3bcb61-1250x200.png'
import image from '../images/images.png'

export default function Navbarr() {
    return (
        <header className="flex items-center justify-between bg-[rgb(43,2,0)] w-full h-[80px] pt-8 pb-3 pr-7">
            <div>
                <Link href='./'><img src={logo} alt="" className='w-52 ml-4' /></Link>
                <p className="text-white ml-5">Welcome! You can earn points with every purchase and use them to redeem rewards.</p>
            </div>
            <button className='flex items-center text-white gap-3 bg-inherit border border-white px-4 py-1 rounded-[50px] font-bold mr-5 hover:bg-red-200  focus:border-red-400 mb-5 cursor-pointer'>
                <Link href='/'><img src={image} alt='' className='w-7 h-7 rounded-[50px] bg-white' /></Link>
                <p className='font-bold'>Learn More</p>
            </button>
        </header>
    )
}