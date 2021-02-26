import React from "react";
import './App.css';
import Navbar from './components/Navbar.js';
import Welcome from "./components/Welcome.js";
import What_we_do from './components/What_we_do.js';
import Tech_we_work_with from './components/Tech_we_work_with'
import blue from "./Assets/Path 246.png";
import Three from './components/Three'
import Why from'./components/Why'
function App() {
  return (
    <div className="App">
         <Navbar/>
         <Welcome/>
         <What_we_do/>
         <Tech_we_work_with/>
         <div className='bigdiv'>
           <Three />
            
         </div>
      </div>
      
      
    
  );
}

export default App;
