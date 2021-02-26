import React from 'react'
import weird2 from '../Assets/Group 43.png'
import Client_Reviews from './Client_Reviews.js'
import Why from './Why'
import Getintouch from './Getintouch'
import weird3 from '../Assets/Path 267 (1).png'

function Three() {
    return (
        <div style={{backgroundColor:'#FCFCFC'}}>
        <img src={weird2} alt="" style={{width:'130% ',height:'60%',marginLeft:'-15vw',marginTop:'30vw'}}/>
        <Client_Reviews />
          <Why />
         
          <Getintouch/>
          
          

        </div>
    )
}

export default Three
