//COMPONENT OF CARDS SHOWING WHAT WE DO;

import React from 'react'
import {client} from './client.js';
import {B_cards} from  './B_cards.js';



class Blogs extends React.Component{

    state={
        arti:[]
    }
    componentDidMount(){
        client.getEntries({content_type:'Blogs'})
        .then((response) =>{
                console.log(response)
                this.setState({
                
                    arti: response.items
    
                })
            })
        }

    render () {
        return(


        <div className="main" style={{marginTop:'28vw'}} >
            <h2>Blogs</h2>
            <div className="cards" >
            <B_cards b_cards={this.state.arti}/>

            </div>
         </div>
         


        );
}
}

export default Blogs
