import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './pages/About/about';
import Hom from './components/Home/Home';


import How from './pages/How/How';
import News from './pages/News/News';
import LatestReviews from './pages/LatestReviews/LatestReviews';
import Contact from './pages/Contact/Contact';
import Dell from './pages/Dell/Dell';


import Genre from './pages/How/How';
import Accordion from './pages/News/News';
import { Login } from './login';
import Appa from './login/loginpage';


// export { Login } from "./login";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
   <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/home' element={<Hom/>}/>
      <Route path='/how_to' element={<Genre/>}/>
      <Route path='/news' element={<Accordion/>}/>
      <Route path='/reviews' element={<Appa/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/dell' element={<Dell/>}/>
       <Route path='/login' element={<Login/>}/>   
     
   </Routes>
</Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
{/* <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div> */}