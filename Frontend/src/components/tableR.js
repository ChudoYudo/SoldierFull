import React from 'react';
import ModalExample from "./modal";


const TableRow = ({soldier}) => {
    return (
        <tr>

            <td className="pa3 bb b--black-10">
                    {soldier.id}
            </td>
            <td className="pa3 bb b--black-10">
                {soldier.first_name}
            </td>
            <td className="pa3 bb b--black-10">
                {soldier.last_name}
            </td>

            <td className="pa3 bb b--black-10">
                {soldier.milU}
            </td>

            <td className="pa3 bb b--black-10" width={"5%"}>
                <ModalExample buttonLabel={"edit"} soldierId={soldier.id}/>
            </td>
        </tr>
    )
}
export default TableRow;