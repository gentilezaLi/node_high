import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import RouterView from "../../route/routerview"
import "../../assets/css/user.css"
export default class user extends Component {
    render() {
        return (
            <div>
               <div className="user">
                <div className="u-h">
                    <NavLink to="/list/user/login">登录</NavLink>
                    <NavLink to="/list/user/registry">注册</NavLink>
                </div>
                <div className="u-c">
                    <RouterView routes={this.props.children} />
                </div>
            </div>
            </div>
        )
    }
}
