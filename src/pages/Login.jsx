import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className='bg-info overflow-auto' style={{ height: 100 + 'vh' }}>
        <div
            className='container bg-light ms-auto my-5 py-lg-3 px-lg-5'
            style={{ borderRadius: 1 + 'em' }}>
            <h1>
                LOGIN
            </h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Enter your password"
                    />
                </Form.Group>
                    <Button variant="primary">Log In</Button>
                <br />
                <Form.Text className="text-muted">
                        Do not have an account? Click Register
                </Form.Text>
            </Form>
            </div>        
        </div>
    );
}