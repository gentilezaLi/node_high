const { Controller } = require('egg')
const fs = require('fs')
const path = require('path')
const axios = require("axios")
const cheerio = require("cheerio")
const superagent = require('superagent')
const https = require("https")

class HomeController extends Controller {
    async pa() {
        return new Promise((resolve, reject) => {
                const { ctx } = this
                //抓取页面
                superagent
                    .get("https://cnodejs.org/")
                    .end((err, res) => {
                        let $ = cheerio.load(res.text)
                        let list = []
                        $('.cell').map((item, index) => {
                            list.push({
                                author: $(index).find(".pull-left").attr('href').slice(6),
                                title: $(index).find(".topic_title").text().replace(/\n/, "").trim(),
                                href: $(index).find(".pull-right").attr("href") || ''
                            })
                        })
                        resolve(list)
                        ctx.body = {
                            code: 1,
                            msg: "pa success",
                            list
                        }
                    })


            })
            //http请求
            // https.get("https://cnodejs.org/", res => {
            //     let chuncks = ''
            //     res.on('data', (chunck) => {
            //         chuncks += chunck
            //     })
            //     res.on('end', () => {
            //         let filepath = path.join(process.cwd(), "web.html")
            //         fs.writeFileSync(filepath, chuncks)
            //     })
            // })


    }
}
module.exports = HomeController