import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Hom from './components/Home/Home';
import Contact from './pages/Contact/Contact';

import Accordion from './pages/News/News';
import Appa from './login/loginpage';
import Logna from './pages/Newtreh/newtreh';
import Dashboard from './pages/Dashboard/Dashboard';
import Dashboard2 from './pages/Nemeh/Nemeh';
import Dashboard1 from './pages/Dashboard/Dashboard';
import Genre from './pages/Genre/Genre';
import MyStories from './pages/Mystories/stories';
import Profile from './pages/Profile/profile';


// export { Login } from "./login";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
   <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/home' element={<Hom/>}/>
      <Route path='/genre' element={<Genre/>}/>
      <Route path='/news' element={<Accordion/>}/>
      <Route path='/reviews' element={<Appa/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Logna/>}/>
      <Route path='/stories' element={<MyStories/>}/>
      <Route path='/dashboard/privacy' element={<Profile/>}/>
      
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/dashboard/nemeh' element={<Dashboard2/>}/>
      <Route path='/dashboard/new' element={<Dashboard1/>}/>
      {/* <Route path='/dashboard/privacy' element={<Dashboard2/>}/> */}
       {/* <Route path='/login' element={<Login/>}/>    */}
     
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