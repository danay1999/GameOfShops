import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab, Container, Col, Row }  from 'react-bootstrap';
import OverviewTab from './components/Overview/OverviewTab';
import InventoryTab from './components/Inventory/InventoryTab';
import MarketingTab from './components/Marketing/MarketingTab';
import ShippingTab from './components/Shipping/ShippingTab';
import CircleShopifyLogo from './images/circle_shopify_glyph_black.png';
import SaveGame from './images/Save_Game.png';
import DeleteIcon from './images/Recycle_bin.png';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={1} md={0.5} >
            <div className="leftmenu">
              <img src={CircleShopifyLogo} width='60px'></img>
              <img className="pixelated image" src={SaveGame} width='50px'></img>
            </div>
          </Col>

          <Col>
            <div>
              <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="overview" title="Overview">
                  <OverviewTab/>
                </Tab>
                <Tab eventKey="inventory" title="Inventory">
                  <InventoryTab/>
                </Tab>
                <Tab eventKey="marketing" title="Marketing">
                  <MarketingTab/>
                </Tab>
                <Tab eventKey="shipping" title="Shipping">
                  <ShippingTab/>
                </Tab>
              </Tabs>
            </div>
          </Col> 
          <Col xs={1} md={0.5} >
            <div className="rightmenu">
              <img className="pixelated image" src={DeleteIcon} width='50px'></img>
            </div>
          </Col>    
        </Row>
      </Container>

    </div>
  );
}

export default App;
