import React from 'react';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/header/Navbar';

const dell = [
      {
            delltitle:'DELL',
            dellimg1:'https://cdn-icons-png.flaticon.com/512/6604/6604292.png',
            dellimg2:'https://images.pexels.com/photos/1266982/pexels-photo-1266982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            delltext:'​Барилга, архитектурын хамаарал нь барилга, байгууламжийг төлөвлөн, зураг төслийг боловсруулах зэргийг гүйцэтгэхдээ орон зайн хувьд байгаль орчин, нийгэм, техник болон, гоо зүйн хувьд нь тэдгээрийн хэвийн нөхцлийг хангахад зөв байхаар сайтар бодож, төлөвлөх юм. He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover.',
      }
]
function Dell() {
      return (  
            
            <div>
                  <Navbar/>
                 <div className='dellcont'>
                  <div className='dell'>
                    {dell.map(function(dell,delle){
                        return(
                              <div className='dellbox'>
                                    <div className='dellimg'>
                                    <img className='dellimg1' key={delle}
                          src={dell.dellimg1}/>
                                    <img className='dellimg2' key={delle}
                          src={dell.dellimg2}/>
                                    </div>
                                    <div className='delltext'>
                                           <h1 key={delle}>{dell.delltitle}</h1>
                                           <div className='dellborder'></div>
                                           <p key={delle}>{dell.delltext}</p>
                                    </div>
                              </div>
                        )
                    })}
                    </div>
                 </div>
                 <Footer/>
            </div>
      );
}

export default Dell;