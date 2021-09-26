import React from 'react';
import Boy_Avatar from '../../images/Boy_Avatar.png';
import Girl_Avatar from '../../images/Girl_Avatar.png';
import OrderCard from './OrderCard';
import { Container, Col, Row } from 'react-bootstrap';
import './ShippingTab.css';

export default function ShippingTab() {

    return (
        <div className="tab">
            <Container>
                <Row>
                    <Col>
                        <OrderCard
                            name="order1"
                            image={Boy_Avatar}
                            order="20 beers"
                            price="35" 
                        />
                    </Col>
                    <Col>
                        <OrderCard
                            name="order2"
                            image={Girl_Avatar}
                            order="10 apples"
                            price="5"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}