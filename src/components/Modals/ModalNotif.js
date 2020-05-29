import React from 'react';
import {

    Button,
    Modal
} from "reactstrap";
const ModalNotif = (props) => {

    console.log('Modal Notificaation');
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} animation={false}>

                <Modal.Body>{props.message}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default ModalNotif;