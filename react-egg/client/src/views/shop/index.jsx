import React, { Component } from 'react'
import { noto0 } from "../../api/index"
export default class shop extends Component {
    state = {
        list: [],
        znum: 0,
        zprice: 0,
        allchecked: false
    }
    componentDidMount() {
        noto0().then(res => {
            let newList = res.data.result;
            newList.map(item => item.ischecked = false);
            this.setState({
                list: newList
            })
        })
    }
    changeppp(id, e) {
        let newList = this.state.list;
        let index = newList.findIndex(item => item.id === id)
        newList[index].ischecked = e.target.checked
        this.setState({
            list: newList
        }, () => {
            let num = 0;
            let price = 0;
            this.state.list.forEach(item => {
                if (item.ischecked) {
                    num += item.num
                    price += item.price*item.num
                }
            });
            this.setState({
                znum: num,
                zprice: price
            })
        })
        let flag = this.state.list.every(item => item.ischecked)
        this.setState({
            allchecked: flag
        })
    }
    changeallppp(e) {
        this.setState({
            allchecked: e.target.checked
        }, () => {
            let num = 0;
            let price = 0;
            let newList = this.state.list;
            newList.forEach(item => {
                item.ischecked = this.state.allchecked;
                if (item.ischecked) {
                    num += item.num
                    price += item.price*item.num
                }
            })
            this.setState({
                list: newList,
                znum: num,
                zprice: price
            })
        })
    }
    
    render() {
        console.log()
        return (
            <div>
                shop
                {this.state.list.map((item, index) => {
                    return <h4 key={item.id}>
                        <input type="checkbox" checked={item.ischecked}  onChange={
                            this.changeppp.bind(this, item.id)
                        } />
                        {item.title}  <b>{item.ischecked}</b> &nbsp;&nbsp;
                        数量：{item.num}&nbsp;&nbsp;价钱{item.price}&nbsp;&nbsp;小计：{item.num * item.price}
                    </h4>
                })}
                <p>总数量：{this.state.znum}</p>
                <p>总：{this.state.zprice}</p>
                全选<input type="checkbox"  checked={this.state.allchecked} onChange={this.changeallppp.bind(this)} />

            </div>
        )
    }
}
