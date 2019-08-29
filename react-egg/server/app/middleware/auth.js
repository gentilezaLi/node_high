module.exports = (opt, app) => {
    //权限认证
    return async function oauth(ctx, next) {
        const { header } = ctx.request
            // console.log(header, "*********************")
        if (!header.authorization) {
            ctx.status = 401,
                ctx.body = {
                    code: 0,
                    msg: "没有权限，缺少token"
                }
        } else if (!header.id) {
            ctx.status = 401,
                ctx.body = {
                    code: 0,
                    msg: "没有权限，缺少id"
                }
        } else {
            const { authorization, id } = ctx.request.header
            const token = await ctx.service.user.verify(id)
            if (authorization == token) {
                await next()
            } else {
                console.log(authorization, token, "ooooooooooooooooooooooooo")
                    //服务器与缓存不一致
                ctx.status = 401,
                    ctx.body = {
                        code: 0,
                        msg: "没有权限"
                    }
            }
        }
    }
}