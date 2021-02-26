//CONTAINS ALL THE WHAT WE DO CARD INFORMATION THAT IT RECIEVES FROM CONTENTFUL;
import React from 'react'
import '../css/cards.css'
import T_card from './T_card.js'


export const T_cards = ({t_cards}) => {
    console.log(t_cards)
    
    return (
        <div className="cards" style={{marginLeft:'4vw',marginRight:'4vw',paddingLeft:'4vw',paddingRight:'2vw' ,display:'flex',marginTop:'2vw' ,alignItems:'center'}}>

            {t_cards.map((article, index) => <T_card article={article} key={index}/>)}
        </div>
    )
}

