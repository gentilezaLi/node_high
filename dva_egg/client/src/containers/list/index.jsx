import React, { Component } from 'react'
import { getList } from "../../api/index"
import "../../assets/css/list.css"
import Scroll from 'react-bscroll'
import 'react-bscroll/lib/react-scroll.css'
export default class List extends Component {
    state = {
        list: [],
        pagesize: 0,
        pagecount: 5
    }

    componentDidMount() {
        const { pagesize, pagecount } = this.state
        getList(pagesize, pagecount).then(res => {
            console.log(res.data.res)
            this.setState({
                list: res.data.res
            })
        })

        this.scrollObj=this.refs.scroll.getScrollObj()
        this.scrollObj.on("scrollEnd",()=>{
            console.log(this.scrollObj.y,this.scrollObj.maxScrollY)
           if(this.scrollObj.y<this.scrollObj.maxScrollY+2000){
               setTimeout(()=>{
                   this.load()
               },2000)
           }
        })
        
    }
    load() {
        this.setState({
            pagesize: this.state.pagesize + 1
        }, () => {
            const { pagesize, pagecount, list } = this.state
            console.log(pagesize, "*******")
            const start = pagesize * pagecount
            getList(start, pagecount).then(res => {
                console.log(res.data.res)
                if (res.data.code === 1) {
                    this.setState({
                        list: [...list, ...res.data.res]
                    })
                } else {
                    console.log(res.data.msg)
                }

            })
        })

    }

    render() {
        let { list } = this.state
        return (
            <div className="list">
                <Scroll ref='scroll'>
                    {
                        list.map(item => {
                            return <p key={item.id}>{item.title}&nbsp; &nbsp; &nbsp; &nbsp; {item.price}&nbsp; &nbsp; &nbsp; &nbsp;  {item.count}</p>
                        })
                    }
                </Scroll>

                <button onClick={() => this.load()}>点击加载更多</button>
            </div>
        )
    }
}
