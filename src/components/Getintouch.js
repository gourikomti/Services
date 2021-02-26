import React from 'react'
import Card from "react-bootstrap/Card";


function Getintouch() {
    return (
        <div>
            <Card style={{height:'25vw',backgroundColor:'white',marginLeft:'10vw',marginRight:'10vw',marginTop:'30vw',alignSelf:'center',borderRadius:'2vw'}}>
            <Card.Body style={{marginLeft:'4vw'}} >
            
            <Card.Title id="contact" style={{marginLeft:'30vw',marginBottom:'5vw'}}>GET IN TOUCH </Card.Title>
            <form >
        <div style={{display:'flex',marginBottom:'2vw'}}>
        <input 
          type="text"
          placeholder="Name"
          border-right-style='hidden'
          style={{backgroundColor:'#FFFFFF66',marginRight:'2vw',width:"30vw",borderRight:'none',borderTop:'none'}}
        />
        <input
          type="text"
          placeholder="Phone Number"
          
          style={{backgroundColor:'#FFFFFF66',width:"30vw",borderRight:'none',borderTop:'none'}}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder='Email Id'
          
          style={{backgroundColor:'#FFFFFF66',borderRight:'none',borderTop:'none',marginBottom:'2vw',width:"62vw"}}
        />
       </div>
        <input
          type="text"
          placeholder='Message'
          border-right-style=' hidden'

          style={{backgroundColor:'#FFFFFF66',width:"62vw",borderRight:'none',borderTop:'none'}}
        />
      
      </form>
            
    
            </Card.Body>
          </Card>
        </div>
    )
}

export default Getintouch
