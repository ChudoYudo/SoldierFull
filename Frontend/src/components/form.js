import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";

import qs from 'qs';


class SoldierForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            kind: '',
            data: [],
            first_name:0,
            last_name:0,
            third_name:0,

        };
        this.submit=this.submit.bind(this);
        this.change_fname=this.change_fname.bind(this);
        this.change_lname=this.change_lname.bind(this);
        this.change_tname=this.change_tname.bind(this);
    }

    componentDidMount() {
        this.setState({first_name:this.props.soldier.first_name});
        this.setState({last_name:this.props.soldier.last_name});
        this.setState({third_name:this.props.soldier.third_name});
    }

    submit(event){
        let dt = {
            'id':this.props.soldier.id,
            'first_name':this.state.first_name,
            'last_name':this.state.last_name,
            'third_name':this.state.third_name,
        };
        let url ='http://127.0.0.1:7001/soldier/change';
        let options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(dt),
            url,
        };
        axios(options);
        this.props.toggle();
        this.props.update();
        event.preventDefault();
    }
    change_fname(event){
        this.setState({first_name:event.target.value})
    }
    change_lname(event){
        this.setState({last_name:event.target.value})
    }
    change_tname(event){
        this.setState({third_name:event.target.value})
    }

   render (){
        return (
            <Form onSubmit={this.submit}>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label>First name </Label>
                            <Input onChange={this.change_fname}  name="fName" id="fName" defaultValue={this.props.soldier.first_name} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Last Name </Label>
                            <Input onChange={this.change_lname}  name="lName" id="lName" defaultValue={this.props.soldier.last_name} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Third Name </Label>
                            <Input onChange={this.change_tname} type={"tNAme"}  defaultValue={this.props.soldier.third_name} />
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