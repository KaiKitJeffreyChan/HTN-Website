import React, {useState} from 'react'
import { ClinicNavbar } from '../../Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import ReactMapGL, {Marker} from "react-map-gl"
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';


function TrackC () {



    return (
        
        <>
        <div>
        <Router>
          <ClinicNavbar>
          <Switch>
            <Route path='/' exact />
          </Switch>
          </ClinicNavbar>
        </Router>
        </div>
        <MapBox>


        </MapBox>
        
        </>
        
    );
    
}

const MapBox = styled.div`
   
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    background: #F4F4F4;
    box-shadow: 0px 4px 30px #000000;
    border-radius: 20px;

`
export default TrackC;