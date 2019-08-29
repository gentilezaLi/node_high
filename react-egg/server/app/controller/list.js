const { Controller } = require("egg")
class ListController extends Controller {
    async getList() {
        const { ctx } = this
        const { pagesize, pagecount } = ctx.request.query
        console.log(pagesize, pagecount, "*****")
        const result = await ctx.service.list.getlist(pagesize, pagecount)
        ctx.body = {
            code: 1,
            result
        }
    }
    async detail() {
        const { ctx } = this
        const { id } = ctx.request.query
        console.log(id, "**************")
        const result = await ctx.service.list.detail(id)
        ctx.body = {
            code: 1,
            result
        }
    }
    async val() {
        const { ctx } = this
        const { val } = ctx.request.query
        const result = await ctx.service.list.val(val)
        ctx.body = {
            code: 1,
            result
        }
    }
    async list() {
        const { ctx } = this
        const result = await ctx.service.list.list()
        ctx.body = {
            code: 1,
            result
        }
    }
    async count() {
        const { ctx } = this
        const { num, id } = ctx.request.query
        console.log(num, id, "后台接收到")
        const result = await ctx.service.list.count(num, id)
        ctx.body = {
            code: 1,
            result
        }
    }
    async note() {
        const { ctx } = this
        const result = await ctx.service.list.note()
        ctx.body = {
            code: 1,
            result
        }
    }
}
module.exports = ListController