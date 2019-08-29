//合并对象
const formatOpt = params => {
    let temp = ''
    for (let key in params) {
        temp += `${key}=${params[key]}&`
    }
    return temp
}

//默认配置
const defaultConfig = {
    callbackName: "jsonpCallback"
}

//封装jsonp
const jsonp = (url, params, options = defaultConfig) => {
    //返回一个链式调用的promise对象
    return new Promise((resolve, reject) => {
        //判断地址栏有没有问号
        const hasParams = url.indexOf('?') > -1
            //将前端传递querystring查询字符串的参数，拼接到地址栏
        url += hasParams ?
            formatOpt(params, options.callbackName) :
            "?" + formatOpt(params, options.callbackName)
        url += `callback=${options.callbackName}`
            //动态创建script标签
        const script = document.createElement('script')
            //设置接口的请求地址
        script.setAttribute('src', url)

        //设置请求jsonp接口的回调函数 挂window上
        window[options.callbackName] = result => {
                //请求jsonp接口成功后，删除该函数，不污染window
                delete window[options.callbackName]
                    //删除页面中动态创建的script标记
                document.body.removeChild(script)
                    //判断接口的数据返回
                if (result) {
                    resolve(result)
                } else {
                    reject("服务器没有信息返回")
                }
            }
            //动态创建script标记，错误的监听
        script.addEventListener('error', () => {
                delete window['jsonpCallback']
                document.body.removeChild(script)
                reject("服务器加载失败！！！！！")
            })
            //向页面添加创建的script标记
        document.body.append(script)
    })
}

//封装ajax
const ajax = (url, params = null, type = "GET") => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(type, url)
            //get请求
        if (type === 'GET' && params) {
            //判断地址栏有没有问号
            const hasParams = url.indexOf('?') > -1
                //将前端传递querystring查询字符串的参数，拼接到地址栏
            url += hasParams ? formatOpt(params) : "?" + formatOpt(params)
            xhr.send(null)
        }

        //post请求
        if (type === "POST") {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            xhr.send(postDataFormat(params))
        }

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) return
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText))
            } else {
                reject(new Error('request failed!!!'))
            }
        }
    })
}

//post合并对象
function postDataFormat(obj) {
    if (typeof obj != 'object') {
        alert('输入的参数必须是对象')
        return
    }
    //输入参数是对象
    // 支持有FormData的浏览器（Firefox 4+ , Safari 5+, Chrome和Android 3+版的Webkit）
    if (typeof FormData == 'function') {
        var data = new FormData()
        for (var attr in obj) {
            data.append(attr, obj[attr])
        }
        return data
    } else {
        // 不支持FormData的浏览器的处理
        var arr = new Array()
        var i = 0
        for (var attr in obj) {
            arr[i] = encodeURIComponent(attr) + '=' + encodeURIComponent(obj[attr])
        }
        return arr.join('&')
    }
}