const { Controller } = require("egg")
const fs = require("fs")
const path = require("path")

//封装一个保存到服务器本地的方法
const saveAvater = (filename, image) => {
    const avaterPath = path.join(process.cwd(), 'app/public/avater', filename)
    fs.writeFileSync(avaterPath, image)
}
class UserController extends Controller {
    upload() {
        const { ctx } = this
        //把名字和路径结构出来
        // const file = ctx.request.files[0]
        const { filename, filepath } = ctx.request.files[0]
        const image = fs.readFileSync(filepath)
            //把前端上传的图片保存到服务器的静态资源里
        saveAvater(filename, image)


        ctx.body = {
            code: 1,
            msg: "upload success",
            picUrl: `public/avater/${filename}`
        }
    }
}
module.exports = UserController