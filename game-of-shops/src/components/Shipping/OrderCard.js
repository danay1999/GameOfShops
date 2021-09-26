import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Currency from '../../images/Currency.png';
import "./OrderCard.css";

export default function OrderCard(props) {
    return (
        <div>
            <Card className="card" style={{ width: '15rem' }}>
                <Card.Body>
                    <Card.Text>
                        <div>
                            <img src={props.image} className="shipping-avatar"/>
                            <div>
                                <p className="order">{props.order}</p>
                            </div>
                            <div className="">
                                <img src={Currency} width="25px"></img>
                            </div>
                            <div className="">  
                                {props.price}                 
                            </div>
                        </div>
                    </Card.Text>
                    <Button className="buy-button" variant="outline-dark">Fullfill</Button>
                </Card.Body>
            </Card>  
        </div>
    );
}