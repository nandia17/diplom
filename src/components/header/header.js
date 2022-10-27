import React from "react";
import logo from './logo.jpg';
// import { Link } from 'react-router-dom';
function Header(props) {
      return ( 
            <div className="bg-black flex justify-between w-3/4">
                 <div className="w-1/4">
                 <img src={logo} className="bg-black" alt="logo" />
                  </div> 
                  <div className="flex justify-evenly items-center bg-[black] w-3/4">
                  <a className="text-white" href="#">{props.item1}</a>
                  <a className="text-white" href="#">{props.item2}</a>
                  <a className="text-white" href="#">{props.item3}</a>
                  <a className="text-white" href="#">{props.item4}</a>
                  <a className="text-white" href="#">{props.item5}</a>
                  <a className="text-white" href="#">{props.item6}</a>
                  <li><link to="./About">About us</link></li>
                  </div>
                  
            </div>
       );
}

export default Header;