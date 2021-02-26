//COMPONENT INCLUDING THE NAVBAR; 

import React from 'react';
import "../css/Navbar.css";
import linkdin from '../Assets/linkdin-blue.svg';
import insta from '../Assets/insta-blue.svg';
import facebook from '../Assets/facebook-blue.svg';
import email from '../Assets/email-blue.svg';
import logo from '../Assets/logo.jpg'
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import blue from "../Assets/Path 246.png";


function Navbar() {
    return (
        
        <nav className="navbar navbar-light ">
         
        <img src={blue} alt="BLUE GRADIENT" style={{width:'70% ',marginLeft:'-18px',marginTop:'-7px'}}/>
        
        <div className="container-fluid"  style={{top:'5%',position:'absolute'}}>
          <div className="navbar-brand " style={{width:'15%'}} >
            <img src={logo} alt="INPROSPECT" style={{width:'100%'}}/>
            
            </div>
          <div className="d-flex " style={{marginRight:'2.5vw'}} >
          <img src={linkdin} alt="LINK" style={{width:'2.5vw',paddingRight:'7%',marginLeft:'3vw'}} />
                <img src={facebook} alt="LINK" style={{width:'2.5vw',paddingRight:'7%'}} />
                <img src={insta} alt="LINK" style={{width:'2.5vw',paddingRight:'7%'}}/>
                <img src={email} alt="LINK" id="email" style={{width:'2.3vw',paddingRightt:'7%'}}/>

          </div>
        </div>
      </nav>
             
    )
}

export default Navbar
