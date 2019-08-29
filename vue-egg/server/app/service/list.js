const { Service } = require("egg")
class ListService extends Service {
    async getList() {
        const $sql = `select * from productlist`
        const result = await this.app.mysql.query($sql)
        return result
    }
    async godetail(id) {
        const $sql = `select * from productlist where id=${id}`
        const result = await this.app.mysql.query($sql)
        return result[0]
    }
    async getToken(id) {
        const $sql = `select * from user where id=${id}`
        const result = await this.app.mysql.query($sql)
        return result[0].token
    }
    async count(id, num) {
        const $sql = `update productlist set num=? where id=?`
        const result = await this.app.mysql.query($sql, [num, id])
        return result
    }
    async shoplist() {
        const $sql = `select * from productlist where num!=0`
        const result = await this.app.mysql.query($sql)
        return result
    }
}
module.exports = ListService