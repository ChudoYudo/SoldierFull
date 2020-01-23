import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";

class SoldierForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            kind: '',
            data: [],
            third:0
        };
        this.submit=this.submit.bind(this);
        this.change=this.change.bind(this);
    }

    submit(event){
        let res = axios.post('http://127.0.0.1:7001/soldier/change', {fn:'asdasdasdasdasd'});

        event.preventDefault();
    }
    change(event){
        this.setState({third:event.target.value})
    }
   render (){
        return (
            <Form onSubmit={this.submit}>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label>First name </Label>
                            <Input  name="fName" id="fName" defaultValue={this.props.soldier.first_name} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Last Name </Label>
                            <Input  name="lName" id="lName" defaultValue={this.props.soldier.last_name} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Third Name </Label>
                            <Input onChange={this.change} type={"tNAme"}  defaultValue={this.props.soldier.third_name} />
                        </FormGroup>
                        <FormGroup>
                            <Label>MilU </Label>
                            <Input  type={"milU"} name="milU" defaultValue={this.props.soldier.milU}  />
                        </FormGroup>
                        <FormGroup>
                            <Button type={"submit"} >Submit</Button>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default SoldierForm;