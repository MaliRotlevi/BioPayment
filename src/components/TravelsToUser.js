import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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

function createData(dateTime, line, price) {
    return { dateTime, line, price };
}

const rows = [
    createData('22/02/2001', 480, 6.0),
    createData('23/08/2001', 1, 16.0),
    createData('24/05/2001', 53, 9.0),
    createData('25/05/2001', 402, 16.0),
    createData('25/05/2001', 389, 3.7),
    createData('22/02/2001', 480, 6.0),
    createData('23/08/2001', 1, 16.0),
    createData('24/05/2001', 53, 9.0),
    createData('25/05/2001', 402, 16.0),
    createData('25/05/2001', 389, 3.7),
    createData('22/02/2001', 480, 6.0),
    createData('23/08/2001', 1, 16.0),
    createData('24/05/2001', 53, 9.0),
    createData('25/05/2001', 402, 16.0),
    createData('25/05/2001', 389, 3.7),
];

export default function TravelsToUser() {
    return (
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
                    {rows.map((row) => (
                        <StyledTableRow key={row.dateTime}>
                            <StyledTableCell component="th" scope="row">
                                {row.dateTime}
                            </StyledTableCell>
                            <StyledTableCell >{row.line}</StyledTableCell>
                            <StyledTableCell >{row.price}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
