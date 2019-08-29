const { Controller } = require("egg")
const { createToken } = require("../utils/index")
class UserController extends Controller {
    async login() {
        const { ctx } = this
        const { username, password } = ctx.request.body
        console.log(username, password, "**********")
        const result = await ctx.service.user.login(username, password)
        const { id } = result[0]
        const token = createToken(id)
        console.log(token, "****")
        await ctx.service.user.cunToken(token, id)

        if (result.length) {
            ctx.status = 200
            ctx.body = {
                code: 1,
                msg: "登录成功",
                token,
                id
            }
        } else {
            ctx.body = {
                code: 0,
                msg: "登录失败"
            }
        }
    }
}
module.exports = UserController