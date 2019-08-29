import React, { Component } from 'react'
import {connect} from "dva"
// import {getList} from "../../api/index"

const mapState2Props=state=>{
    return state.login
}

@connect(mapState2Props)
class HomePage extends Component {
    state={
        pagesize:1,
        pagecount:5
    }
    componentDidMount() {
        this.props.dispatch({
            type:'login/getProList',
            payload:{
                pagesize:0,
                pagecount:5
        }})
        // console.log(this.props)
        // getList().then(res=>{
        //     console.log(res.data)
        // })
    }
    loadMore(){
        this.setState({
            pagesize:this.state.pagesize+1
        },()=>{
            console.log(this.state,"****")
            const start=(this.state.pagesize-1)*this.state.pagecount
            this.props.dispatch({
                type:'login/getProList',
                payload:{
                    pagesize:start,
                    pagecount:this.state.pagecount
                }
            })
        })
    }
    render() {
        const {list}=this.props
        console.log(list,"终于可以渲染了")
        return <div>
            this is homepage
            {
               list.map((item,index)=>{
                   return <p key={item.id}>{item.title}</p>
               }) 
            }
            <button onClick={()=>this.loadMore()}>点击加载更多</button>
        </div>
    }
}

export default HomePage;