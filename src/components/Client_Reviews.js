//COMPONENT OF CARDS SHOWING WHAT WE DO;

import React from 'react'
import {client} from './client.js';
import {C_cards} from  './C_cards.js'



class Client_Reviews extends React.Component{

    state={
        reviews:[]
    }
    componentDidMount(){
        client.getEntries({content_type:'clientReviews'})
        .then((response) =>{
                
                this.setState({
                
                    reviews: response.items
    
                })
            })
        }

    render () {
        return(
            <div >
            <h2 style={{marginTop:'-255vw',marginLeft:'45vw',fontSize:'2vw',fontWeight:'bolder'}}>Client Reviews</h2>
                
            <C_cards c_cards={this.state.reviews}/>
            
 
         </div>
         


        );
}
}

export default Client_Reviews
