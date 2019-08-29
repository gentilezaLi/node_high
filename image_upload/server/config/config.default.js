const config = {}
config.keys = "123"
config.security = {
    csrf: {
        queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
        bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
        enable: false
    },
}
config.multipart = {
    mode: 'file'
}
config.bodyParser = {
    'jsonLimit': '1mb',
    'formLimit': '1mb'
}

module.exports = config