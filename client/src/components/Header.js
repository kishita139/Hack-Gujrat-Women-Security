import React, { Component } from 'react';
import { Redirect ,Link} from "react-router-dom";
import { PageHeader,Menu,Button,Drawer } from 'antd';
import {
   HomeOutlined,
    MenuFoldOutlined,
    UserOutlined
  } from '@ant-design/icons';
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
      }
    open = () => {
        
        this.setState({
            collapsed: true
        })
      
    };

    close = () => {
      
      this.setState({
          collapsed: false
      })
      
    };
    render() {
        return (
            <div>
                <PageHeader
                        className="site-page-header"
                        // onBack={() => null}
                        title="Womenify"
                        subTitle="Keeps you safe"
                        extra={[
                            <Button key="1" type="primary" onClick={this.open}>
                             {React.createElement(MenuFoldOutlined)}
                            </Button>,
                          ]}
                        />
                    <Drawer
                        title="Get authenticated for better experience"
                        placement="right"
                        closable={false}
                        onClose={this.close}
                        visible={this.state.collapsed}
                    >  
                       <p> <Link to= {"/"}><Button type="primary" >{React.createElement(HomeOutlined)}</Button></Link>
                       <Link to= {"/profile"}><Button type="primary" >{React.createElement(UserOutlined)}</Button></Link></p>
                       <p> <Link to= {"/signup"}><Button type="primary" >Sign Up</Button></Link></p>
                       <p> <Link to= {"/login"}><Button type="primary" >Login</Button></Link></p>
                       <p> <Link to= {"/feedback"}><Button type="primary" >Feedback</Button></Link></p>
                    </Drawer>
            </div>
        )
    }
}
