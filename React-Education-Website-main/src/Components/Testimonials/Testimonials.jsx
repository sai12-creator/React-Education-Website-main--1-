
import React, { useRef } from 'react'
import './Testimonials.css'
import next from '../../assets/next-bt.png'
import prev from '../../assets/prev-bt.png'
import user1 from '../../assets/user1.jpeg'
import user2 from '../../assets/user2.jpeg'
import user3 from '../../assets/user3.jpeg'
import user4 from '../../assets/user4.jpeg'

const Testimonials = () => {

    const slider = useRef();
    let tx=0;

    const handleForward = ()=>{
        if(tx > -50){
            tx -=25
        }
        slider.current.style.transform = `translate(${tx}%)`
    }
    const handleBackward = ()=>{
        if(tx < 0 ){
            tx +=25
        }
        slider.current.style.transform = `translate(${tx}%)`
    }
    
  return (
    <div className='testimonials container'>
      <img src={next} alt=""  className='next-btn' onClick={handleForward}/>
      <img src={prev} alt="" className='prev-btn' onClick={handleBackward}/>
      <div className="slider">
       <ul ref={slider}>
        <li>
            <div className="slide">
                <div className='user-info'>
                <img src={user1} alt="" />
                <div>
                    <h3>Grace Miller</h3>
                    <span>Edusity, USA</span>
                </div>
                </div>
                <p>Edusity's engaging courses and interactive learning platform made my educational journey enjoyable and effective, enhancing my skills and knowledge.</p>
            </div>
        </li>
        <li>
        <div className="slide">
                <div className='user-info'>
                <img src={user2} alt="" />
                <div>
                    <h3>Sophia Johnson</h3>
                    <span>Edusity, USA</span>
                </div>
                </div>
                <p>The personalized support and high-quality content on Edusity empowered me to excel in my studies, providing a rewarding and enriching learning experience.</p>
            </div>
        </li>
        <li>
        <div className="slide">
                <div className='user-info'>
                <img src={user3} alt="" />
                <div>
                    <h3>Ava Smith</h3>
                    <span>Edusity, USA</span>
                </div>
                </div>
                <p>Edusity's innovative approach to education fueled my curiosity, fostering a dynamic learning environment that inspired both personal and academic growth.</p>
            </div>
        </li>
        <li>
        <div className="slide">
                <div className='user-info'>
                <img src={user4} alt="" />
                <div>
                    <h3>Scarlett Thomas</h3>
                    <span>Edusity, USA</span>
                </div>
                </div>
                <p>The seamless integration of technology and education at Edusity not only simplified the learning process but also equipped me with valuable insights for real-world applications.</p>
            </div>
        </li>
       </ul>
      </div>
    </div>
  )
}

export default Testimonials
