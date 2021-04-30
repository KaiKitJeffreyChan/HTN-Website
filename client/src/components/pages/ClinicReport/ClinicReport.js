import React, {useState} from 'react'
import { ClinicNavbar } from '../../Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import ReactMapGL, {Marker} from "react-map-gl"
import styled from 'styled-components';
import { Form } from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(vaccine, date, usedNum, wastedNum) {
  return { vaccine, Date, usedNum, wastedNum};
}

const rows = [
  createData("Pifzer","September 20, 2020", 10,131, 20),
  createData("Moderna","September 19, 2020", 22,661, 10),
  createData("Pifzer","September 18, 2020", 11,155, 8),
  createData("Pifzer","September 17, 2020", 26,993, 5),
  createData("Moderna","September 17, 2020", 45,890, 6),
];

export default function ClinicReport(){
    const classes = useStyles();
    return(
        <div>
            <div>
                <Router>
                <ClinicNavbar>
                <Switch>
                    <Route path='/' exact />
                </Switch>
                </ClinicNavbar>
                </Router>
            </div>
            <OuterBox>
                <InnerBox>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Vaccine</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Number of Used</TableCell>
                            <TableCell align="right">Number of Wasted</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.vaccine}>
                            <TableCell component="th" scope="row">
                                {row.vaccine}
                            </TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">{row.usedNum}</TableCell>
                            <TableCell align="right">{row.wastedNum}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </InnerBox>
            </OuterBox>
                

        </div>
    );
}

const OuterBox = style.div`
position: absolute;
width: 1369px;
height: 569px;
left: 36px;
top: 139px;
`;

const InnerBox = style.div`
position: absolute;
left: 1.75%;
right: 1.75%;
top: 3.87%;
bottom: 4.22%;

background: #FFFFFF;
border-radius: 20px;
`;