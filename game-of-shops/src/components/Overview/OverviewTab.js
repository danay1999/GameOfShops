import './OverviewTab.css';
import React from 'react';
import StoreNameForm from './StoreNameForm';
import CompletedOrders from '../../images/Shopping_cart.png';
import PendingOrders from '../../images/Truck.png';
import InterestImage from '../../images/Stats.png';
import Views from '../../images/Eye_icon.png';

import { Col, Container, Row } from 'react-bootstrap';

export default function OverviewTab() {

    return (
        <div className="tab">
            {/* <StoreNameForm/> */}
            <Container>
                <Row>
                    <Col>
                        <div className="store-Info">
                            <div className="image-info">
                                <img src={CompletedOrders} width='25px'></img>
                            </div>
                            <div className="description-info">                    
                                Completed Orders:  
                            </div>
                            <div className="image-info">
                                <img src={InterestImage} width='25px'></img>
                            </div>
                            <div className="description-info">                    
                                Pending Orders:  
                            </div>
                            <div className="image-info">
                                <img src={PendingOrders} width='35px'></img>
                            </div>
                            <div className="description-info">                    
                                Product Interest:  
                            </div>
                            <div className="image-info">
                                <img src={Views} width='25px'></img>
                            </div>
                            <div className="description-info">                    
                            Visitors per day:   
                            </div>
                        </div>
                    </Col>
                    <Col>1 of 1</Col>
                </Row>
            </Container>
        </div>
    );
}