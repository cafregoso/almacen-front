// React
import React, { Fragment, useEffect, useState } from 'react'

// Axios
import Axios from 'axios'

// Material UI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Components
import RecordTable from '../../Components/RecordTable/RecordTable';

export default function ViewRecord() {
    const [records, setRecords] = useState([])

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const response = await Axios({
                    url: "http://127.0.0.1:8000/",
                });

                setRecords(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchRecords();
    }, []);

    return (
        <Fragment>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Código</TableCell>
                            <TableCell align="right">Ubicación</TableCell>
                            <TableCell align="right">Órden de compra</TableCell>
                            <TableCell align="right">Cantidad</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            records.map(({ id, location, product, bills, qtty }) => {
                                {console.log(id, location, product, bills, qtty)}
                                <RecordTable
                                    key={id}
                                    product={product}
                                    location={location}
                                    bills={bills}
                                    qtty={ qtty }
                                />
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    )
}
