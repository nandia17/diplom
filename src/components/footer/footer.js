import React from 'react';
import {FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa';
import Navbar from '../header/Navbar';

function Footer(props) {
      const ftext = [
            {
                  titlee:'Neko Novel',
                  texte:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta id neque et tincidunt. Proin lectus arcu, tempor vitae rutrum eu, mollis nec tortor. Ut commodo vestibulum massa, sed sollicitudin nisi convallis suscipit. Mauris ornare pretium dictum. ',
            }
      ]
      return ( 
            <div className='footer'>
               <div className='foot'>
                  {/* <div className="f1">
                        <a className="text-white" href="#">{props.f1}</a>
                        <a className="text-white" href="#">{props.f2}</a>
                        <a className="text-white" href="#">{props.f3}</a>
                        <a className="text-white" href="#">{props.f4}</a>
                        <a className="text-white" href="#">{props.f5}</a>
                        <a className="text-white" href="#">{props.f6}</a>
                  </div> */}
                  {/* <Navbar/> */}
                  <div className='f2'>
                  {ftext.map(function(fo,foo){
                              return(
                                    <div>
                                          <h2 key={foo}>{fo.titlee}</h2>
                                          <p key={foo}>{fo.texte}</p>

                                    </div>
                              )
                        })}
                  </div>
                        <div className='f3'>
                        <FaFacebook/><FaInstagram/><FaTwitter/>
                        </div>
               </div>
                
            </div>
       );
}

export default Footer;