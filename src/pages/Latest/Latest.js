import React from 'react';
import {ban2image} from '../Data/data.js'
function Banner2(props) {
      const latest = [
            {
                  latestTitle:'Dell Inspiron 16 Plus (7610) 4',
                  latestText:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
                  latestImage:'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=100%'
            },
            {
                  latestTitle:'Dell Inspiron 16 Plus (7610) 4',
                  latestText:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
                  latestImage:'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=100%'
            },
            {
                  latestTitle:'Dell Inspiron 16 Plus (7610) 4',
                  latestText:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
                  latestImage:'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=100%'
            },
            // {
            //       latestTitle:'Dell Inspiron 16 Plus (7610) 4',
            //       latestText:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
            //       latestImage:'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=100%'
            // },
            // {
            //       latestTitle:'Dell Inspiron 16 Plus (7610) 4',
            //       latestText:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
            //       latestImage:'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=100%'
            // },
            // {
            //       latestTitle:'Dell Inspiron 16 Plus (7610) 4',
            //       latestText:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
            //       latestImage:'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=100%'
            // },
      ]
      return ( 
            <div className='banner2'>
                
                  <div className='banner-2box'>
                  {ban2image.map(function(el,ele){
                        return(      
                        <div className="tttt">
                         <img key={ele}
                          src={el.image}/> 
                        </div>
                        )
                  })
                  }
                  </div>  
                  {/* <div className="banner2-text">
                        ffgdgggddgdfgdgdfhdfgd
                  </div> */}
                  <div class="faded-text1">
					<div class="f-text"><span>Адал явдлыг илэрхийл</span></div>
				</div>
            </div>
            
       );
}

export default Banner2;