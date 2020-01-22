import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";

class SoldierForm extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            kind: '',
            data: []
        };

    }

    componentDidMount(){
        console.log("kek");
        axios
            .get('http://127.0.0.1:7001/soldier/get/'+this.props.id)
            .then(({ data })=> {
                this.setState({
                    data: data
                });
            })
            .catch((err)=> {});
    }
   render (){
        return (
            <Form>
                <Row form>
                    <Col md={6}>

                        <FormGroup>
                            <Label>First name </Label>
                            <Input  name="fName" id="fName" defaultValue={this.state.data.first_name} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Last Name </Label>
                            <Input  name="lName" id="lName" defaultValue={this.state.data.last_name} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Third Name </Label>
                            <Input type={"tNAme"}  defaultValue={this.state.data.third_name} />
                        </FormGroup>
                        <FormGroup>
                            <Label>MilU </Label>
                            <Input  type={"milU"} name="milU" defaultValue={this.state.data.milU}  />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default SoldierForm;