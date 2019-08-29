export function SAVETOKEN(payload) {
    return {
        type: 'login/saveToken',
        payload
    }
}
export function SAVEUID(payload) {
    return {
        type: 'login/saveUid',
        payload
    }
}