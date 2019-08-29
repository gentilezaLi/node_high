const { Service } = require("egg")
class UserService extends Service {
    async findUP(username, password) {
        console.log(username, password, "**********")
            // const $sql = `select * from user where username='${username}' and password='${password}'`
        const $sql = `select * from user where username=? and password=?`
        const result = await this.app.mysql.query($sql, [username, password])
        return result;
    }
    async add(username, password) {
        const $sql = `insert into user (username, password) values (?,?)`
        const result = await this.app.mysql.query($sql, [username, password])
        return result;
    }
    async verify(uid) {
        // console.log(uid, "准备到sql")
        const $sql = `select token from user where id=?`
        const result = await this.app.mysql.query($sql, [uid])
            // console.log(result)
        return result[0].token
    }

    //根据id修改token值
    async saveToken(token, id) {
        const $sql = `update user set token=? where id=?`
        const result = await this.app.mysql.query($sql, [token, id])
        return result[0]
    }
}
module.exports = UserService