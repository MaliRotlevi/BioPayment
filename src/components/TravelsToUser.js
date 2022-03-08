// import * as React from 'react';
// import { useState } from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import { connect } from 'react-redux'
import { getTravelsToUser } from '../store/action/travelsToUser';


// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }));




// const TravelsToUser = (props) => {
//     const [isUser, setIsUser] = useState(false)
//     const travelsList = props.travelsList;


//     <h5>gjhgkjgjh</h5>
//          <button onClick={()=>{props.getTravelsToUser(props.currentUser.id);
//         console.log(props.getTravelsToUser(props.currentUser.id))}}>get the data
//         </button>
//          <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 700 }} aria-label="customized table">
//                 <TableHead>
//                     <TableRow>
//                         <StyledTableCell>Date & Time</StyledTableCell>
//                         <StyledTableCell >Line</StyledTableCell>
//                         <StyledTableCell >Price</StyledTableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {travelsList.map((row) => (
//                         <StyledTableRow key={row.dateTime}>
//                             <StyledTableCell component="th" scope="row">
//                                 {row.dateTime}
//                             </StyledTableCell>
//                             <StyledTableCell >{row.line}</StyledTableCell>
//                             <StyledTableCell >{row.price}</StyledTableCell>
//                         </StyledTableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer> 
//         </>
//     );



// const mapStateToProps = (state) => {
//     return {
//         travelsList: state.TravelsToUser.travelsListToUser,
//         currentUser: state.user.currentUser
//     }
// }

// export default connect(mapStateToProps, { getTravelsToUser })(TravelsToUser);

const TravelsToUser = (props) => {

    return (<>
        <h1>history</h1>
        <button onClick={props.getTravelsToUser(props.currentUser.id)}>press me :-)</button>
    </>)
}

const mapStateToProps = (state) => {
    return {
        travelsList: state.travelsToUser.travelsListToUser,
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps, { getTravelsToUser })(TravelsToUser);