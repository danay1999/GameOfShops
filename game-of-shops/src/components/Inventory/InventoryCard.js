import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Currency from '../../images/Currency.png';
import "./InventoryCard.css";

export default function InventoryCard(props) {
    return (
        <div>
            <Card className="inv-card" style={{ width: '10rem', height: '140px' }}>
                <Card.Body>
                    <Card.Text>
                        <div>
                            <img src={props.image}  height= '50px' width= '50px' />
                            <p className="inv-name">{props.name}</p>
                            <p className="inv-quantity">Current Quantity: {props.current_quantity}</p>
                            <p className="inv-quantity">Quantity: {props.quantity}</p>
                            <img src={Currency} width="25px"></img>
                            <p>{props.price}</p>              
                        </div>
                    </Card.Text>
                    <Button className="buy-button" variant="outline-dark">Prepare</Button>
                </Card.Body>
            </Card>  
        </div>
    );
}