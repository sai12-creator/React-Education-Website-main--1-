
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'

import logo from '../../assets/logo.png'
import menuIcon from '../../assets/menu.png'

const Navbar = () => {

  const[sticky , setSticky] = useState(false)

  useEffect(()=>{    //^first time when about render the check if user scroll screen more than 50% if yes then sticky true 
  // console.log("About component");
   window.addEventListener('scroll' , ()=>{
    window.scrollY > 50 ? setSticky(true) : setSticky(false)
   }) 
  } ,[])

  const [menu , setMenu] = useState(false);

  const handleClick = () =>{
      menu ? setMenu(false) : setMenu(true)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ""}`}>
       <img src={logo} alt=""  className='logo'/> 
       <ul className={menu ? "" : 'hide-menu'}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link> </li>
        <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-160} duration={500}>About us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimoniols</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
       </ul>
       <img src={menuIcon} alt="" className='menu-icon' onClick={handleClick}/>
    </nav>
  )
}

export default Navbar
