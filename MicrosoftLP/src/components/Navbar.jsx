import React from 'react'
import {BsSearch, BsCart2} from "react-icons/bs";
import {MdKeyboardArrowDown} from "react-icons/md";
import {BiUserCircle} from "react-icons/bi";
import '../index.css';

export default function Navbar() {
  return (
    <div className='h-16 w-full bg-white text-[12.6px] text-black flex items-center justify-around border-b border-gray-200'>
      <div className='flex border-x-green-400 w-[800px] items-center'>
        <h2 className='ml-6 mr-8 text-lg font-bold'>Microsoft</h2>
        <ul className='flex justify-between w-[540px]'>
            <li className="hover-underline ">Microsoft 365</li>
            <li className="hover-underline ">Teams</li>
            <li className="hover-underline ">Windows</li>
            <li className="hover-underline ">Surface</li>
            <li className="hover-underline ">Xbox</li>
            <li className="hover-underline ">Deals</li>
            <li className="hover-underline ">Small Business</li>
            <li className="hover-underline ">Support</li>
        </ul>
      </div>
      <div className='flex items-center w-[280px] justify-around'>
        <div className='flex items-center'>
            <h3 className="hover-underline">All Microsoft</h3>
            <MdKeyboardArrowDown className="h-5 w-5 cursor-pointer"/>
        </div>
        <BsSearch className="h-5 w-5 cursor-pointer"/>
        <BsCart2 className="h-5 w-5 cursor-pointer"/>
        <BiUserCircle className="h-5 w-5 cursor-pointer"/>
      </div>
    </div>
  );
}
