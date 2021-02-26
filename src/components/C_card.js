import React from 'react'

import Card from "react-bootstrap/Card";


//article=response.items
const C_card = ({article}) => {
    console.log(article)
    const {clientPicture,clientName,clientCompany,clientText,clientReview}=article.fields
    return (
            <Card style={{height:'29vw',width:'33vw',marginBottom:'4vw',borderRadius:'0.8vw',borderColor:'#ECC66A'}}> 
            <Card.Body >
            <div style={{display:'flex'}}>
            <div>
            <Card.Img variant="top" src={clientPicture.fields.file.url} style={{height:'10vw',width:'10vw',borderRadius:'0.8vw',marginLeft:'0.8vw',marginTop:'0.8vw',marginRight:'2vw'}}  />
            </div>
            <div className='ti_des' style={{alignItems:'center'}}>
            <p style={{fontSize:'1.1vw',fontWeight:'bolder',color:'#01097E'}}>
             {clientReview }
             </p>
            <Card.Title style={{fontSize:'1.1vw',opacity:'1',color:' #393939',textAlign:'center',paddingTop:'2vw'}} >{clientName}{clientCompany}</Card.Title>
            </div>
            </div>
            <Card.Text style={{fontSize:'1vw',opacity:'1',marginTop:'5vw'}}>
            {clientText}
            </Card.Text>
    
              </Card.Body>
          </Card>

    )
}

export default C_card
