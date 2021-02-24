import { Card } from '@material-ui/core'
import React from 'react'
import '../css/What_we_do.css'
import weird from '../Assets/Group 42.png'

function What_we_do() {
    return (
        <div className="main" >
            <h2>What we do</h2>
            <img src={weird} alt="" style={{width:'28% ',marginLeft:'-4vw',marginTop:'-10vw'}}/>

           
     
        </div>
    )
}

export default What_we_do
