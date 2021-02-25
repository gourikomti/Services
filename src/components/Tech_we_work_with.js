//COMPONENT OF CARDS SHOWING WHAT WE DO;

import React from 'react'
import {client} from './client.js';
import {T_cards} from  './T_cards.js'



class What_we_do extends React.Component{

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


        <div className="main" >
            <h2>What we do</h2>
            <div className="cards" style={{marginTop:'-32vw',marginLeft:'15vw',marginRight:'15vw'}}>
            <T_cards t_cards={this.state.technologies}/>

 
            </div>
         </div>
         


        );
}
}

export default What_we_do
