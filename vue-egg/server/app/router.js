module.exports = app => {
    const { router, controller } = app
    let oauth = app.middleware.auth()
    router.post("/login", controller.user.login)
    router.get("/getlist", oauth, controller.list.getlist)
    router.get("/godetail", controller.list.godetail)

    router.get("/count", controller.list.count)
    router.get("/shoplist", controller.list.shoplist)
}