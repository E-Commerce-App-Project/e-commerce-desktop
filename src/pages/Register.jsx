import React from 'react';
import Form from 'react-bootstrap/Form';
import Foo from '../components/Buttons';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Register() {
    return (
        <div className='container'>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name <span>*</span></Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email <span>*</span></Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label htmlFor="inputPassword5">Password <span>*</span></Form.Label>
                                <Form.Control
                                    type="password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    placeholder="Enter your password"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                                <Form.Label>Phone Number <span>*</span></Form.Label>
                                <Form.Control type="number" placeholder="Enter your Phone Number" />
                            </Form.Group>
                            <br />
                            <Form.Text className="text-muted">
                                <span>*</span> Required
                            </Form.Text>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicAddress">
                                <Form.Label>Address <span>*</span></Form.Label>
                                <Form.Control as="textarea"
                                    placeholder="Enter your address"
                                    style={{ height: '300px' }} />
                            </Form.Group>
                            <Foo />
                        </Form>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
}