import React from 'react'
import Card from "react-bootstrap/Card";


//article=response.items
const Y_card = ({article}) => {
    console.log(article)
    const {whyUsImg, whyTitle, whyDesc}=article.fields
    return (
           
            <div style={{height:'25vw',marginTop:'3vw',paddingBottom:'1vw'}}>
            <Card style={{backgroundColor:'transparent',marginBottom:'-10vw',marginTop:'-3vw',width:'26vw',border:'transparent'}}>
                <Card.Body>
                <img src={whyUsImg.fields.file.url} style={{height:'9vw',width:'vw',borderRadius:'8vw',marginLeft:'6vw',marginBottom:'-2vw'}}></img>
               <h3 style={{fontSize:'1.3vw',color:'#111987',textAlign:'center',paddingTop:'3vw'}}>{whyTitle}</h3>
               <h4 style={{fontSize:'1.3vw',opacity:'1',color:'#111987',textAlign:'center',paddingTop:'-2vw'}}>{whyDesc}</h4>

                </Card.Body>
               
           </Card>
           </div>
           
    )
}

export default Y_card
