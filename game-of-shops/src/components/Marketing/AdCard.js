import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Currency from '../../images/Currency.png';
import "./AdCard.css";

export default function AdCard(props) {
    return (
        <div>
            <Card style={{width: '15rem'}} className="adcard">
                <Card.Body>
                    <Card.Text>
                        <img src={props.image} width="45px"/>
                        <p>{props.text}</p>
                        <img src={Currency} width="25px"/>
                        <p>{props.price}</p>
                    </Card.Text>
                    <Button className="buy-button" variant="outline-dark">Buy</Button>
                </Card.Body>
            </Card>  
        </div>
    );
}