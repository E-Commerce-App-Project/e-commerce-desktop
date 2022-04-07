import React from 'react';
import { Component } from 'react';
import { Button } from 'react-bootstrap';

class Foo extends Component {
    handleClick() {
        console.log('Click happened');
    }
    render() {
        return <Button onClick={() => this.handleClick()}>Log In</Button>;
    }
}
export default Foo; 