import React from 'react'
import { BsFacebook, BsTwitterX, BsLinkedin } from 'react-icons/bs'

function Socials() {
  return (
    <div className='h-60 max-w-[1160px] flex items-center m-auto'>
        <div className='flex justify-between w-72'>
            <h2 className='text-md'>Follow Microsoft</h2>
            <BsFacebook className='h-6 w-6'/>
            <BsTwitterX className='h-6 w-6'/>
            <BsLinkedin className='h-6 w-6'/>
            
        </div>
    </div>
  )
}

export default Socials