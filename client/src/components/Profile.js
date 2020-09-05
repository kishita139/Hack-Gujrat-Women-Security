import React, { Component } from 'react'
import {Avatar} from "antd";
import { UserOutlined } from '@ant-design/icons';
import Header from "./Header";
import "./profile.css";
export default class Profile extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container1">
               <div id="avatar"> <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} size={70}/></div>
               <div className="username"><h2>Kshatakshi Gupta</h2></div>
               </div>
               <ul>
                   <li>Mob Number: 9685266</li>
                   <li>Address: B-123 Rosewood</li>
                   <li>Emergency Numbers:
                       <ol><li>123456789</li>
                   <li>875673452</li>
                   <li>765846392</li>
                   </ol>
                   </li>
                   
               </ul>
            </div>
        )
    }
}
