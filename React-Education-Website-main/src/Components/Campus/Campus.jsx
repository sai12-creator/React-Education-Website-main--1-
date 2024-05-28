

import React from 'react'
import './Campus.css'
import photo1 from '../../assets/photo1.jpeg'
import photo2 from '../../assets/photo2.jpeg'
import photo3 from '../../assets/photo3.jpeg'
import photo4 from '../../assets/photo4.jpeg'
import warrow from '../../assets/warrow.png'

const Campus = () => {
    return (
        <div className='campus container'>
            <div className="gallery">
                <img src={photo1} alt="" />
                <img src={photo2} alt="" />
                <img src={photo3} alt="" />
                <img src={photo4} alt="" />
            </div>

            <button className='btn dark-btn'>See More here <img src={warrow} alt="" /></button>
        </div>
    )
}

export default Campus
