
import React from 'react'
import './Program.css'
import program_1 from '../../assets/program1.png'
import program_2 from '../../assets/program2.png'
import program_3 from '../../assets/program3.png'
import programIconHover1 from '../../assets/program1_hover.png'
import programIconHover2 from '../../assets/program2_hover.png'
import programIconHover3 from '../../assets/program3_hover.png'

const Program = () => {
  return (
    
    <div className='programs container' >

      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={programIconHover1} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>

      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={programIconHover2} alt="" />
            <p>Master's Degree</p>
        </div>
      </div>

      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            <img src={programIconHover3} alt="" />
            <p>Post Graduation</p>
        </div>
      </div>

    </div>
  )
}

export default Program
