import React, { Component } from 'react'
import "./signup.css";
import { Form,Input,Checkbox,Button,Row,Col} from 'antd';
import Header from "./Header";
export default class Login extends Component {constructor(props) {
    super(props);
    this.state = {
        user: {
            email: "",
            password: ""
          }

    };
  }


    onSubmit = () =>{
        console.log("submit");
    }

    changeHandler = e => {
        let value = e.target.value.replace(/<[^>]*>?/gm, "");
    
        this.setState({
          user: { ...this.state.user, [e.target.name]: value }
        });
      };  
    render() {
        return (
            <div>
              <Header/>
                <div className="container">
                
                <center>
                <h2>Login</h2>
                <form onSubmit={this.onSubmit} method="POST">
          
          <Row><Col xs={8}><span className="form-fields required">Email </span></Col> 
          <Col xs={15}><input
            className="form-control"
            type="email"
            name="email"
            value={this.state.user.email}
            onChange={this.changeHandler}
          /></Col></Row>
          <br />
          
          <Row><Col xs={8}><span className="form-fields required">Password </span></Col>
          <Col xs={15}><input
            className="form-control"
            type="password"
            name="password"
            value={this.state.user.password}
            onChange={this.changeHandler}
          /></Col></Row>
          <br/>
          
          <Button type="primary" htmlType="submit">Submit</Button>
        </form>
              {/* </Col> */}
              </center>
              

        </div>
            </div>
        )
    }
}
