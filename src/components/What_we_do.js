//COMPONENT OF CARDS SHOWING WHAT WE DO;

import React from 'react'
import '../css/What_we_do.css'
import weird from '../Assets/Group 42.png'
import {client} from './client.js';
import {W_cards} from  './W_cards.js';



class What_we_do extends React.Component{

    state={
        articles:[]
    }
    componentDidMount(){
        client.getEntries({content_type:'whatWeDo'})
        .then((response) =>{
                
                this.setState({
                
                    articles: response.items
    
                })
                


            })
            


    
    }

    render () {
        return(


        <div className="main" >
            <h2>What we do</h2>
            <img src={weird} alt="" style={{width:'28% ',marginLeft:'-4vw',marginTop:'-10vw'}}/>
            <div className="cards" style={{marginTop:'-30vw',marginLeft:'15vw',marginRight:'15vw'}}>
            <W_cards w_cards={this.state.articles}/>

 
            </div>
         </div>
         


        );
}
}

export default What_we_do
