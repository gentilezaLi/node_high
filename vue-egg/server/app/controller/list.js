const { Controller } = require("egg")
class ListController extends Controller {
    async getlist() {
        const { ctx } = this
        const result = await ctx.service.list.getList()
        ctx.body = {
            result
        }
    }
    async godetail() {
        const { ctx } = this
        const { id } = ctx.request.query
        const result = await ctx.service.list.godetail(id)
        ctx.body = {
            result
        }
    }
    async count() {
        const { ctx } = this
        const { id, num } = ctx.request.query
        const result = await ctx.service.list.count(id, num)
        ctx.body = {
            msg: "操作成功",
            result
        }
    }
    async shoplist() {
        const { ctx } = this
        const result = await ctx.service.list.shoplist()
        ctx.body = {
            msg: "返回成功",
            result
        }
    }
}
module.exports = ListController