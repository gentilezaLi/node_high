import axios from "axios"
import { getSession } from "../utils"
export function login(params) {
    let url = "/api/login"
    return axios.post(url, params)
}

export function getlist() {
    let url = "/api/getlist"
    let token = getSession("token")
    let id = getSession("id")

    return axios.get(url, {
        headers: {
            token,
            id
        }
    })
}

export function dodetail(uid) {
    let url = "/api/godetail?id=" + uid
    return axios.get(url)
}

export function jjjj(num, id) {
    let url = `/api/count?num=${num}&id=${id}`
    return axios.get(url)
}
export function shop() {
    let url = `/api/shoplist`
    return axios.get(url)
}