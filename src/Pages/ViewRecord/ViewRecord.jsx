// React
import React, { useEffect, useState } from 'react'

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

// CSS
import './ViewRecord.css'

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
        <div className='viewRecords'>
        <a 
            href='http://127.0.0.1:8000/download/'
            style={{ 
              backgroundColor: '#1C76D2',
              color: '#FFF',
              border:'none',
              padding: '10px 20px',
              borderRadius: '5px',
              fontSize: '1rem',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >Descargar</a>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Código</TableCell>
                            <TableCell align="right">Ubicación</TableCell>
                            <TableCell align="right">Órden de compra</TableCell>
                            <TableCell align="right">Cantidad</TableCell>
                            <TableCell align="right">Fecha de registro</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            records.map(({ id, location, product, bills, qtty, created }) => (
                                <RecordTable
                                    key={id}
                                    product={product}
                                    location={location}
                                    bills={bills}
                                    qtty={ qtty }
                                    created={ created }
                                />
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
