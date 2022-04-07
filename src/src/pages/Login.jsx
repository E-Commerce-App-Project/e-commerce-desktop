import React from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Foo from '../components/Buttons';

export default function Login() {
    return (
        <div id="outer" className=' container'>
            <div id="inner" className='container m-3'>
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
                <Foo/>
                <br />
                <Form.Text className="text-muted">
                        Don’t have an account? Click <Link to={'/Register'}>Register</Link>
                </Form.Text>
            </Form>
        </div>
        </div>
    );
}