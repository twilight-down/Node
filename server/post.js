//用于创建网站服务器的模块
const http = require('http');
//app对象就是网站服务器对象
const app = http.createServer();
//处理请求参数模块
const querystring = require('querystring');


//当客户端有请求时
app.on('request', (req, res) => {
    //post参数是通过事件的方式接收的
    //data 参数传递时触发data事件
    //end 传输完成之后触发end事件

    let postParams = '';

    req.on('data', params => {
        postParams += params;

    }); //事件处理函数
    req.on('end', () => {
        console.log(querystring.parse(postParams));

    });
    res.end('ok');

});
app.listen(3000);
console.log('网站服务器启动成功');