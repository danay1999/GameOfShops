import './OverviewTab.css';
import React from 'react';
import StoreNameForm from './StoreNameForm';
import InterestImage from '../../images/Stats.png';
import { Col, Container, Row } from 'react-bootstrap';

export default function OverviewTab() {

    return (
        <div className="tab">
            {/* <StoreNameForm/> */}
            <Container>
                <Row>
                    <Col>
                        <div className="categories">
                            Completed Orders:
                        </div>
                        <div className="categories">
                            Pending Orders:
                        </div>
                        <div className="categories">
                            <img src={InterestImage} className="imagecategories" width='25px'></img>
                            Product Interest:
                        </div>
                        <div className="categories">
                            Visitors per day
                        </div>
                    </Col>
                    <Col>1 of 1</Col>
                </Row>
            </Container>
        </div>
    );
}