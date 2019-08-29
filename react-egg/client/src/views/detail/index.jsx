import React, { Component } from 'react'
import {goDetail} from "../../api/index"
import {jiajian} from "../../api/index"
export default class detail extends Component {
    state={
        list:[],
        num:0
    }
    
    componentDidMount() {
        console.log(this.props)
       let {id}=this.props.match.params
       console.log(id)
        goDetail(id).then(res=>{
            console.log(res.data)
            this.setState({
                list:res.data.result
            })
        })
    }
    count(type,item){
        if(type=="-"){
            console.log(item,"***")
            item.num--
            jiajian(item.num,item.id)
        }else{
            item.num++
            console.log(item,"ppp")
            jiajian(item.num,item.id)
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.list.map((item,index)=>{
                        return <p key={item.id}>{item.title}
                        <br/>
                        <button onClick={this.count.bind(this,'-',item)}>-</button>
                        <span>{item.num}</span>
                        <button onClick={this.count.bind(this,'+',item)}>+</button>
                        </p>
                    })
                }
            </div>
        )
    }
}
