import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import CTableRow from "./tableR";


import axios from "axios";
import SearchRow from "./searchRow";
import qs from 'qs';



class MaterialTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kind: '',
            data: [],
            page: 0,
            rowsPerPage:10
        };
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        this.del = this.del.bind(this);
        this.search = this.search.bind(this);
        this.updateData=this.updateData.bind(this);

    }

    componentDidMount(){
        this.updateData();
    }

    updateData(){
        axios
            .get('http://127.0.0.1:7001/soldier/all')
            .then(({ data })=> {
                this.setState({
                    data: data
                });
            })
            .catch((err)=> {})
    }

    del (soldier){
        let map = this.state.data;
        let id= map.indexOf(soldier);
        map.splice(id,1);
        this.setState({data: map});
    }

    handleChangePage = (event, newPage) => {
        console.log(newPage)
        this.setState({page:newPage});
    };

    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: +event.target.value});
        this.setState({page:0});
    };

    search(dt){
        let url ='http://127.0.0.1:7001/soldier/search';
        let options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(dt),
            url,
        };
        axios(options) .catch((err)=> {});
    }

    render() {
        return (
            <Paper >
                <div>

                </div>
                <TableContainer >
                    <Table bordered stickyHeader={true} aria-label="sticky table">
                        <TableHead>
                            <tr>
                                <TableCell align={"center"}>#</TableCell>
                                <TableCell align={"center"}>First Name</TableCell>
                                <TableCell align={"center"}>Last Name</TableCell>
                                <TableCell align={"center"}>Third Name</TableCell>
                                <TableCell align={"center"}>Mill U</TableCell>
                                <TableCell align={"center"}>Action</TableCell>
                            </tr>
                        </TableHead>
                        <TableBody>
                            <SearchRow search={this.search} />
                            {
                                this.state.data.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map ( (soldier)=>  {
                                    return <CTableRow update={this.updateData} del={this.del} soldier={soldier} id={this.state.data.indexOf(soldier)}></CTableRow>
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    SelectProps={{
                        inputProps: { 'aria-label': 'rows per page' },
                        native: true,
                    }}
                    count={this.state.data.length}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </Paper>
        )
    }
}
export default MaterialTable;