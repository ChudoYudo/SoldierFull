import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ExampleForm = (props) => {
    return (
        <Form>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" value={"erfef"} />
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    );
}

export default ExampleForm;