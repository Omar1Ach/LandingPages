import React from 'react'
import img1 from '../img/img1.jpg'

function Main() {
  return (
    <div className='w-full h-[540px] bg-gray-100 flex justify-between items-center'>
        <div className='h-full'>
            <img src={img1} alt='' className='h-full object-contain' />
        </div>
        <div className='h-60 flex flex-col gap-3 pr-20'>
            <h2 className='text-3xl'>Microsoft Clone</h2>
            <p className='w-[400px]'>
            Lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and 
             scrambled it to make a type specimen book.
              It has survived not only five centuries, 
              but also the leap into electronic typesetting,
               remaining essentially unchanged.
                
            </p>
            <button className='w-60 h-10 bg-[#0067b8] font-bold text-white text-md border-black border rounded-sm'>Shop devices</button>
        </div>
    </div>
  )
}

export default Main