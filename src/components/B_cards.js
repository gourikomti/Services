//CONTAINS ALL THE WHAT WE DO CARD INFORMATION THAT IT RECIEVES FROM CONTENTFUL;
import React from 'react'
import {B_card} from './B_card.js'


export const B_cards = ({b_cards}) => {
    console.log(b_cards)
    
    return (
        <div className="cards" style={{backgroundColor:'red'}}>
            {b_cards.map((article, index) => <B_card article={article} key={index}/>)}
            
        </div>
    )
}

