global.console.log('这是global对象下面的console。log方法输出的内容');

global.setTimeout(function() {
    console.log(123);
}, 2000)