module.exports = (option, app) => {
    //权限认证
    return async function oauth(ctx, next) {
        const { header } = ctx.request
            // console.log(header)
            //判断header中是否有authorization和uid字段
        if (!header.authorization) {
            ctx.status = 401
            ctx.body = {
                code: 0,
                msg: "没有权限,缺少token"
            }
        } else if (!header.uid) {
            ctx.status = 401
            ctx.body = {
                code: 0,
                msg: "没有权限,缺少参数uid"
            }
        } else {
            const token = await ctx.service.user.verify(header.uid)
                // console.log(token, "---------")
            if (header.authorization === token) {
                await next()
            } else {
                //token与服务器缓存的不一致
                ctx.status = 401
                ctx.body = {
                    code: 0,
                    msg: "没有权限"
                }
            }
        }
    }
}