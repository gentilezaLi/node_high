const { Controller } = require('egg')
class ListController extends Controller {
    async geList() {
        let { ctx } = this
        let { pagesize, pagecount } = ctx.request.query
        console.log(pagesize, pagecount, "*")
        let res = await ctx.service.list.getList(pagesize, pagecount)
        if (res.length == 0) {
            ctx.body = {
                code: 0,
                msg: "没有数据了"
            }
        } else {
            ctx.body = {
                code: 1,
                msg: "成功",
                res
            }
        }

    }
}
module.exports = ListController