import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout';

export default function InputNewAddress() {
    return (
        <Layout>
            <div
                className='container bg-light my-5 py-lg-3 px-lg-5'
                style={{ borderRadius: 1 + 'em' }}>
                    <h1>
                    Input New Address
                    </h1>
                        <Form>
                            <Form.Group
                                className='mb-3'
                                controlId='formBasicNewPhoneNumber'>
                                <Form.Label>
                                    New Phone Number <span>*</span>
                                </Form.Label>
                                <Form.Control
                                    type='number'
                                    placeholder='Enter your Phone Number'
                                />
                            </Form.Group>
                        </Form>
                        <Form>
                            <Form.Group
                                className='mb-3'
                                controlId='formBasicNewAddress'>
                                <Form.Label>
                                    New Address <span>*</span>
                                </Form.Label>
                                <Form.Control
                                    as='textarea'
                                    placeholder='Enter your address'
                                    style={{ height: '300px' }}
                                />
                            </Form.Group>
                            <Button variant='primary'>Input New Address</Button>
                        </Form>
            </div>
        </Layout>
    );
}
