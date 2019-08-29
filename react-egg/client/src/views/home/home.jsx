import React, { Component } from 'react'
import { getList } from "../../api/index"
import { connect } from "react-redux"
import "../../assets/css/home.css"

import BScroll from "better-scroll"

// import BScroll from "better-scroll/dist/bscroll.min.js"
class home extends Component {
    state = {
        pagesize: 0,
        pagecount: 5,
        shang: '上拉加载',
        xia: "下拉刷新"
    }
    componentDidMount() {
        getList({
            pagesize: 0,
            pagecount: 5
        }).then(res => {
            // console.log(res.data)
            this.props.saveList(res.data.result)
        })
        //调用上下拉
        this.bs()

        // let scroll = new BScroll('.l-c', {
        //     scrollY: true,
        //     click: true,
        //     pullUpLoad: {
        //         threshold: -30
        //     },
        //     pullDownRefresh: {
        //         threshold: 50,
        //         stop: 50
        //     }
        // })
        // scroll.on("pullingUp", () => {
        //     this.setState({
        //         shang: "正在加载"
        //     },()=>{
        //         setTimeout(()=>{
        //             this.loadmore()
        //         },2000)
        //     })
        //     setTimeout(() => {
        //         scroll.finishPullUp()
        //     }, 2000);
        // })

    }
    loadmore() {
        this.setState({
            pagesize: this.state.pagesize + 1
        }, () => {
            let start = (this.state.pagesize - 1) * this.state.pagecount
            getList({ pagesize: start, pagecount: this.state.pagecount }).then(res => {
                console.log(res.data)
                this.props.saveList(res.data.result)
            })
        })
    }
    bs() {
        let BS = new BScroll('.l-c', {
            //下拉刷新功能
            pullDownRefresh: {
                threshold: 90,
                stop: 40
            },
            //上拉加载功能
            pullUpLoad: {
                threshold: -90,
                stop:-40
            }
        })
        //上拉加载
        BS.on("pullingUp", () => {
            console.log("object");
            this.setState({ 
                shang: "正在加载"
            })
            // setTimeout(() => {
            //     this.setState({
            //         shang: "上拉加载"
            //     },()=>{
            //         this.loadmore()
            //         BS.refresh()
            //          BS.finishPullUp()
            //     })
                
            // }, 2000)
        })

        //下拉刷新
        BS.on("pullingDown",()=>{
            this.setState({
                xia: "正在刷新"
            })
            setTimeout(() => {
                this.setState({
                    shang: "下拉刷新"
                })
                this.loadmore()
                BS.refresh()
                BS.finishPullDown()
            }, 1500)
        })
    }
goDetail=(id)=>{
    console.log(id)
    this.props.history.push(`/list/detail/${id}`)
}
    render() {
        console.log(this.props.list, "取出来数据准备渲染")

        return (
            <div className='home'>

                <div className="shang">{this.state.xia}</div>
                {
                    this.props.list.list && this.props.list.list.map((item, index) => {
                        return <p key={index} onClick={()=>{this.goDetail(item.id)}}>
                        {item.title}
                        </p>
                    })
                }
                <div className="xia">{this.state.shang}</div>
                {/* <button onClick={this.loadmore.bind(this)}>加载更多</button> */}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        list: state.loginReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        saveList: (res) => {
            dispatch({ type: "SAVELIST", data: res })
        }
    }
}
home = connect(mapStateToProps, mapDispatchToProps)(home)
export default home
