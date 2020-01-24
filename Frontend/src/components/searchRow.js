import React from 'react';
import ModalExample from "./modal";
import ButtonGroup from "reactstrap/es/ButtonGroup";
import {Button, Input} from "@material-ui/core";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow'
import axios from "axios";
import qs from 'qs';
import SearchIcon from '@material-ui/icons/Search';
import Fab from "@material-ui/core/Fab"



class SearchRow extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            kind: '',
            first_name:0,
            data: []
        };
        this.change_fname=this.change_fname.bind(this);
        this.search=this.search.bind(this);
    }
    componentDidMount() {
        // this.setState({last_name:this.props.soldier.last_name});
        // this.setState({third_name:this.props.soldier.third_name});
    }
    search(){
        let dt= {};
        dt['first_name']=this.state.first_name;
        this.props.search(dt);
    }
    change_fname (event){
        this.setState({first_name:event.target.value});
    }
    render() {
        return (
            <TableRow  key={-1}>
                <TableCell align={"center"}>
                    <Input></Input>
                </TableCell>

                <TableCell align={"center"}>
                    <Input onChange={this.change_fname}></Input>
                </TableCell>

                <TableCell align={"center"}>
                    <Input></Input>
                </TableCell>

                <TableCell align={"center"}>
                    <Input></Input>
                </TableCell>

                <TableCell align={"center"}>
                    <Input></Input>
                </TableCell>

                <TableCell align={"center"}>
                    <Fab color="primary" aria-label="search"><SearchIcon onClick={this.search} /></Fab>
                </TableCell>

            </TableRow>
        )
    }
}
export default SearchRow;