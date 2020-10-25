const http = require('http');
const url = require('url');
const path = require('path');
const fa = require('fs');
const mime = require('mime');
const app = http.createServer();
app.on('request', (req, res) => {

    res.writeHead(200, {
        'content-type': 'text/html;charset=utf-8'
    });
    // res.end(url.parse(req.url).pathname);
    //获取用户的请求路径
    let pathname = url.parse(req.url).pathname;
    // path.join(__dirname, 'public', pathname);

    pathname = pathname == '/' ? 'default.html' : pathname;

    // res.end(path.join(__dirname, 'public', pathname));
    let realPath = path.join(__dirname, 'public', pathname);

    let type = mime.getType(realPath);

    fa.readFile(realPath, (error, result) => {
        if (error != null) {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf-8'
            });
            res.end('文件读取失败');
            return;
        }
        res.writeHead(200, {
            'content-type': type
        });
        res.end(result);
    })

});
app.listen(3000);
console.log('服务器启动成功');