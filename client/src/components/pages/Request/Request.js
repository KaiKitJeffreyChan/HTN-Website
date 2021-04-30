import React, {useState} from 'react'
import { ClinicNavbar } from '../../Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import ReactMapGL, {Marker} from "react-map-gl"
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import "./Request.css";

function Request () {
    return (
        
        <>
        <div id="RequestBack">
        <div>
        <Router>
          <ClinicNavbar>
          <Switch>
            <Route path='/' exact />
          </Switch>
          </ClinicNavbar>
        </Router>
        </div>

    
        <LeftBox>
            <LeftBox2>
                <h2> Vaccine Quantities</h2>
                <VacType>
                    <Form>
                    {['checkbox'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                        <Form.Check inline label="Pifizer" type={type} id={`inline-${type}-1`} />
                        <Form.Check inline label="Updates" type={type} id={`inline-${type}-1`} />
                        </div>
                    ))}
                    </Form>
                </VacType>
                <Form>
                <Form.Group controlId="formBasicRange" style={{  
                    width: "350px"
                }}>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="range" />
                </Form.Group>
                </Form>
            </LeftBox2>
        </LeftBox>



        <RightBox>
            <RightBox2>
                <Form >
                <Form.Group controlId="formBasicEmail"  >
                    <Form.Label>Comment</Form.Label>
                    <Form.Control type="email" placeholder="" style={{
                    height: "218px",
                    width: "500px"
                }} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                
            </RightBox2>         
        </RightBox>
        </div>
        </>
    );   
}


const LeftBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 16px;

    position: absolute; 
    width: 446px;
    height: 530px;
    left: 179px;
    top: 153px;

    background: #F4F4F4;
    box-shadow: 0px 4px 50px #000000;
    border-radius: 16px;
`
const LeftBox2 = styled.div`
    position: static;
    width: 414px;
    height: 460px;
    left: 16px;
    top: 32px;
    background: #FFFFFF;
    border-radius: 12px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 16px;
`
const VacType = styled.div`
    position: absolute;
    height: 48px;
    left: 211px;
    right: 847px;
    top: 290px;
`

const RightBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 16px;

    position: absolute;
    width: 588px;
    height: 359px;
    left: 672px;
    top: 155px;

    background: #F4F4F4;
    box-shadow: 0px 4px 80px #000000;
    border-radius: 16px;
`
const RightBox2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 556px;
    height: 298px;
    left: 16px;
    top: 32px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 16px;
`
const Text = styled.div`
    position: absolute;
    width: 382px;
    height: 44px;
    left: 0px;
    top: 1px;

    background: #FFFFFF;
`

export default Request;