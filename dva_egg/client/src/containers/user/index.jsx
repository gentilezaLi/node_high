import React, { Component } from 'react'
import RouterView from "../../router/index"
import {NavLink} from "dva/router"
import { Row, Col} from 'antd';


 class User extends Component {
    render() {
        const {routes,history}=this.props
        return (
            <Row xs={{ span: 8, offset: 8 }}>
               &nbsp;&nbsp;&nbsp;
               <Col><NavLink to="/user/login">login</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to="/user/registry">registry</NavLink></Col>
                
                <RouterView routes={routes} history={history}/>
            </Row>
        )
    }
}
export default User
