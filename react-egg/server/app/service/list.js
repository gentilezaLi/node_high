const { Service } = require("egg")
class ListService extends Service {
    async getlist(pagesize, pagecount) {
        console.log(pagesize, pagecount, "*")
        const $sql = `select * from productlist limit ${pagesize},${pagecount}`
        const result = await this.app.mysql.query($sql)
        return result
    }
    async detail(id) {
        const $sql = `select * from productlist where id=${id}`
        const result = await this.app.mysql.query($sql)
        return result
    }
    async val(val) {
        const $sql = `select * from productlist where title like '%${val}%'`
        const result = await this.app.mysql.query($sql)
        return result
    }
    async list() {
        const $sql = `select * from productlist`
        const result = await this.app.mysql.query($sql)
        return result
    }
    async count(num, id) {
        const $sql = `update productlist set num=? where id=?`
        const result = await this.app.mysql.query($sql, [num, id])
        return result
    }
    async note() {
        const $sql = `select * from productlist where num!=0`
        const result = await this.app.mysql.query($sql)
        return result
    }
}
module.exports = ListService