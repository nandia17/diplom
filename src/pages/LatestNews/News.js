import React from 'react';
import {FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa';


function News2() {
      const news = [
            {
                 title:'Dell Inspiron 16 Plus (7610) 4',
                 text:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
                 image:'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=100%'
           },
           {
                 title:'Dell Inspiron 16 Plus (7610) 4',
                 text:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
                 image:'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=100%'
           },
           {
                 title:'Dell Inspiron 16 Plus (7610) 4',
                 text:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
                 image:'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=100%'
           },
        
           ]


      return ( 
            <div  className="allnews">
                  <div className='text-center flex justify-center w-full h-14 text-5xl text-white'>Latest Laptop News</div>
            <div className='news'>
            {news.map(function(medee,medeee){
                  return(      
                  <div className="news1">
                  <div className="news-img">
                   <img key={medeee}
                    src={medee.image}/>            
                  </div>
                  <div  className="news-text">
                      <a href='#' key={medeee}>{medee.title}</a>
                      <p key={medeee}>{medee.text}</p>
                      <div className='icons'>
                        <FaFacebook/><FaInstagram/><FaTwitter/>
                      </div>
                  </div>                          
                  </div>
                  )
            })
            }
         </div>
          
      </div>
       );
}

export default News2;