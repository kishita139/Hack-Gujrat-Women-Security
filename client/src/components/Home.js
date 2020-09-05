import React, { Component} from 'react';
import { Redirect ,Link} from "react-router-dom";
import { PageHeader,Menu,Button,Drawer } from 'antd';

import "antd/dist/antd.css";
import ReactMapGL from "react-map-gl";
import Header from "./Header"
export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 21.2786567,
                longitude: 81.8661442,
                width: "100vw",
                height: "100vh",
                zoom: 10
            },
            token: "pk.eyJ1Ijoia3NoYXRha3NoaSIsImEiOiJja2VuOHl5b24weWFwMnJtcXF5MXR0ZDFhIn0.dUfYcwHvsc5e8AOLg0ZKJA",
            collapsed: false,
            signup: false

        };
      }
     getPosition=(position)=>{
        this.setState(prevState => ({
            viewport: {                   // object that we want to update
                ...prevState.viewport,    // keep all other key-value pairs
                latitude: position.coords.latitude,
                longitude: position.coords.longitude     // update the value of specific key
            }
        }))
    }

    getLocation=()=>{
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(this.getPosition);
          } else { 
            console.log("error");
          }
    }
      
    componentDidMount=()=>{
        this.getLocation();
    }
      
    render() {
            return (
                <div>
                    
                   <Header/>
    
                    <ReactMapGL {...this.state.viewport} 
                    mapboxApiAccessToken={this.state.token}
                    onViewportChange={(viewport=>this.setState({viewport}))}
                    mapStyle="mapbox://styles/kshatakshi/cken9e08331um19mt5bn8gnp6">
                    </ReactMapGL>
                </div>
            )
        }
        
    
}
