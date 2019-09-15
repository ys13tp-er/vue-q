var express = require('express');
var router = express.Router();

// 要把这个实例在后端生成html结构
// var vm = require('../public/javascripts/index');
const Vue = require('vue')
const vm = new Vue({
  data: {
    msg: "姚 一一一一一一"
  },
  template: `<div v-text="msg"></div>`
})

// 读取模板
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./routes/index.template.html', 'utf-8')
});
/* GET home page. */
router.get('/', function (req, res, next) {
  renderer.renderToString(vm, (err, html) => {
    if (err) throw err
    console.log(html)
    // 直接出一个完整的模板
    res.send(html)
    // => <div data-server-rendered="true">Hello World</div>
  })
});

module.exports = router;