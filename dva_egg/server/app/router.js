module.exports = app => {

    const { router, controller } = app

    const oauth = app.middleware.oauth()

    //爬虫
    router.get("/pa", controller.pachong.pa)

    //登录
    router.post("/user/login", controller.user.login)

    //注册
    router.post("/user/registry", controller.user.registry)

    //分页  搭载中间件
    router.get("/getList", oauth, controller.list.geList)
}