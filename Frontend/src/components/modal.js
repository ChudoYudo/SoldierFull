import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ExampleForm from "./form";

const ModalExample = (props) => {
    const {
        buttonLabel,
        className,
        soldierId
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const toggle2=()=>console.log("kek");

    console.log(props.soldierId);

    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                <ExampleForm/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle2}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;