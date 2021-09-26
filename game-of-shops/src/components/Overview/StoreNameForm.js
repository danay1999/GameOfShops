import React from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'

export default function StoreNameForm() {

    const [ storeName, setStoreName ] = React.useState("");

    return (
        <div className="tab">
            <Modal.Dialog>
                <Modal.Header>
                    <h5>First things first, let's name your store!</h5>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Row className="align-items-center">
                            <Col >
                                <Form.Label htmlFor="inlineFormInputName">
                                    Store Name
                                </Form.Label>
                                <Form.Control id="inlineFormInputName" placeholder="Shoppify Store" />
                            </Col>
                            <Col xs="auto" className="my-1">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>

            </Modal.Dialog>
        </div>
    );
}