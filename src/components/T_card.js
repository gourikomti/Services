import React from 'react'

import Card from "react-bootstrap/Card";


//article=response.items
const T_card = ({article}) => {
    console.log(article)
    const {imgWork,nameWork}=article.fields
    return (
            <Card style={{ width: '19vw',height:'19vw',marginLeft:'1vw',borderRadius:'0.8vw',marginBottom:'2vw',marginRight:'2vw',alignItems:'center'}}>
            <Card.Body style={{paddingTop:'3vw',paddingLeft:'5vw',paddingRight:'5vw'}}>
            <Card.Img variant="top" src={imgWork.fields.file.url} style={{height:'8.5vw',width:'9vw',margingLeft:'10vw',marginTop:'-0.5rem',borderRadius:'0.6vw', backgroundColor:'red'}} />
            <div className='ti_des' style={{alignItems:'center'}}>
            <Card.Title style={{marginTop:'1.5vw',color: '#01097E',fontSize:'1.4vw',textAlign:'center'}}>{nameWork}</Card.Title>
            
            </div>
    
              </Card.Body>
          </Card>

    )
}

export default T_card
