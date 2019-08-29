import { getSession } from "../utils/index"

let data = {
    token: getSession('authorization') || null,
    id: getSession('id') || null,
    list: []
}
let loginReducer = (state = data, action) => {
    switch (action.type) {
        case "SAVETOKEN":
            state.token = action.data
            console.log(state, "token存进仓库了")
            return state

        case "SAVEID":
            state.id = action.data
            console.log(state, "id存进仓库了")
            return state

        case "SAVELIST":
            state.list = [...state.list, ...action.data]
            console.log(state, "list列表存进仓库了")
            return state
        default:
            return {...state }

    }
}
export default loginReducer;