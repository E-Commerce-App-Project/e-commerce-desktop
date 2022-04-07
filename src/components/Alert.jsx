import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'bootstrap';

function CancelOrder() {
        return (
            <Modal.Dialog>
                <Modal.Body>
                    <p>Cancel Order?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="warning">Yes</Button>
                    <Button variant="primary">No</Button>
                </Modal.Footer>
            </Modal.Dialog>
    );
}

function RemoveProduct() {
    return (
        <Modal.Dialog>
            <Modal.Body>
                <p>Remove Product?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="warning">Yes</Button>
                <Button variant="primary">No</Button>
            </Modal.Footer>
        </Modal.Dialog>
    );
}

function RemoveAccount() {
    return (
        <Modal.Dialog>
            <Modal.Body>
                <p>Are you sure to remove your account?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="warning">Yes</Button>
                <Button variant="primary">No</Button>
            </Modal.Footer>
        </Modal.Dialog>
    );
}

export { CancelOrder, RemoveProduct, RemoveAccount };