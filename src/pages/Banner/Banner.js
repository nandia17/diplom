import React from "react";
import {banimage} from '../Data/data.js'

function Banner(props) {
      return ( 
            <div className="tt">
                 <div className="banner-zurag">
                 {banimage.slice(0,1).map(function(el,ele){
                        return(      
                        <div className="iii">
                         <img key={ele}
                          src={el.image}/> 
                        </div>
                        )
                  })
                  }
                 </div>
                 <div className="banner-text"></div>
                 
            </div>
       );
}

export default Banner;