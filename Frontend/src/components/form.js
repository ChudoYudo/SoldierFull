import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import qs from 'qs';
import InputMask from 'react-input-mask';
import Select from '@material-ui/core/Select';
class SoldierForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            kind: '',
            data: [],
            first_name:0,
            last_name:0,
            third_name:0,
            birthday_date:0,
            milu_number:0,

        };
        this.submit=this.submit.bind(this);
        this.change_fname=this.change_fname.bind(this);
        this.change_lname=this.change_lname.bind(this);
        this.change_tname=this.change_tname.bind(this);
        this.change_bdate=this.change_bdate.bind(this);
        this.change_milunumber=this.change_milunumber.bind(this);
    }

    componentDidMount() {
        this.setState({first_name:this.props.soldier.first_name});
        this.setState({last_name:this.props.soldier.last_name});
        this.setState({third_name:this.props.soldier.third_name});
    }

    submit = async (event) => {
        let dt = {
            'id':this.props.soldier.id,
            'first_name':this.state.first_name,
            'last_name':this.state.last_name,
            'third_name':this.state.third_name,
            'birthday_date':this.state.birthday_date,
        };
        let url ='http://127.0.0.1:7001/soldier/change';
        let options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(dt),
            url,
        };
        axios(options)
            .then(({ ddd })=> { console.log(ddd);})
            .then(this.props.toggle());
        setTimeout(()=>this.props.update(),150);
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
    change_bdate(event){
        this.setState({birthday_date:event.target.value})
    }
    change_milunumber(event){
        this.setState({milu_number:event.target.value})
    }

   render (){
        return (
            <Form onSubmit={this.submit}>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Имя </Label>
                            <Input onChange={this.change_fname}  name="fName" id="fName" defaultValue={this.props.soldier.first_name} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Фамилия </Label>
                            <Input onChange={this.change_lname}  name="lName" id="lName" defaultValue={this.props.soldier.last_name} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Отчество </Label>
                            <Input onChange={this.change_tname} type={"tNAme"}  defaultValue={this.props.soldier.third_name} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Номер Части </Label>
                            <Input onChange={this.change_milunumber} type={"tNAme"}  defaultValue={this.props.soldier.milu_number} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Дата Рождения</Label>
                            <InputMask mask="99/99/9999"  onChange={this.change_bdate} defaultValue={this.props.soldier.birthday_date}/>
                        </FormGroup>
                        <FormGroup>
                            <Button onClick={this.submit} >Submit</Button>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default SoldierForm;