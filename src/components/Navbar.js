import React from 'react';
import "../css/Navbar.css";
import linkdin from '../Assets/linkdin-blue.svg';
import insta from '../Assets/insta-blue.svg';
import facebook from '../Assets/facebook-blue.svg';
import email from '../Assets/email-blue.svg';
import logo from '../Assets/logo.jpg'



function Navbar() {
    return (
        <div className="Navbar">
            <div className="logo">
             
            <img src={logo} alt="INPROSPECT"/>
             
             
             </div>
             
             <div className="icons">
                 
                <img src={linkdin} alt="LINK" />
                <img src={facebook} alt="LINK" />
                <img src={insta} alt="LINK" />
                <img src={email} alt="LINK" id="email" />


             </div>
             
             
             </div>
    )
}

export default Navbar
