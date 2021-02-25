//CONTAINS ALL THE WHAT WE DO CARD INFORMATION THAT IT RECIEVES FROM CONTENTFUL;
import React from 'react'
import W_card from './W_card'
import '../css/cards.css'


export const W_cards = ({w_cards}) => {
    console.log(w_cards)
    
    return (
        <div className="cards">
            {w_cards.map((article, index) => <W_card article={article} key={index}/>)}
        </div>
    )
}

