import { getSession } from "../../utils/index"
import { getList } from "../../api/index"
// console.log(getList)
export default {
    namespace: 'login',
    state: {
        token: getSession('authoriaztion') || null,
        uid: getSession('uid') || null,
        list: []
    },
    effects: {
        * getProList(action, { put, call }) {
            const result = yield call(getList, action.payload)
                // console.log(result.data.res, "拿到请求回来的数据")
            yield put({
                type: "saveList",
                payload: result.data.res
            })
        }
    },
    reducers: {
        //保存token
        saveToken(state, action) {
            return {
                ...state,
                token: action.payload
            }
        },
        //保存uid
        saveUid(state, action) {
            return {
                ...state,
                uid: action.payload
            }
        },
        //保存list数据
        saveList(state, { payload }) {
            return {
                ...state,
                list: [...state.list, ...payload]
            }
        }
    }
}