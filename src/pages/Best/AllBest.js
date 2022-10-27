
import React from 'react';
import {Alldata} from '../Data/data.js'

function AllBest(props) {
      // const laptop = [
      //  {
      //       title:'Dell Inspiron 16 Plus (7610) 4',
      //       text:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      //       image:'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=100%'
      // },
      // {
      //       title:'Dell Inspiron 16 Plus (7610) 4',
      //       text:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      //       image:'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=100%'
      // },
      // {
      //       title:'Dell Inspiron 16 Plus (7610) 4',
      //       text:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      //       image:'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=100%'
      // },
      // {
      //       title:'Dell Inspiron 16 Plus (7610) 4',
      //       text:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      //       image:'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=100%'
      // },
      // ]
      return ( 
            <div  className="allbest">
                   <h1  className="banner-title">{props.newTitle}</h1> 
                  <div className='best2'>
                  {Alldata.slice(0, 4).map(function(el,ele){
                        return(      
                        <div className="best">
                        <div className="best-img">
                         <img key={ele}
                          src={el.image}/>            
                        </div>
                        <div  className="best-text">
                              <div>
                              <a href='#' key={ele}>{el.title}</a>
                            <p key={ele}>Зохиолч: {el.author}</p>
                              </div>
                            
                            <p key={ele} className="tailbar">{el.description}</p>
                             <button>Дэлгэрэнгүй</button>
                        </div>                          
                        </div>
                        )
                  })
                  }
               </div>
                <div className='container newupdate'>
                  <div className='row'>
                {Alldata.slice(5, 17).map(function(el,ele){
                        return(      
                        <div className="col-md-2 col-xs-4 besta">
                              <div>
                        <div className="best-imga effect-image-1">
                            <div className='overlay simple-overlay-3'>
                          <a href="#">    <img src='https://cdn-icons-png.flaticon.com/512/4225/4225935.png'/> </a>
                            </div>
                         <img key={ele}
                          src={el.image}/>            
                        </div>
                        <div  className="best-texta">
                              <div>
                              <a href='#' key={ele}>{el.title}</a>
                            <p key={ele}>{el.genre}</p>
                              </div>
                            

                             
                        </div>   
                        </div>                       
                        </div>
                        )
                  })
                  }
                  </div>
                </div>


            </div>
       );
}

export default AllBest;


// render() {
//       const data =[{"name":"test1"},{"name":"test2"}];
//       return (
//         <div>
//         {data.map(function(d, idx){
//            return (<li key={idx}>{d.name}</li>)
//          })}
//         </div>
//       );
//     }