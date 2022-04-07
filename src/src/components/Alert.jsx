import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'bootstrap';

function Example() {
        return (
            <Modal.Dialog>
                <Modal.Body>
                    <p>Cancel Order?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Yes</Button>
                    <Button variant="primary">No</Button>
                </Modal.Footer>
            </Modal.Dialog>
    );
}

export default Example;