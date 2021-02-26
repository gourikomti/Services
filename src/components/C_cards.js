//CONTAINS ALL THE WHAT WE DO CARD INFORMATION THAT IT RECIEVES FROM CONTENTFUL;
import React from 'react'
import '../css/cards.css'
import C_card from './C_card.js'


export const C_cards = ({c_cards}) => {
    console.log(c_cards)
    
    return (
        <div className="cards" style={{columnCount:'2',marginLeft:'3vw',marginRight:'2vw',paddingLeft:'13vw',paddingRight:'2vw' ,marginTop:'2vw' ,alignItems:'center'}}>

            {c_cards.map((article, index) => <C_card article={article} key={index}/>)}
        </div>
    )
}

