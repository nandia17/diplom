import React from 'react';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/header/Navbar';
import {FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa';
const Cont = [
      {
            conttitle:'Contact Us',
            contaddress:'Хануул дүүрэг, Амжилт академи',
            contday:'Mon-Fri:9:00am-8:00pm',
            contday1:'Sat-Sun:9:00am-10pm',
            contmail:'nana.nandia165@gmail.com',
      }
]

function Contact() {
      return ( 
            <div>
                  <Navbar/>
                      <div className='contact'>
                          <div className='cont1'>
                               {Cont.map(function(con,cont){
                                    return(
                                          <div className='c1'>
                                                <h1 key={cont}>{con.conttitle}</h1>
                                                <p key={cont}>{con.contaddress}</p>
                                                <p key={cont}>{con.contday}</p>
                                                <p key={cont}>{con.contday1}</p>
                                                <p key={cont}>{con.contmail}</p>
                                                <div className='flex iconss'>
                                                      <FaFacebook/>
                                                      <FaTwitter/>
                                                      <FaInstagram/>
                                                </div>
                                          </div>
                                    )
                               })}
                          </div>
                          <div className='cont2'>
                                    <form className='form'>
                                         {/* <label for="fname">First Name</label> */}
                                         <input type="text" id="fname" name="firstname" placeholder="Овог, нэрээ оруулна уу"/>

                                          {/* <label for="lname">Last Name</label> */}
                                          <input type="email" id="mail" name="email" placeholder="Имэйл хаягаа оруулна уу"/>
                                          <input type="text" id="message" name="message" placeholder="Захидал"/>

                                          
                                          
                                          <input type="submit" className='text-gray-500 text-start pl-4' value="Илгээх"/>
                                    </form>
                          </div>
                         
                      </div>
                      <div className='contact-map'>
                          <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1100&amp;height=100&amp;hl=en&amp;q=амжилт академи&amp;t=h&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                      </div>
                  <Footer/>
            </div>
       );
}

export default Contact;