import React from 'react';
import { Card } from 'react-bootstrap';
import './styles.css';

interface CardsProps{
  title?: string;
  subtitle?: string;
  img ?: string;
  goToPage ?:string;
}

const Cards: React.FC<CardsProps> = (props) =>{

  function Goto(){
    window.location.href = `${props.goToPage}`;
  }

  return(
    <div className="CardElement" onClick={Goto}>
      <Card id="card-obj" style={{ width: '25rem', padding:'0.5rem', alignItems: 'center' }}>
        <Card.Img variant="top" src={props.img} style={{ width: '25rem', height:'25rem'}}/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle>{props.subtitle}</Card.Subtitle>
          {/* <Button style={{background:'#AE4C60', border:'none', alignItems: 'center'}} variant="primary">{props.title}</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;