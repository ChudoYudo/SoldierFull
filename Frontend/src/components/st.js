import React from 'react';
import axios from 'axios'
import TableRow from "./tableR";
import {Table} from "reactstrap";
let soldiers;
class Stable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            kind: '',
            data: []
        };
    }
    componentDidMount(){
        axios
            .get('http://127.0.0.1:7001/soldier/all')
            .then(({ data })=> {
                this.setState({
                    data: data
                });
            })
            .catch((err)=> {})
    }

    render() {
        return (
            <Table bordered>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.data.map(function (soldier) {
                        return <TableRow soldier={soldier}></TableRow>
                    })
                }
                </tbody>
            </Table>
        );
    }
}

export default Stable;