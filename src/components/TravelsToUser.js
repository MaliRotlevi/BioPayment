import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { connect } from 'react-redux'
import { getTravelsToUser } from '../store/action/travelsToUser';

const TravelsToUser = (props) => {


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const findTravelByCode = (travelCode) => {
        return props.travelsList.find((t) => {
            return t.travelCode == travelCode
        })
    }

    const formatDate = (string) => {
        var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(string).toLocaleDateString([], options);
    }

    return (<>
        <h1>history</h1>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Date & Time</StyledTableCell>
                        <StyledTableCell >Line</StyledTableCell>
                        <StyledTableCell >Price</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.travelsToUserList.map((row) => (
                        <StyledTableRow key={row.date}>
                            <StyledTableCell component="th" scope="row">
                                {formatDate(row.date)}
                                {"  "}
                                {row.hour}
                            </StyledTableCell>
                            <StyledTableCell>{row.line}</StyledTableCell>
                            <StyledTableCell>{row.price}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    </>)
}

const mapStateToProps = (state) => {
    return {
        travelsToUserList: state.travelsToUser.travelsToUserList,
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps, { getTravelsToUser })(TravelsToUser);