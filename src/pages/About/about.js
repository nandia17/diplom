import React from 'react';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/header/Navbar';

const AboutText = [
      {
            abouttitle:'Бидний тухай',
            abouttext:'We are working hard to give you the best experience',
            
      }
             
]
const AboutAll = [
      {     
            whattitle:'Бид юу хийдэг вэ?',
            whattext:'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras',
      },
      {
            whattitle:'Бид яагаад хийдэг вэ?',
            whattext:'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras',

      },
      {
            whattitle:'Privacy Policy',
            whattext:'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras',

      },
      {
            whattitle:'Бидний тухай',
            whattext:'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras',

      },
      {
            whattitle:'Ажилчидтай танилцах',
            whattext:'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras',

      },
      {
            whattitle:'Бидэнтэй холбогдох',
            whattext:'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras',

      },
]
function About() {
      return ( 
            <div>
              <Navbar/>
              {/* <Hom/> */}
               <div className='aboutbanner'>
                     {AboutText.map(function(ab,abo){
                        return(
                              <div className='abouttext'>
                                    <h2 key={abo}>{ab.abouttitle}</h2>
                                    
                                    <p key={abo}>{ab.abouttext}</p>
                                    <div className='abo'></div>
                                   
                                    
                              </div>
                        )
                     })}
                  
               </div>
               <div className='ab'>
                    <div className='aa'>
                    {AboutAll.map(function(abo,abou){
                        return(
                              <div className='abou'>
                                    <h2 key={abou}>{abo.whattitle}</h2>
                                    <div className='abot'></div>
                                    <p className='abouttext1' key={abou}>{abo.whattext}</p>
                                    
                                    
                              </div>
                        )
                     })}
                    </div>
                    
                  
               </div>
               <Navbar/>
            </div>
       );
}

export default About;