import React from 'react'
import '../css/W_card.css'
//article=response.items
const W_card = ({article}) => {
    console.log(article)
    const {descTech, imgTech, nameTech}=article.fields
    return (
        <div className="card" style={{backgroundColor:'greenyellow'}}>
            <section> {nameTech}</section>
            {imgTech && <img className="techcard" src={imgTech.fields.file.url} alt={nameTech}/>}
            <section>{descTech}</section>
        </div>
    )
}

export default W_card
