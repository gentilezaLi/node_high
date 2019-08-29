const md5 = require("md5")
module.exports.createToken = (id) => {
    let token = JSON.stringify({
        iss: 'bwwz',
        tim: new Date().getTime(),
        id
    })
    return md5(token)
}