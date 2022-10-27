import React from 'react';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/header/Navbar';

function LatestReviews() {
      const LatestReviews = [
            
            {
               newsTitle:'Title2',
               newsText:'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo ',
               newsImg:'https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
               newsTitle:'Title3',
               newsText:'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo  ',
               newsImg:'https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
               newsTitle:'Title4',
               newsText:'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo  ',
               newsImg:'https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
      ]

      return ( 
            <div>
                  <Navbar/>
                  <div className='new1'>
                        <div className='medium'>

                        </div>
                  <div className='new2'>
                      {LatestReviews.map(function(med,mede){
                  return(      
                  <div className="newss">
                  <div className="newss-img">
                   <img key={mede}
                    src={med.newsImg}/>            
                  </div>
                  <div  className="newss-text">
                      <a href='#' key={mede}>{med.newsTitle}</a>
                      <p key={mede}>{med.newsText}</p>
                     
                  </div>                          
                  </div>
                  )
            })
            }
                      </div>
                      <div className='side'>
                           {/* {NewsItem.map(function(m,me){
                              return(
                                    <div>

                                    </div>
                              )
                           })} */}
                      </div>
                  </div>
                    
                  <Footer/>
            </div>
       );
}

export default LatestReviews;