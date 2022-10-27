import React from 'react';
import Banner from '../../pages/Banner/Banner';
import AllBest from '../../pages/Best/AllBest';
import Banner2 from '../../pages/Latest/Latest';
import New from '../../pages/NewComing/NewComing';
import Navbar from '../../components/header/Navbar';

import ImageSlider from '../../pages/Slider/ImageSlider';
import { SliderData } from '../../pages/Slider/SliderData';
import Footer from '../footer/footer';


function Hom() {
      return ( 
            <div>
                  <Navbar/>
              
            <ImageSlider slides={SliderData}/>
               <Banner/> 
               <New new="Шинэ"/>
               {/* <div className='fixed1'>
                  <img src='https://cdn-icons-png.flaticon.com/512/4787/4787175.png'/>   
               </div> 
               <div className='fixed2'>
                  <img src='https://cdn-icons-png.flaticon.com/512/4787/4787175.png'/>   
               </div> 
               <div className='fixed3'>
                  <img src='https://cdn-icons-png.flaticon.com/512/4787/4787175.png'/>   
               </div> 
               <div className='fixed4'>
                  <img src='https://cdn-icons-png.flaticon.com/512/4787/4787175.png'/>   
               </div>  */}
               <AllBest newTitle="Сүүлд нэмэгдсэн"/>
               <Banner2/>
              <Footer/>
            </div>
       );
}

export default Hom;