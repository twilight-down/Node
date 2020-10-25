//引入http模块
const http = require('http');
// const { url } = require('inspector');
//创建网站服务器
const app = http.createServer();
//
const url = require('url');
//为网站服务器添加请求事件功能
//1 获取请求方式
//2获取请求地址
app.on('request', (req, res) => {
    //获取请求方式
    const method = req.method.toLowerCase(); //得到的是一个大写的GET
    //获取请求地址
    const pathname = url.parse(req.url).pathname;

    //防止乱码的出现
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf-8'
    });

    if (method == 'get') {
        if (pathname == '/' || pathname == '/index') {
            res.end('<h2>welcome to index/欢迎来到首页</h2>');
        } else if (pathname == '/list') {
            res.end('<h2>welcome to list </h2>');
        } else {
            res.end('<h2>Sorry 404 Not Found</h2>');
        }

    } else if (method == 'post') {
        if (pathname == '/' || pathname == '/index') {
            res.end('<h2>welcome to index/欢迎来到首页</h2>');
        } else if (pathname == '/list') {
            res.end('<h2>welcome to list </h2>');
        } else {
            res.end('<h2>Sorry 404 Not Found</h2>');
        }

    }
});

app.listen(3000);
console.log('服务器启动成功');