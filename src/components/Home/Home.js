import React from 'react';
import Banner from '../../pages/Banner/Banner';
import AllBest from '../../pages/Best/AllBest';
// import Banner2 from '../../pages/Latest/Latest';
import New from '../../pages/NewComing/NewComing';
import Navbar from '../../components/header/Navbar';

import ImageSlider from '../../pages/Slider/ImageSlider';
import { SliderData } from '../../pages/Slider/SliderData';
import Footer from '../footer/footer';


function Hom() {
      return ( 
            <div>
                  <Navbar/>
              
            {/* <ImageSlider slides={SliderData}/> */}
            {/* <ImageSlider slides={SliderData}/> */}
               <Banner/> 
               <New new="Шинэ"/>
               <AllBest newTitle="Сүүлд нэмэгдсэн"/>
               {/* <Banner2/> */}
              <Footer/>
            </div>
       );
}

export default Hom;