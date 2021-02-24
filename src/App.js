import React from "react";
import './App.css';
import Navbar from './components/Navbar.js';
import Welcome from "./components/Welcome.js";
import What_we_do from './components/What_we_do.js';
import blue from "./Assets/Path 246.png";
function App() {
  return (
    <div className="App">
         <Navbar/>
         <Welcome/>
         <What_we_do/>
      </div>
      
    
  );
}

export default App;
