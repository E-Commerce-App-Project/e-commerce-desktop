import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';

export default function Register() {
    return (
        <Layout>
            <div
                className='container bg-light my-5 py-lg-3 px-lg-5'
                style={{ borderRadius: 1 + 'em' }}>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group
                                className='mb-3'
                                controlId='formBasicName'>
                                <Form.Label>
                                    Name <span>*</span>
                                </Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter your name'
                                />
                            </Form.Group>
                            <Form.Group
                                className='mb-3'
                                controlId='formBasicEmail'>
                                <Form.Label>
                                    Email <span>*</span>
                                </Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter your email'
                                />
                            </Form.Group>
                            <Form.Group
                                className='mb-3'
                                controlId='formBasicPassword'>
                                <Form.Label htmlFor='inputPassword5'>
                                    Password <span>*</span>
                                </Form.Label>
                                <Form.Control
                                    type='password'
                                    id='inputPassword5'
                                    aria-describedby='passwordHelpBlock'
                                    placeholder='Enter your password'
                                />
                            </Form.Group>
                            <Form.Group
                                className='mb-3'
                                controlId='formBasicPhoneNumber'>
                                <Form.Label>
                                    Phone Number <span>*</span>
                                </Form.Label>
                                <Form.Control
                                    type='number'
                                    placeholder='Enter your Phone Number'
                                />
                            </Form.Group>
                            <br />
                            <Form.Text className='text-muted'>
                                <span>*</span> Required
                            </Form.Text>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group
                                className='mb-3'
                                controlId='formBasicAddress'>
                                <Form.Label>
                                    Address <span>*</span>
                                </Form.Label>
                                <Form.Control
                                    as='textarea'
                                    placeholder='Enter your address'
                                    style={{ height: '300px' }}
                                />
                            </Form.Group>
                            <Button variant='primary'>Register</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Layout>
    );
}
