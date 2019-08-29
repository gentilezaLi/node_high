const md5 = require("md5")

module.exports.createToken = (id) => {
    const token = JSON.stringify({
        iis: 'bwwz',
        tim: new Date().getTime(),
        id
    })
    return md5(token)
}