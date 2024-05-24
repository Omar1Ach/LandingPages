import React from 'react'
import img3 from '../img/img3.jpg'

function Shop() {
  return (
    <div className='max-w-[1160px] mx-auto mb-20'>
        <div className='relative bg-gray-300 h-[540px] w-full'>
            <img src={img3} alt=""  className='w-full h-full ' />
            <div className='absolute top-16 left-16 space-y-5'>
                <h2 className='text-3xl font-bold'>Do more with Windows   </h2>
                <p>Shop tablets, laptops, all-in-ones, gaming PCs, and more</p>
                <button className='w-60 h-10 bg-[#0067b8] font-bold text-white text-md border-black border rounded'>Find your next PC</button>
            </div>
        </div>
    </div>
  )
}

export default Shop