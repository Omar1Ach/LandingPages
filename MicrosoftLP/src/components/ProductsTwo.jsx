import React from 'react'
import list from '../../list.json'
import img3 from '../img/img3.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

function ProductsTwo() {
  return (
    <div className='max-w-[1160px] mx-auto'>
        <h3 className='text-3xl mb-4'>For business</h3>
        <div className='flex flex-wrap justify-between'>
            {list.map((item, i) =>(
                <div className='w-[260px] space-y-3 ' key={i}>
                    <img src={img3} alt="" className='w-full h-40 object-cover'/>
                    <div>
                        <h2 className='bg-[#ffb900] w-fit p-[2px] px-3 font-bold mb-1'>New</h2>
                        <h2 className='text-3xl'>{item.textTwo}</h2>
                    </div>
                    <p>
                    Unlock your potential with Microsoft Office 365,
                     the ultimate productivity suite trusted by millions worldwide.
                      Streamline your workflow, collaborate effortlessly, and achieve more with integrated tools like Word,
                       Excel, PowerPoint, and Teams. Elevate your productivity to new heights.
                    </p>
                    <div className='flex items-center text-[#0067b8]'>
                        <a href="#" className='font-bold '>Shop now</a>
                        <MdOutlineKeyboardArrowRight className="h-10 w-10" />
                    </div>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default ProductsTwo