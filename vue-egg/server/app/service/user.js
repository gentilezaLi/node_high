const { Service } = require("egg")
class UserService extends Service {
    async login(username, password) {
        const $sql = `select * from user where username=? and password=?`
        const result = await this.app.mysql.query($sql, [username, password])
        return result
    }
    async cunToken(token, id) {
        console.log(token, id, "99999999")
        const $sql = `update user set token=? where id=?`
        const result = await this.app.mysql.query($sql, [token, id])
        return result
    }
}
module.exports = UserService