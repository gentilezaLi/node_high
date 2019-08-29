import React, { Component } from 'react'
import "./App.css"
import {routes} from "./route/routes"
import RouterView from "./route/routerview"
import 'antd/dist/antd.css';
export default class App extends Component {
    render() {
        return (
            <div className="app">
                <RouterView routes={routes}/>
            </div>
        )
    }
}
