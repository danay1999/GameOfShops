import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Currency from '../../images/Currency.png';
import "./InventoryCard.css";

export default function InventoryCard(props) {
    return (
        <div>
            <Card className="inv-card" style={{ width: '16rem', height: '160px' }}>
                <Card.Body>
                    <Card.Text>
                        <div className="inv-info">
                            <img className="inv-img" src={props.image}  height= '50px' width= '50px' />
                            <p className="inv-name">
                                {props.name}
                            </p>
                            <Row>
                                <Col><p className="inv-quantity">Quantity: {props.quantity}</p></Col>
                                <Col>
                                    <img className="inv-currency" src={Currency} width="25px"></img>
                                    <p className="inv-cost">{props.price}</p> 
                                </Col>
                            </Row>
                            <Row className="current-quantity-section">
                                <Col>
                                    <p className="inv-current-quantity">Current Quantity: {props.current_quantity} </p>    
                                </Col>
                                <Col>
                                    <Button className="buy-button" variant="outline-dark">Prepare</Button>
                                </Col>
                            </Row>
                                     
                            
                        </div>
                    </Card.Text>
                    
                </Card.Body>
            </Card>  
        </div>
    );
}