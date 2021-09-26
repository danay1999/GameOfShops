import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Currency from '../../images/Currency.png';
import "./OrderCard.css";

export default function OrderCard(props) {
    return (
        <div>
            <Card style={{ width: '15rem' }}>
                <Card.Body>
                    <Card.Text>
                        <img src={props.image} className="shipping-avatar"/>
                        <p>{props.order}</p>
                        <img src={Currency} width="25px"/>
                        <p>{props.price}</p>
                    </Card.Text>
                    <Button className="buy-button" variant="outline-dark">Fullfill</Button>
                </Card.Body>
            </Card>  
        </div>
    );
}