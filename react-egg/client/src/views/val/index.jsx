import React, { Component } from 'react'
const {val,getevery}=require("../../api/index")
export default class vvv extends Component {
    state={
        val:'',
        list:[],
        code:1
    }
    
    componentDidMount() {
        getevery().then(res=>{
            console.log(res.data)
            this.setState({
                list:res.data.result
            })
        })
    }
    
    eve(){
        console.log(this.state.val)
        val(this.state.val).then(res=>{
            console.log(res.data)
            this.setState({
                list:res.data.result
            })
        })
    }
    dianji(id){
        console.log(id)
        this.setState({
            code:id
        })
        this.props.history.push("/list/detail/"+id)
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.val} onChange={(e)=>{
                    this.setState({
                        val:e.target.value
                    })
                }}/><button onClick={this.eve.bind(this)}>查询相关</button>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li key={item.id} 
                            onClick={this.dianji.bind(this,item.id)}
                            style={{color:this.state.code==item.id?"red":""}}
                            >{item.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
