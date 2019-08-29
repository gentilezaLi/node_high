import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import { login, getlist, dodetail } from "../api/index"
import { setSession, getSession } from "../utils/index"
export default new Vuex.Store({
    state: {
        list: [],
        detlist: {},
        token: getSession('token') || '',
        id: getSession('id') || ''
    },
    mutations: {
        saveHeader(state, payload) {
            state.token = payload.token
            state.id = payload.id
            setSession("token", payload.token)
            setSession("id", payload.id)
        },
        saveList(state, payload) {
            state.list = payload
        },
        godetail(state, payload) {
            state.detlist = payload
            console.log(state.detlist)
        }

    },
    actions: {
        save({ commit }, payload) {
            return new Promise((resolve, rejecct) => {
                login(payload).then(res => {
                    console.log(res.data, "获取到数据")
                    commit("saveHeader", res.data)
                    resolve()
                })
            })
        },
        savelist({ commit }, payload) {
            new Promise((resolve, reject) => {
                getlist().then(res => {
                    console.log(res.data.result, "11111111111111111111111111111111111")
                    commit("saveList", res.data.result)
                })
                resolve()
            })
        },
        detail({ commit }, payload) {
            console.log(payload, "*****")
            return new Promise((resolve, reject) => {
                dodetail(payload).then(res => {
                    console.log(res.data.result)
                    commit("godetail", res.data.result)
                    resolve()
                })
            })
        }
    },

})