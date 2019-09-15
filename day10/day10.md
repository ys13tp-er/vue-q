# vuex

vuex modules 模块的改变

模块化仓库，让仓库变得更细分
```js
modules: {
    miniStore: {
        state: {
            name: 'aaaa'
        },
        getters: {}
    }
}
```

项目结构，可以把每个文件单独模块出来
```js
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modules from './modules'
Vue.use(Vuex)

// 初始化一个仓库
const store = new Vuex.Store({
    state,
    // 用于修改仓库里面的值
    mutations,
    actions,
    // 定义getters方法
    getters,
    // 模块，仓库里面小的仓库
    modules
})
// 导出仓库
export default store
```
配合辅助函数`mapGetters`
```js
computed: {
// 从vuex获取值手段
// author() {
//   // 从仓库把author获取到组件内部
//   return this.$store.getters.getAuthor;
// },
// 用辅助函数触发vuex中getters的getAuthor函数获取author
...mapGetters(["getAuthor", "getName"])
}
```

# SSR服务器渲染

我们写vue的单页面应用程序，由于SPA应用，它是一个异步渲染的页面，它是不利于SEO搜索引擎优化。
```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="/favicon.ico">
    <title>meituan</title>
  <link href="/0.fca61169e86e01761bd6.hot-update.js" rel="prefetch"><link href="/0.js" rel="prefetch"><link href="/1.fca61169e86e01761bd6.hot-update.js" rel="prefetch"><link href="/1.js" rel="prefetch"><link href="/2.js" rel="prefetch"><link href="/app.js" rel="preload" as="script"></head>
  <body>
    <noscript>
      <strong>We're sorry but meituan doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  <script type="text/javascript" src="/app.js"></script></body>
</html>
```
把浏览器的工作放到服务器端。

先安装服务器环境，并且需要安装vue和vue-server-renderer
```bash
npm install express --save
npm install vue vue-server-renderer --save
```
以前我们的实例是在前端执行的，现在利用`vue-server-renderer`变成在后端执行了，所有页面在没到达浏览器之前，就已经处理完成。
```js
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
```

你现在可以创建一个服务器
```js
var express = require('express');
var app = express();
app.get('/home', (req, res, next) => {
    res.send('hello world')
});
app.listen(8888);
console.log('run server');
```
- CSR Client Side Render
- SSR Server
```js
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
```

# 过渡

https://cn.vuejs.org/v2/guide/transitions.html

# 进入/离开 & 列表过渡

- 条件渲染 (使用 v-if)
- 条件展示 (使用 v-show)
- 动态组件 `<router-view><keep-alive>`
- 组件根节点

内置组件
```html
<transition></transition>
```

```html
<style>
    /* 进入的阶段 enter->enter-to */
    .abc-enter-active {
        /* 从animate.css放入已经定义好的动画 */
        animation: flip .5s;
    }

    /* 离开的阶段 leave->leave-to */
    .abc-leave-active {
        /* 从animate.css放入已经定义好的动画 */
        animation: flip .5s reverse;
    }
</style>
<div id="demo">
    <button @click="toggle">点击</button>
    <!-- 加载动画name -->
    <transition name="abc">
        <div v-if="bool">隐藏或者显示</div>
    </transition>
</div>
<script src="https://cn.vuejs.org/js/vue.js"></script>
<script>
    const vm = new Vue({
        el: "#demo",
        data: {
            bool: true
        },
        methods: {
            toggle() {
                this.bool = !this.bool
            }
        }
    })
</script>
```
