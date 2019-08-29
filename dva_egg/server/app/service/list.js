const { Service } = require("egg")
class ListService extends Service {
    async getList(pagesize = 0, pagecount = 5) {
        // console.log(pagesize, pagecount)
        let $sql = `select * from productlist limit ${pagesize},${pagecount}`
        let result = await this.app.mysql.query($sql)
        return result
    }
}
module.exports = ListService