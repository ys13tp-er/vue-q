// 引入第三方模块;
const $ = require('jquery');
// 引入自定义模块
const {
    sum,
    sub
} = require('./tools');
//不能打包原生模块
// const fs = require('fs')
// console.log(fs)
// 引入自定义模块
console.log(sum(10, 50));
$('body').html('hello world');