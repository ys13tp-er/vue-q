var express = require('express');
var app = express();

const Vue = require('vue')
const vm = new Vue({
    data: {
        msg: "hello world1231313131321"
    },
    template: `<div v-text="msg"></div>`
})
const renderer = require('vue-server-renderer').createRenderer()

app.get('/home', (req, res, next) => {
    renderer.renderToString(vm, (err, html) => {
        if (err) throw err
        res.send(html)
        // console.log(html)
        // => <div data-server-rendered="true">Hello World</div>
    })
});
app.listen(8888);
console.log('run server');