const fs = require('fs');
const path = require('path');
fs.writeFile('./write.text', 'read me i am here', err => {
    if (err === null) {
        console.log('写入成功');
    }
    console.log('写入失败');
})