import React,{useState} from 'react';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/header/Navbar';
import { Alldata, chapters } from '../Data/data';
import {Fiminus, Fiplus} from 'react-icons/fi';
import styled from 'styled-components';

const AccordionSection = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
// position:relative;
// height:100vh;
background:#ffffff;
`;
const Container = styled.div`
width:100%;
// position:absolute;
// top:30%;
// box-shadow:2px 10px 35px 1px rgba(153,153,153,0.3);
`;
const Wrap = styled.div`
// background:#272727;
color:#fff;
display:flex;
// justify-content:space-between;
align-items:center;
width:100%;
text-align:center;
cursor:pointer;
border-bottom: 1px solid #ececec;

h1 {
      color:black;
      padding:3px;
      font-size:15px;
}

`;

const Dropdown = styled.div`
// background:#1c1c1c;
// color:#00ffb9;
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
// border-bottom:1px solid #00ffb9;
border-top:1px solid #00ffb9;

p {
      font-size:15px;
}
`;
// Demo styles, see 'Styles' section below for some notes on use.
// import 'react-accessible-accordion/dist/fancy-example.css';
const Accordion = () => {
const [clicked,setClicked] = useState(false)

const toggle = ele => {
      if(clicked === ele) {

            return setClicked(null)
      }
      setClicked(ele)
}

   return ( 
            <div>
                  <Navbar/>
                 <div className='container'>
                       
                       {Alldata.slice(0,1).map(function(el,ele){
                        return(      
                       
                        <div className='rowa'>
                             <div className='single-img'>
                             <img key={ele}
                                    src={el.image}/>  
                           </div>
                             <div className='single-text'>
                             <div>
                                <h4 key={ele}>{el.title}</h4>
                                <div className='genre'> 
                                    <p key={ele}>{el.genre}</p>
                                </div>
                                <p className='author' key={ele}>Зохиолч: {el.author}</p>
                                <p className='desc' key={ele}>{el.description}</p>
                             </div>
                              <button>Номын санд хадгалах</button>
                           </div>
                        </div>
                        
                       
                        )
                  })
                  },
                        <div className='chapter'>
                        
  <div class="accordion">
  <AccordionSection>
      <Container>
  {chapters.map(function(el,ele){
                        return(      
                       
     
<div>
      <Wrap onClick={() => toggle(ele)} key={ele}>
    <h1 key={ele}>{el.chapter1}</h1>
    {/* <span>{clicked === index ? <Fiminus/> : <Fiplus/>}</span> */}
    </Wrap>
    {clicked === ele ? (
 <Dropdown>
 <p key={ele}>{el.chapter}</p>
 </Dropdown>
    ):null}
   
</div>
      
  
    
   
    )
})
},
</Container>
</AccordionSection>

  
  </div>


                        </div>
                    
                  </div>
                    
                  <Footer/>
            </div>
       );
}

export default Accordion;