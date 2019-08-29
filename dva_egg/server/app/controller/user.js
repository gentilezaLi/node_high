const { Controller } = require("egg")
const { createToken } = require("../utils/index")
class UserController extends Controller {
    //登录
    async login() {
            const { ctx } = this
            const { username, password } = ctx.request.body
                // console.log(username, password)
            const data = await ctx.service.user.findUP(username, password)
                //从返回出来的那一条数据中拿到相应的id
            const { id } = data[0]
                //拿到id就可以生成我们一个加密的token
            const token = createToken(id)
                //调用接口更新token到数据库
            const saveTokenResult = ctx.service.user.saveToken(token, id)

            if (data.length) {
                ctx.status = 200
                ctx.body = {
                    code: 1,
                    msg: 'login success!!!',
                    token,
                    uid: id
                }
            } else {
                ctx.status = 401
                ctx.body = {
                    code: 0,
                    msg: 'login failed!!!'
                }
            }


        }
        //注册
    async registry() {
        const { ctx } = this
        const { username, password } = ctx.request.body
            // console.log(username, password)
        const data = await ctx.service.user.add(username, password)
            // console.log(data, "**********")
        ctx.body = {
            code: 1,
            msg: 'registry success!!!'
        }

    }
}
module.exports = UserController