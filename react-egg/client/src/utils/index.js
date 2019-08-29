export function getSession(key) {
    return sessionStorage.getItem(key)
}
export function setSession(key, val) {
    sessionStorage.setItem(key, val)
}