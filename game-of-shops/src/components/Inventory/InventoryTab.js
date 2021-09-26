import React from 'react';
import Apple from '../../images/Inventory/Apple.PNG';
import Beer from '../../images/Inventory/Beer.PNG'
import Bread1 from '../../images/Inventory/Bread1.PNG';
import Cake from '../../images/Inventory/Cake.PNG';
import Meat from '../../images/Inventory/Meat.PNG';
import Cheese from '../../images/Inventory/Cheese.PNG';
import Chicken from '../../images/Inventory/Chicken.PNG';
import Strawberry from '../../images/Inventory/Strawberry.PNG';
import { Container, Col, Row } from 'react-bootstrap';
import InventoryCard from './InventoryCard';
import './InventoryTab.css';

export default function InventoryTab() {

   const items={
     
   }

    return (
        <div className="tab">
          <Container>
                <Row>
                    <Col>
                      <InventoryCard
                        name= "Apple"
                        image= {Apple}
                        price="50"
                        quantity="150"
                        current_quantity="0"
                      />
                      <InventoryCard
                        name= "Beer"
                        image= {Beer}
                        price="150"
                        quantity="100"
                        current_quantity="0"
                        />
                    </Col>
                    <Col>
                      <InventoryCard
                        name= "Bread"
                        image= {Bread1}
                        price="50"
                        quantity="100"
                        current_quantity="0"
                      />
                      <InventoryCard
                        name= "Cake"
                        image= {Cake}
                        price="200"
                        quantity="20"
                        current_quantity="0"
                      />
                    </Col>
                    <Col>
                      <InventoryCard
                        name= "Meat"
                        image= {Meat}
                        price="500"
                        quantity="50"
                        current_quantity="0"
                      />
                      <InventoryCard
                        name= "Strawberry"
                        image= {Strawberry}
                        price="200"
                        quantity="800"
                        current_quantity="0"
                      />
                    </Col>
                    <Col>
                      <InventoryCard
                        name= "Cheese"
                        image= {Cheese}
                        price="250"
                        quantity="100"
                        current_quantity="0"
                      />
                      <InventoryCard
                        name= "Chicken"
                        image= {Chicken}
                        price="300"
                        quantity="100"
                        current_quantity="0"
                      />
                    </Col>
                </Row>
          </Container>
          
          
         
          

            {/* {Object.entries(items).map(([key, value]) => {
              return( 
                  <InventoryCard
                    name= "Apple"
                    image= {Apple}
                    price="50"
                    quantity="100"
                  />
              )
            })} */}
        </div>
    );
}