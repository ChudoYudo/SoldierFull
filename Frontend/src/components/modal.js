import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SoldierForm from "./form";
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import green from "@material-ui/core/colors/green"

import Label from "reactstrap/es/Label";


class ModalExample extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isOpen : false
        };
        this.toggle = this.toggle.bind(this);

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
                <Button color={"primary"} onClick={(e) => this.toggle(e)} ><EditIcon/></Button>
               <Modal isOpen={this.state.isOpen}>
                   <ModalHeader >Modal title</ModalHeader>
                   <ModalBody>
                       <SoldierForm soldier={this.props.soldier}/>
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