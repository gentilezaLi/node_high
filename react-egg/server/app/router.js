module.exports = app => {
    const { router, controller } = app
    const oauth = app.middleware.auth()

    router.get("/ceshi", controller.ceshi.ce)
    router.post("/user/login", controller.user.login)
    router.post("/user/registry", controller.user.registry)
    router.post("/user/update", controller.user.update)
    router.get("/user/del", controller.user.del)

    //获取列表
    router.get("/getList", oauth, controller.list.getList)

    //详情
    router.get("/detail", controller.list.detail)

    //模糊搜索
    router.get("/val", controller.list.val)
    router.get("/getevery", controller.list.list)

    //保存++--
    router.get("/count", controller.list.count)

    //num！=0
    router.get("/note", controller.list.note)

}