export function getSession(val) {
    return sessionStorage.getItem(val)
}

export function setSession(val, key) {
    sessionStorage.setItem(val, key)
}