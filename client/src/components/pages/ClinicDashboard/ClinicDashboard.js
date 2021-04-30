import React, {useState} from 'react'
import { ClinicNavbar } from '../../Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import ReactMapGL, {Marker} from "react-map-gl"
import styled from 'styled-components';

function ClinicDashboard () {

  const [viewport, setViewport] = useState({
    latitude : 56.130367,
    longitude : -106.346771,
    width: '100vw',
    height: '100vh',
    zoom: 3
  });

    return (
        <>
        <Router>
          <ClinicNavbar>
          <Switch>
            
            <Route path='/' exact />
          </Switch>
          </ClinicNavbar>
        
        </Router>
        <ReactMapGL {...viewport} 
        mapboxApiAccessToken = {
          "pk.eyJ1IjoiZmxhc2h5Ym95IiwiYSI6ImNrazBpYndpaDBlOGgzMW90b2xrN2t1anEifQ.xndRu3hJ3JGegPQm9PETbg"
        }
        onViewportChange = {(viewport) => {
          setViewport(viewport);
        }}
        >
        </ReactMapGL>
        
        {/* {data.map((cardinfo) => {
            return (
              <ParentContinertwo>
                <Card>
                  <CardText>
                    {"add values here"}                 
                  </CardText>              
                </Card>
                <Card>
                  <CardText>
                    {cardinfo.stock}
                  </CardText>            
                </Card>
              </ParentContinertwo>
            )
          })
        }

          {data.map((cardinfo) => {
            return (
              <ParentContiner>
                <Card>
                  <CardText>
                    {"add values here"}                 
                  </CardText>              
                </Card>
                <Card>
                  <CardText>
                    {cardinfo.stock}
                  </CardText>            
                </Card>
              </ParentContiner>
            )
          })
        } */}
        </>
    );
    
}
const data =[
    {
    totalInventory: 24,
    stock: 32
  }
];

const ParentContiner = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 20%;
  right: 2rem;
  bottom: 2rem;
  box-sizing: border-box; 
`

const ParentContinertwo = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 20%;
  top: 10rem;
  left: 2rem;
  box-sizing: border-box; 
`

const Card = styled.div`
  height: 232px;
  width: 100%;
  display: flex;
  border-radius: 1rem;
  background-color: rgba(192,192,192, 0.5);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
  margin: 12px;
`

const CardText = styled.h3`
  margin: auto;
  text-align:center;
`



export default ClinicDashboard;