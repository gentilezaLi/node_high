import React, { Component } from 'react'
import RouterView from "../route/routerview"
import { NavLink } from "react-router-dom"
import "../assets/css/index.css"
export default class list extends Component {
    render() {
        return (
            <div className="list">
                <div className="l-c">
                    <RouterView routes={this.props.children} />
                </div>
                <div className="l-h">
                    <NavLink to="/list/home">首页</NavLink>
                    <NavLink to="/list/detail">详情</NavLink>
                    <NavLink to="/list/shop">shop</NavLink>
                    <NavLink to="/list/val">查询</NavLink>
                    <NavLink to="/list/user">我的</NavLink>
                </div>
                
            </div>
        )
    }
}
