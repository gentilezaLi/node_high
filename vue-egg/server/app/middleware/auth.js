module.exports = (option, app) => {
    return async function auth(ctx, next) {
        let { header } = ctx.request
        console.log(header.token, header.id)
        if (!header.token && !header.id) {
            ctx.status = 401
            ctx.body = {
                code: 0,
                msg: "没有权限"
            }
        } else {
            const result = await ctx.service.list.getToken(header.id)
            console.log(result)
            if (header.token === result) {
                await next()
            }
        }
    }
}