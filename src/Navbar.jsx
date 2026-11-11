
import React from 'react'
import { SiJordan } from "react-icons/si";
import { Link } from 'react-router-dom';
import { SlArrowRight } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { IoBagRemoveOutline } from "react-icons/io5";

function Navbar() {
  return (
    <>
      <nav className='flex items-center justify-around text-black w-full font-bold h-10 bg-gray-100 gap-220'>
        <div className='flex'>
          <Link to="/Jordan1">
            <SiJordan size={25} />
          </Link>

          <Link to="/Right" className='ml-5'>
            <SlArrowRight size={20} />
          </Link>
        </div>

        <div>
          <Link to="https://www.nike.com/retail">
            <button className='cursor-pointer hover:text-gray-400'>Find a Store</button>
          </Link>

          <Link to="/Help">
            <button className='ml-8 cursor-pointer hover:text-gray-400'>Help</button>
          </Link>

          <Link to="/Join">
            <button className='ml-8 cursor-pointer hover:text-gray-500'>Join Us</button>
          </Link>

          <Link to="/Sign">
            <button className='ml-8 cursor-pointer hover:text-gray-400'>Sign In</button>
          </Link>
        </div>
      </nav>

      <div className='flex items-center font-bold'>
        <Link to="/">
          <img className='w-18' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbju7Y4kOaZ-lV4rnPpNArdBtS150gZTy-7YAPCitQzA&s=10"alt=""/>
        </Link>

        <Link to="/Men"><button className='ml-80 cursor-pointer'>Men</button></Link>
        <Link to="/Women"><button className='ml-10 cursor-pointer'>Women</button></Link>
        <Link to="/Kids"><button className='ml-10 cursor-pointer'>Kids</button></Link>
        <Link to="/Jordan"><button className='ml-10 cursor-pointer'>Jordan</button></Link>
        <Link to="/NikeSKIMS"><button className='ml-10 cursor-pointer'>NikeSKIMS</button></Link>
        <Link to="/Sportswear"><button className='ml-10 cursor-pointer'>Sportswear</button></Link>
        <Link to="/Gifts"><button className='ml-10 cursor-pointer'>Gifts</button></Link>

        <input className='border rounded-2xl ml-40 px-5' type="text" placeholder='Search'/>
        <button className='ml-5 text-3xl hover:bg-gray-200 w-10 h-10 items-center rounded-2xl'><FcLike className='ml-1'/></button>
        <button className='ml-3 text-3xl hover:bg-gray-200 rounded-2xl w-10 h-10'> <IoBagRemoveOutline className='ml-1'/></button>
      </div>
    </>
  )
}

export default Navbar
