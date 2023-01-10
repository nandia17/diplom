import React from 'react';
import { Link } from 'react-router-dom';
import {Pronuser} from '../Data/data.js';
import {FaUser,FaBook,FaBookOpen,FaHeart} from "react-icons/fa";
import ImageSlider from '../Slider/ImageSlider.js';
function Dashboard2() {
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
                  <div className='pro-banner'>
                   <img src="https://i.pinimg.com/736x/e8/de/89/e8de898f4a4e60def112d78c132c0102.jpg" alt='ff'/>
                  </div>   
                  <div className='pro-box2'>
                  <div className='create-box'>
                     
                  <div id='create2' className='create2'>
                              <h4>Шинэ зохиол нэмэх</h4>
                               <div className='sub'>
                                          <div className="pro-group">
                                          <label htmlFor="title">Гарчиг</label>
                                          <input type="text" htmlFor="title"/> 
                                          </div>
                                          <div className="pro-group">
                                          <label htmlFor="chapter">Жанр</label>     
                                          <select name="genre" id="genre">
                                          <option value="horror">Аймшиг</option>
                                          <option value="romance">Романтик</option>
                                          <option value="thriller">Триллер</option>
                                          <option value="fantasy">Уран зөгнөлт</option>
                                          </select>
                                          </div>
                                          <div className="pro-group">
                                          <label htmlFor="chaptertit">Бүлэг</label>
                                          <input type="text" htmlFor="chaptertit"/>      
                                          </div>   
                                          
                              </div> 
                              <div className='pro-group'>
                              <label for="img">Select image:</label>
  <input type="file" id="img" name="img" accept="image/*" />
  <div className="pro-group">
                                          <label htmlFor="chapter">Зохиол</label>
                                          <input type="text" htmlFor="chapter"/>      
                                          </div> 
                              </div>
                            
                              <div className="pro-group">
                              <label for="chapter">Зохиол</label>
                              <textarea id="chapter" name="chapter" rows="20" cols="90"></textarea>
                              </div> 
                              <button>Нэмэх</button>
                        </div>
                  </div>
      
            </div>
            </div>

            </div>
            </div>
            
      </div>
      );
}

export default Dashboard2;
