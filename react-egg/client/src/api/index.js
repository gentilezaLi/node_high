import axios from "axios"
import { getSession } from "../utils"


//登录
export function loginService(params) {
    let url = "/user/login"
    return axios.post(url, params)
}

//注册
export function registryService(params) {
    let url = "/user/registry"
    return axios.post(url, params)
}

//获取列表数据
export function getList(obj) {
    let { pagesize, pagecount } = obj
    let url = "/getList"
    let authorization = getSession('authorization')
    let id = getSession('id')
    return axios.get(url, {
        headers: {
            authorization,
            id
        },
        params: { pagesize, pagecount }
    })
}

//跳详情
export function goDetail(id) {
    const url = "/detail"
    return axios.get(url, {
        params: {
            id
        }
    })
}

//模糊
export function val(val) {
    const url = "/val"
    return axios.get(url, {
        params: {
            val
        }
    })
}

//所有list
export function getevery() {
    const url = "/getevery"
    return axios.get(url)
}
//+--
export function jiajian(num, id) {
    console.log(num, id, "axios")
    const url = `/count?num=${num}&id=${id}`
    return axios.get(url)
}
//note num不为0
export function noto0() {
    const url = `/note`
    return axios.get(url)
}