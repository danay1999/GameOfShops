import React from 'react';
import Facebook from '../../images/Marketing/Facebook.png';
import Google from '../../images/Marketing/Google.png';
import Instagram from '../../images/Marketing/Instagram.png';
import Newspaper from '../../images/Marketing/Newspaper.png';
import Radio from '../../images/Marketing/Radio.png';
import Television from '../../images/Marketing/Television.png';
import AdCard from './AdCard';
import { Container, Col, Row } from 'react-bootstrap';
import './MarketingTab.css';

export default function MarketingTab() {

    return (
        <div className="tab">
            <Container>
                <Row>
                    <Col>
                        <AdCard
                            name="Radio"
                            image={Radio}
                            text="Do a radio ad"
                            price="50" 
                        />
                    </Col>
                    <Col>
                        <AdCard
                            name="Newspaper"
                            image={Newspaper}
                            text="Do a newspaper ad"
                            price="50"
                        />
                    </Col>
                    <Col>
                        <AdCard
                            name="Television"
                            image={Television}
                            text="Do a television ad"
                            price="250"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AdCard
                            name="Google"
                            image={Google}
                            text="Do a Goole ad"
                            price="500"
                        />
                    </Col>
                    <Col>
                        <AdCard
                            name="Instagram"
                            image={Instagram}
                            text="Do an Instagram ad"
                            price="750"
                        />
                    </Col>
                    <Col>
                        <AdCard
                            name="Facebook"
                            image={Facebook}
                            text="Do a Facebook ad"
                            price="750"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}