import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './signup.css';
import axios from 'axios';
import { Form, Input, Checkbox, Button, Row, Col } from 'antd';
import Header from './Header';
export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        mobile: null,
        password: '',
        confirmPassword: '',
        contact1: null,
        contact2: null,
        contact3: null,
        contact4: null,
        contact5: null,
      },
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();
    console.log('clicked');
    const res = await axios.post(
      '/api/users/signup',
      {
        name: this.state.user.name,
        phone_no: this.state.user.mobile,
        email: this.state.user.email,
        password: this.state.user.password,
        passwordConfirm: this.state.user.confirmPassword,
        contact_info: [
          this.state.user.contact1,
          this.state.user.contact2,
          this.state.user.contact3,
          this.state.user.contact4,
          this.state.user.contact5,
        ],
      },
      {
        withCredentials: true,
      }
    );
    console.log(res.data);
  };

  changeHandler = (e) => {
    let value = e.target.value.replace(/<[^>]*>?/gm, '');

    this.setState({
      user: { ...this.state.user, [e.target.name]: value },
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <center>
            <h2>Sign Up</h2>
            <form onSubmit={this.onSubmit} method="POST">
              <Row>
                <Col xs={8}>
                  <span className="form-fields required">Name</span>
                </Col>
                <Col xs={15}>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    maxlength="25"
                    value={this.state.user.name}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={8}>
                  <span className="form-fields required">Email </span>
                </Col>
                <Col xs={15}>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={this.state.user.email}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={8}>
                  <span className="form-fields required">Mobile </span>
                </Col>
                <Col xs={15}>
                  <input
                    className="form-control"
                    // type="text"
                    name="mobile"
                    value={this.state.user.mobile}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={8}>
                  <span className="form-fields required">Password </span>
                </Col>
                <Col xs={15}>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={this.state.user.password}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={8}>
                  <span className="form-fields required">
                    Confirm Password{' '}
                  </span>
                </Col>
                <Col xs={15}>
                  <input
                    className="form-control"
                    type="password"
                    name="confirmPassword"
                    value={this.state.user.confirmPassword}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col xs={8}>
                  <span className="form-fields required">
                    Contact Numbers 1.
                  </span>
                </Col>
                <Col xs={15}>
                  <input
                    className="form-control"
                    type="text"
                    name="contact1"
                    value={this.state.user.contact1}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={8}>
                  <span className="form-fields">2.</span>
                </Col>
                <Col xs={15}>
                  <input
                    className="form-control"
                    type="text"
                    name="contact2"
                    value={this.state.user.contact2}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={8}>
                  <span className="form-fields">3.</span>
                </Col>
                <Col xs={15}>
                  <input
                    className="form-control"
                    type="text"
                    name="contact3"
                    value={this.state.user.contact3}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={8}>
                  <span className="form-fields">4.</span>
                </Col>
                <Col xs={15}>
                  <input
                    className="form-control"
                    type="text"
                    name="contact4"
                    value={this.state.user.contact4}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={8}>
                  <span className="form-fields">5.</span>
                </Col>
                <Col xs={15}>
                  <input
                    className="form-control"
                    type="text"
                    name="contact5"
                    value={this.state.user.contact5}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </form>
            {/* </Col> */}
          </center>
        </div>
      </div>
    );
  }
}
