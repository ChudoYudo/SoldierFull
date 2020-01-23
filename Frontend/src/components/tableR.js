import React from 'react';
import ModalExample from "./modal";
import Button from "reactstrap/es/Button";


class TableRow extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            kind: '',
            data: []
        };
        this.del=this.del.bind(this);
    }
    del (e,id){
        this.props.del(id);
    }
    render() {
        return (
            <tr>

                <td className="pa3 bb b--black-10">
                    {this.props.soldier.id}
                </td>
                <td className="pa3 bb b--black-10">
                    {this.props.soldier.first_name}
                </td>
                <td className="pa3 bb b--black-10">
                    {this.props.soldier.last_name}
                </td>
                <td className="pa3 bb b--black-10">
                    {this.props.soldier.third_name}
                </td>
                <td className="pa3 bb b--black-10">
                    {this.props.soldier.milU}
                </td>
                <td className="pa3 bb b--black-10" width={"5%"}>
                    <ModalExample buttonLabel={"edit"} soldierId={this.props.soldier.id}/>
                </td>
                <td className="pa3 bb b--black-10" width={"5%"}>
                    <Button onClick={(e)=>{this.del(e,this.props.soldier.id)}}> delete</Button>
                </td>

            </tr>
        )
    }
}
export default TableRow;