//CONTAINS ALL THE WHAT WE DO CARD INFORMATION THAT IT RECIEVES FROM CONTENTFUL;
import React from 'react'
import '../css/cards.css'
import T_card from './T_card.js'


export const T_cards = ({t_cards}) => {
    console.log(t_cards)
    
    return (
        <div className="cards" style={{columnCount:'2',marginLeft:'2vw',paddingLeft:'1.5vw',paddingRight:'1.5vw'  }}>
            {t_cards.map((article, index) => <T_card article={article} key={index}/>)}
        </div>
    )
}

