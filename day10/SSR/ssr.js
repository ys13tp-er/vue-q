// 第 1 步：创建一个 Vue 实例
const Vue = require('vue')
const app = new Vue({
    data: {
        msg: "hello world"
    },
    template: `<div v-text="msg"></div>`
})

// 第 2 步：创建一个 renderer ssr必须要安装的一个插件
const renderer = require('vue-server-renderer').createRenderer()

// 第 3 步：将 Vue 实例渲染为 HTML
// renderToString接受你的app容器
renderer.renderToString(app, (err, html) => {
    if (err) throw err
    console.log(html)
    // => <div data-server-rendered="true">Hello World</div>
})