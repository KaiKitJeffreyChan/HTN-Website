import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, FormControl, Form, Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function ClinicNavbar() {
    return (

        <>
        <Navbar bg="dark" variant="dark" style={{
            height: "72px"
        }}>
            <Navbar.Brand href="#home">WELCOME CLIENT</Navbar.Brand>
            <Nav className="mr-auto">
            <Container><Nav.Link href="#home">MAIN</Nav.Link></Container>
            <Container><Nav.Link href="#features">REQUEST</Nav.Link></Container>
            <Container><Nav.Link href="#pricing">TRACK</Nav.Link></Container>
            <Container><Nav.Link href="#pricing">REPORT</Nav.Link></Container>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>

            

        </Navbar>

        </>
    )
}

function DisNavbar() {
    return (
        <>
        <Navbar bg="dark" variant="dark" style={{
            height: "72px" }}>
        
            <Navbar.Brand href="#home">WELCOME DISTRIBUTOR</Navbar.Brand>
            <Nav className="mr-auto">
            <Container><Nav.Link href="#home">MAIN</Nav.Link></Container>
            <Container><Nav.Link href="#features">TRACK</Nav.Link></Container>
            <Container><Nav.Link href="#pricing">REPORT</Nav.Link></Container>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            

            </Form>
        </Navbar>
        </>
    )
}



export {ClinicNavbar, DisNavbar}
