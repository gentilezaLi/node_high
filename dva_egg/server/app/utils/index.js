const md5 = require("md5")

module.exports.createToken = (uid) => {
    const token = JSON.stringify({
        //组织名称
        iis: "wzgc",
        //时间戳
        tim: new Date().getTime(),
        //用户唯一标识
        uid
    })
    return md5(token)
}