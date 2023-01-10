import React from 'react';
import { Link } from 'react-router-dom';
import {Pronuser} from '../Data/data.js';
import {FaUser,FaBook,FaBookOpen,FaHeart} from "react-icons/fa";
// import ImageSlider from '../Slider/ImageSlider.js';
function Profile() {
return ( 
      <div className='gadna-con'>
            
            <div className='container'>
            
            <div className='rows'>
            <div className='pro-box1'>
            {Pronuser.map(function(el,ele){
                  return(      
                  <div className="profile">
                  <div className="pro-img">
                        <img key={ele}
                        src={el.proimg}/>
                        <p key={ele}>
                        {el.proname}</p>  
                        hjb          
                  </div>
                  <div  className="pro-plus">
                  <div className='pro-btn1'>
                    
                    <li>
              <Link to="/stories">Миний зохиолууд</Link>
          </li>
              </div>
              <div className='pro-btn2'>
              <li>
              <Link to="/home">Сайт</Link>
          </li>
              </div>
                       
                  </div> 
                  <div className='pro-menu'>
                        <div>
                        <ul>
                        <Link to="/dashboard/privacy"><FaUser/>Хувийн мэдээлэл</Link>
                              <Link to="/dashboard/new"><FaBook/>Шинэ зохиол нэмэх</Link>
                              <Link to="/dashboard/nemeh"><FaBookOpen/>Бүлэг нэмэх</Link>
                              

                        </ul>
                        </div>
                      
                        </div>                         
                  </div>
                  )
            })
            }
                  <div className='story-count'>
                <div className='sar'>
                    <h4>Сард + </h4>     
                </div>
                <div  className='unshlaga'>
                  <div className='unsh-box1'>
                        <h4>Уншсан</h4>
                        <p><FaBook/> 0</p>
                  </div>
                  <div className='unsh-box1'>
                        <h4>Нэмэгдсэн</h4>
                        <p><FaHeart/> 0</p>
                  </div>
                </div>
          </div>
            </div>
            <div className='con-pro'>
                  <div>
                       <div>
                       {Pronuser.map(function(el,ele){
                  return(      
                  <div className="profile">
                  <div className="pro-img2 ">
                        <img key={ele}
                        src={el.proimg}/>
                        <p key={ele}>
                        {el.proname}</p>            
                  </div>
                  <div class="user-medeell">
                           <p key={ele}>{el.proname}</p>     
                           <p key={ele}>{el.proname}</p>     
                  </div>
                                           
                  </div>
                  )
            })
            }
                      </div> 
                  </div>                    
                 
            </div>

            </div>
            </div>
            
      </div>
      );
}

export default Profile;
