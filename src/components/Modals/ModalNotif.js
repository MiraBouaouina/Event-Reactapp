import React from 'react';
import {

    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "reactstrap";
const ModalNotif = (props) => {

    return (
        <Modal isOpen={props.show} toggle={props.handleClose} animation={false} >
            <ModalHeader>This is a message</ModalHeader>
            <ModalBody> {props.message} </ModalBody>
            <ModalFooter>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </ModalFooter>
        </Modal >

    )
}
export default ModalNotif;