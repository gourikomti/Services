import React from "react";
import './App.css';
import Navbar from './components/Navbar.js';
import Welcome from "./components/Welcome.js";
import What_we_do from './components/What_we_do.js';

function App() {
  return (
    <div className="App">
      <div className="top" >
        <Navbar />
        
        <Welcome />
      </div>
    </div>
  );
}

export default App;
