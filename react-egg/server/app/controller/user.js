const { Controller } = require("egg")
const { createToken } = require("../utils")
class UserController extends Controller {
    async login() {
        const { ctx } = this
        const { username, password } = ctx.request.body
        const result = await ctx.service.user.findUP(username, password)
        let { id } = result[0]
        let token = createToken(id)
        await ctx.service.user.cuntoken(id, token)
        if (result.length) {
            ctx.status = 200
            ctx.body = {
                code: 1,
                msg: "登录成功",
                token,
                id
            }
        } else {
            ctx.status = 401
            ctx.body = {
                code: 0,
                msg: "登录失败"
            }
        }
    }
    async registry() {
        const { ctx } = this
        const { username, password } = ctx.request.body
        const result = await ctx.service.user.add(username, password)
        console.log(result)
        ctx.body = {
            code: 1,
            msg: "添加成功"
        }
    }
    async update() {
        const { ctx } = this
        const { id, username, password } = ctx.request.body
        const result = await ctx.service.user.update(id, username, password)
        console.log(result)
        ctx.body = {
            code: 1,
            msg: "更新成功"
        }
    }
    async del() {
        const { ctx } = this
        const { id } = ctx.request.query
        console.log(id, "*********")
        const result = await ctx.service.user.del(id)
        console.log(result)
        ctx.body = {
            code: 1,
            msg: "删除成功"
        }
    }
}
module.exports = UserController