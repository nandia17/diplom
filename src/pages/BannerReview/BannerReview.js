import React from 'react';
 
function Bannerrev() {
      const bannerimg1 = [
            {
                  image:'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=100%'
            },
      ];
      const bannerimg2 = [
            {  
                  title:'REVIEWS BY BRAND',
                  image:'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
      ]
      return ( 
            <div  className="bannerrev">
            <div className='banner'>
            {bannerimg1.map(function(ba,baa){
                  return(      
                  <div className="ban1">hghghfh
                  <div className="banner-img1">
                   <img key={baa}
                    src={ba.image}/>            
                  </div>
                
                  </div>
                  )
            })
            }
         </div>
            <div className='banner'>
            {bannerimg2.map(function(ba,baa){
                  return(      
                  <div className="ban2">
                  <div className="banner-img2">
                   <img key={baa}
                    src={ba.image}/>            
                  </div>
                  <div  className="banner-text">
                      <a href='#' className='bannertitle' key={baa}>{ba.title}</a>
                     
                  </div>                          
                  </div>
                  )
            })
            }
         </div>
          
      </div>
       );
}

export default Bannerrev;