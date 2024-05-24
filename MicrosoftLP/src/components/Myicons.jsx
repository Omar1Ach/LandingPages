import React from 'react';
import { BsMicrosoft, BsTabletLandscape, BsShop } from 'react-icons/bs';
import { IoLogoXbox } from 'react-icons/io';

export default function Myicons() {
  return (
    <div className='h-60 flex justify-center items-center
    '>
      <div className='flex gap-10'>
        <div className='flex flex-col items-center gap-2'>
          <BsMicrosoft className="h-10 w-10" />
          <a href="#">Choose your Microsoft 365</a>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <BsTabletLandscape className="h-10 w-10" />
          <a href="#">Find your next PC</a>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <IoLogoXbox className="h-10 w-10" />
          <a href="#">Shop for students</a>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <BsShop className="h-10 w-10" />
          <a href="#">Shop Business</a>
        </div>
      </div>
    </div>
  );
}
