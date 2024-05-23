import React from 'react'
import { BsTabletLandscape } from 'react-icons/bs'

function icons() {
  return 
    <div>
        <div>
            <div>
                <BsMicrosoft className="h-10 w-10"/>
                <a href="#">Choose your Microsoft 365</a>
            </div>
            <div>
                <BsTabletLandscape className="h-10 w-10"/>
                <a href="#">Find your next PC</a>
            </div>
            <div>
                <IoLogoXbox className="h-10 w-10"/>
                <a href="#">Shop for students</a>
            </div>
            <div>
                <BsShop className="h-10 w-10"/>
                <a href="#">Shop Business</a>
            </div>
        </div>

    </div>
  
}

export default icons