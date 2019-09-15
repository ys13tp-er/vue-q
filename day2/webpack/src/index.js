// 引入第三方模块
var $ = require('jquery')
// 引入css模块，非JS模块
require('./styles/index.css')
var template = require('./template/index.html')
// 引入自定义模块
var {
    plus,
    sub
} = require('./tools')
// 引入内置模块
// var fs = require('fs')
// console.log(fs)
console.log(plus(123, 678)) // 801
$('body').html(template)