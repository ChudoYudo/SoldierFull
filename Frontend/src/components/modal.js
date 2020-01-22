import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SoldierForm from "./form";
import Label from "reactstrap/es/Label";


class ModalExample extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isOpen : false
        };
        // this.toggle = this.toggle.bind(this);

    }
    componentDidMount() {
        this.setState({isOpen:false})
    }

    toggle(){
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <div>
                <Button onClick={(e) => this.toggle(e)} >{this.props.buttonLabel}</Button>
               <Modal isOpen={this.state.isOpen}>
                   <ModalHeader >Modal title</ModalHeader>
                   <ModalBody>
                       <SoldierForm id={this.props.soldierId}/>
                   </ModalBody>
                   <ModalFooter>
                       <Button color="primary"onClick={(e) => this.toggle(e)}>Do Something</Button>{' '}
                       <Button color="secondary" onClick={(e) => this.toggle(e)}>Cancel</Button>
                   </ModalFooter>
               </Modal>

            </div>
        );
    }
}

export default ModalExample;