import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/header/Navbar';
function Genre() {
      return ( 
            <div className='genrebox'>
                  <Navbar/>
                  <div className='genree'>
                  <div className='genre1'>
                  <div><Link to="/dashboard/privacy">Romance</Link></div>
                  <div><Link to="/dashboard/privacy">Fiction</Link></div>
                  <div><Link to="/dashboard/privacy">Historical</Link></div>
                  <div><Link to="/dashboard/privacy">Action</Link></div>
                  <div><Link to="/dashboard/privacy">Fantasy</Link></div>
                  <div><Link to="/dashboard/privacy">Science Fiction</Link></div>
                  </div>
                  {/* <div className='genre2'>
                  <div><Link to="/dashboard/privacy">Action</Link></div>
                  <div><Link to="/dashboard/privacy">Fantasy</Link></div>
                  <div><Link to="/dashboard/privacy">Science Fiction</Link></div>
                  </div> */}
                  </div>
                  
                  
                  <Footer/>
            </div>
      );
}

export default Genre;