import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../components/Layout';

export default function AddProduct() {
    return (
        <Layout>
        <div className='container'>
            <Container className='m-5'>
                <Row>
                    <Col xs={12} md={8}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicProductName">
                                <Form.Label>Product Name <span>*</span></Form.Label>
                                <Form.Control type="text" placeholder="Add your product name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicDescription">
                                <Form.Label>Description <span>*</span></Form.Label>
                                <Form.Control as="textarea" type="text" placeholder="Add your description" style={{ height: '150px' }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPrice">
                                <Form.Label>Price (Rp) <span>*</span></Form.Label>
                                <Form.Control type="number" placeholder="Add your Price" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicStock">
                                <Form.Label className="text-muted">
                                    Stock 
                                </Form.Label>
                                <input id="number" type="number" min="1" max="10" required placeholder=">1" />
                            </Form.Group>
                            <Button
                                variant='warning'
                                className=' text-uppercase fw-bold'
                                style={{ borderRadius: '0.5rem' }}>
                                Cancel
                            </Button>
                            <Button
                                variant='primary'
                                className=' text-uppercase fw-bold'
                                style={{ borderRadius: '0.5rem' }}>
                                Upload
                            </Button>      
                                                 
                        </Form>
                    </Col>
                    <Col xs={6} md={4}>
                        <Form>
                            <label for="file-input"> 
                                <input id="file-input" type="file"/>
                            </label>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
        </Layout>
    );
}