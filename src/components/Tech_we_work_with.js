//COMPONENT OF CARDS SHOWING WHAT WE DO;

import React from 'react'
import {client} from './client.js';
import {T_cards} from  './T_cards.js'



class Tech_we_work_with extends React.Component{

    state={
        technologies:[]
    }
    componentDidMount(){
        client.getEntries({content_type:'techWeWorkWith'})
        .then((response) =>{
                
                this.setState({
                
                    technologies: response.items
    
                })
            })
        }

    render () {
        return(
            <div className="mm" style={{backgroundColor:'#F0F0F8',alignItems:'center',height:'30vw',marginTop:'25vw'}} >
            <h2 style={{marginLeft:'39vw',fontSize:'2vw',fontWeight:'bolder',paddingTop:'2vw',paddingBottom:'2vw'}}>Technologies we work with </h2>
                
            <T_cards t_cards={this.state.technologies}/>
            
 
         </div>
         


        );
}
}

export default Tech_we_work_with
