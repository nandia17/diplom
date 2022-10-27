import React from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.jpg';
const Navbar = () => {
  return (
    <div className="bg-black flex justify-center w-full footere">
      <div className='w-3/4 flex   items-center footeree'>
               <div className="w-1/4 footer-logo">
                      <img src={logo} className="bg-black" alt="logo" />
              </div> 
      <nav className='item w-3/4 flex justify-end foot-nav items-center'>
             <ul className='ul flex justify-between foot-nava  w-3/4'>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/how_to">Жанр</Link>
                    </li>
                    <li>
                        <Link to="/news">Мэдээ</Link>
                    </li>
                    <li>
                        <Link to="/reviews">Reviews</Link>
                    </li>
                    <li>
                        <Link to="/contact">Холбоо барих</Link>
                    </li>
                    <li>
                        <Link to="/about">Бидний тухай</Link>
                    </li>
                    <li>
                        <Link to="/login">Нэвтрэх</Link>
                    </li>
                    <li>
                        <Link to="/signup">Бүртгүүлэх</Link>
                    </li>
             </ul>
      </nav> 
      </div>
      
    </div>
  )
}

export default Navbar;