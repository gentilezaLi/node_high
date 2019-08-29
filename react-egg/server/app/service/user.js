const { Service } = require("egg")
class UserService extends Service {
    async findUP(username, password) {
        console.log(username, password)
        const $sql = `select * from user where username=? and password=?`
        const result = await this.app.mysql.query($sql, [username, password])
        return result
    }
    async add(username, password) {
        console.log(username, password)
        const $sql = `insert into user (username, password) values (?,?)`
        const result = await this.app.mysql.query($sql, [username, password])
        return result
    }
    async update(id, username, password) {
        console.log(id, username, password)
        const $sql = `update user set username=?,password=? where id=?`
        const result = await this.app.mysql.query($sql, [username, password, id])
        return result
    }
    async del(id) {
        console.log(id)
        const $sql = `delete from user where id=?`
        const result = await this.app.mysql.query($sql, [id])
        return result
    }

    //更新token
    async cuntoken(id, token) {
        const $sql = `update user set token=? where id=?`
        const result = await this.app.mysql.query($sql, [token, id])
        return result
    }

    //根据前台传过来的id来到数据库查询
    async verify(id) {
        const $sql = `select * from user where id=?`
        const result = await this.app.mysql.query($sql, [id])
        return result[0].token

    }

}
module.exports = UserService