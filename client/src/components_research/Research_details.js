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

function createData(
  name: string,
  id: number,
  Date: number,
  cst: number,
  Amount: number,
) {
  return { name, id, Date, cst, Amount };
}

const rows = [
  createData('2020CSB1063', 159, '10/12/20', 24, 4000),
  createData('2020CSB1060', 237, '13/11/20', 37, 10000),
  createData('2020CSB1061', 262, '05/10/21', 24, 6000),
  createData('2020CSB1062', 305, '11/09/19', 67, 24000),
  createData('2020CSB1064', 356, '23/12/21', 49, 9000),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <b>Research History</b>
      <br/>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Entry No. </StyledTableCell>
            <StyledTableCell align="right">Tr - id</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">cst</StyledTableCell>
            <StyledTableCell align="right">Amount&nbsp;(Rs)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.Date}</StyledTableCell>
              <StyledTableCell align="right">{row.cst}</StyledTableCell>
              <StyledTableCell align="right">{row.Amount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}