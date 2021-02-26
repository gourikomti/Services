import React from 'react'

import Card from "react-bootstrap/Card";


//article=response.items
export const B_card = ({article}) => {
    console.log(article)
    const {blogName,blogDesc}=article.fields
    
    return (
        <div>
            <Card style={{backgroundColor:'red'}}>
            <h1>{blogName}</h1> 
             <h1>{blogDesc}</h1>
            </Card>
            </div>
    );
    
}


