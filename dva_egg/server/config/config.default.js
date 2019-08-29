const config = {}
config.keys = "1"
config.security = {
    csrf: {
        queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
        bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
        enable: false
    },
}
config.mysql = {
    client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '123321',
        database: 'bigegg',
    },
    app: true,
    agent: false,
}
config.redis = {}
module.exports = config