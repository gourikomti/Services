import React from 'react'
import '../css/W_card.css'
import Card from "react-bootstrap/Card";


//article=response.items
const W_card = ({article}) => {
    console.log(article)
    const {descTech, imgTech, nameTech}=article.fields
    return (
            <Card style={{ width: '30vw',height:'16vw',marginLeft:'1vw',borderRadius:'0.8vw',marginBottom:'2vw',marginRight:'-5vw' }}>
            <Card.Body style={{display:'flex'}}>
            <Card.Img variant="top" src={imgTech.fields.file.url} style={{height:'7vw',width:'7.8vw',marginRight:'1vw',marginTop:'-0.5rem',borderRadius:'0.6vw'}} />
            <div className='ti_des' style={{height:'3vw'}}>
            <Card.Title style={{marginTop:'1vw',color: '#01097E',width:'12vw',fontSize:'1.6vw',height:'2vw'}}>{nameTech}</Card.Title>
            <Card.Text style={{fontSize:'0.8vw',color: '#6F6F6F',opacity: '1',height:'1.5vw',marginTop:'2vw'}}>
            {descTech}
            </Card.Text>
            </div>
    
              </Card.Body>
          </Card>
    )
}

export default W_card
