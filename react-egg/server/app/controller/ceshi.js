const { Controller } = require("egg")
class CeshiController extends Controller {
    ce() {
        const { ctx } = this
        ctx.body = {
            code: 1,
            msg: "测试成功"
        }
    }
}
module.exports = CeshiController