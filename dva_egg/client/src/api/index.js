import axios from "axios"
import { baseUrl } from "../config/index"

//引入仓库
import store from "../store/model/login"
console.log(store, "*********")

//登录
export function loginService(params) {
    const url = baseUrl + "/user/login"
    return axios.post(url, params)
}

//注册
export function registryService(params) {
    const url = baseUrl + "/user/registry"
    return axios.post(url, params)
}

//获取list
export async function getList(obj) {
    let { pagesize, pagecount } = obj
    const url = baseUrl + "/getList"
    const { token, uid } = store.state
    return axios.get(url, {
            headers: {
                authorization: token,
                uid
            },
            params: { pagesize, pagecount }
        }

    )
}