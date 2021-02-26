//COMPONENT OF CARDS SHOWING WHAT WE DO;

import React from 'react'
import {client} from './client.js';
import {Y_cards} from  './Y_cards.js'



class Why extends React.Component{

    state={
        technologies:[]
    }
    componentDidMount(){
        client.getEntries({content_type:'whyUs'})
        .then((response) =>{
                console.log(response)
                this.setState({
                
                    technologies: response.items
    
                })
            })
        }

    render () {
        return(
            <div className="mm" style={{alignItems:'center',height:'30vw',marginTop:'10vw'}} >
            <h2 style={{marginLeft:'49vw',fontSize:'2.2vw',fontWeight:'bolder',paddingTop:'2vw',paddingBottom:'2vw'}}>Why Us?</h2>
                
            <Y_cards y_cards={this.state.technologies}/>

 
         </div>
         


        );
}
}

export default Why
