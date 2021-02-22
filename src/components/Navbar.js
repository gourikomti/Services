import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import "../css/Navbar.css";
import linkdin from '../Assets/linkdin-blue.svg';
import insta from '../Assets/insta-blue.svg';
import facebook from '../Assets/facebook-blue.svg';
import email from '../Assets/email-blue.svg';



function Navbar() {
    return (
        <div className="Navbar">
            <div className="com_logo">
             
             <h1>INPROSPECT</h1>
             </div>
             <div className="icons">
                 
                <img src={linkdin} alt="LINK" />
                <img src={facebook} alt="LINK" />
                <img src={insta} alt="LINK" />
                <img src={email} alt="LINK" />


             </div>
             
             
             </div>
    )
}

export default Navbar
