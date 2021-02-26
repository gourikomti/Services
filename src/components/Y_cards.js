//CONTAINS ALL THE WHAT WE DO CARD INFORMATION THAT IT RECIEVES FROM CONTENTFUL;
import React from 'react'
import Y_card from './Y_card'


export const Y_cards = ({y_cards}) => {
    console.log(y_cards)
    
    return (
        <div className="cards" style={{columnCount:'3',marginLeft:'5vw',paddingLeft:'1.5vw',paddingRight:'1.5vw',marginTop:'1vw',height:'50vw'  }}>
            {y_cards.map((article, index) => <Y_card article={article} key={index}/>)}
        </div>
    )
}

