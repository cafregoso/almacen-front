// React
import React from 'react'

// Material UI
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function RecordTable({ product, location, bills, qtty }) {
    return (

        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">{product}</TableCell>
            <TableCell align="right">{location}</TableCell>
            <TableCell align="right">{bills}</TableCell>
            <TableCell align="right">{qtty}</TableCell>
        </TableRow>

    )
}
