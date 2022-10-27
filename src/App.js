
import './App.css';
import Navbar from './components/header/Navbar';
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        
     <Navbar />
 
      <Home/>
      
    </div>
  );
}

export default App;
