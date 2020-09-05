import React, { Component } from 'react';
import { Form,Input,Checkbox,Button,Row,Col} from 'antd';
import "./search.css";
import Header from "./Header"
export default class Feedback extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container2">
                <center>
                    <h2>What is your opinion on this path?</h2></center>
                    <form onSubmit={this.onSubmit} method="POST">
            
                        <div className="question"><p>How was the crowd?</p></div>
                        <div className="options">
                        <input type="radio" name="crowd" value="light"/><span>Light</span>
                        <input type="radio" name="crowd" value="moderate"/><span>Moderate</span>
                        <input type="radio" name="crowd" value="busy"/><span>Busy</span>
                        </div><br/>
                        <div className="question"><p>Gender Ratio (F/M) ?</p></div>
                        <div className="options">
                        <input type="radio" name="ratio" value="less"/><span>Less than 1</span>
                        <input type="radio" name="ratio" value="equal"/><span>Equal to 1</span>
                        <input type="radio" name="ratio" value="more"/><span>Greater than 1</span>
                        </div><br/>
                        <div className="question"><p>Area Lighting</p></div>
                        <div className="options">
                        <input type="radio" name="light" value="dark"/><span>Dark</span>
                        <input type="radio" name="light" value="moderate"/><span>Moderate</span>
                        <input type="radio" name="light" value="lit"/><span>Lit</span>
                        </div><br/>
                        <div className="question"><p>How safe did you feel?</p></div>
                        <div className="options">
                        <input type="radio" name="safety" value="unsafe"/><span>I felt unsafe.</span>
                        <input type="radio" name="safety" value="fine"/><span>I felt fine</span>
                        <input type="radio" name="safety" value="comfortable"/><span>I felt comfortable</span>
                        </div><br/>

                        
                        <center><Button type="primary" htmlType="submit">Submit</Button></center>
                    </form>
                    </div>
            </div>
        )
    }
}
