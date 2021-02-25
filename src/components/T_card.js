import React from 'react'

import Card from "react-bootstrap/Card";


//article=response.items
const T_card = ({article}) => {
    console.log(article)
    const {imgWork,nameWork}=article.fields
    return (
            <h1>{nameWork}</h1>

    )
}

export default T_card
