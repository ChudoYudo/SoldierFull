import React from 'react';
import ModalExample from "./modal";
import Fab from "@material-ui/core/Fab"
import IconButton from "@material-ui/core/IconButton/"
import ButtonGroup from "reactstrap/es/ButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from '@material-ui/icons/Edit';
import {Button} from "@material-ui/core";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow'


class CTableRow extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            kind: '',
            data: []
        };
        this.del=this.del.bind(this);
    }
    del (e,soldier){
        this.props.del(soldier);
    }
    render() {
        return (
            <TableRow hover role="checkbox" tabIndex={-1} key={this.props.id}>
                <TableCell align={"center"}>
                    {this.props.id+1}
                </TableCell>
                <TableCell align={"center"}>
                    {this.props.soldier.first_name}
                </TableCell>
                <TableCell align={"center"}>
                    {this.props.soldier.last_name}
                </TableCell>
                <TableCell align={"center"}>
                    {this.props.soldier.third_name}
                </TableCell>
                <TableCell align={"center"}>
                    {this.props.soldier.milU}
                </TableCell>
                <TableCell align={"center"}>
                    <ButtonGroup >
                        <ModalExample buttonLabel={"edit"} soldier={this.props.soldier} soldierId={this.props.soldier.id}/>
                        <Button color={"secondary"} onClick={(e)=>{this.del(e,this.props.soldier)}}  aria-label="edit">
                            <DeleteForeverIcon/>
                        </Button>
                    </ButtonGroup>
                </TableCell>
            </TableRow>
        )
    }
}
export default CTableRow;