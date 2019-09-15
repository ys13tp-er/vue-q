# 全局API

它是Vue提供的静态方法，Vue函数拥有的属性值

## Vue.extend()

全局定义组件
```js
Vue.component('xx',{
    // 选项
})
```
```js
var myFooter = {
    // 选项
    data() {
        return {
            name: '第一个组件'
        }
    },
    template: `
        <div>
            <p v-text="name"></p>
        </div>
    `
}
// 跟上面作用是等价的，但是含义不一样，一个是对象，一个是组件的选项
var myFooter = Vue.extend({
    // 选项
    data() {
        return {
            name: '第一个组件'
        }
    },
    template: `
        <div>
            <p v-text="name"></p>
        </div>
    `
})
// 选项放入一个自定义标签，并让它初始化
Vue.component('my-footer', myFooter)
```

## Vue.version

```js
new Vue({
    el: "#demo",
    data: {
        version: Vue.version
    },
    template: `
        <div>
            <p v-text="version"></p>
        </div>
    `
})
```

# Vue.nextTick

我们更新了M，V不是立即更新的，会有一定延时，需要局部`this.$nextTick`，全局监听`Vue.nextTick`去监听V层的变化
```js
changeValue() {
    // M层变动的时候，V不是立即更新
    // 更新M
    this.version = '1.2.0'
    // <p>2.6.10</p> <button>Ok</button>
    console.log(this.$el.innerHTML)
    this.$nextTick(function () {
        // 更新V
        // DOM 更新了
        console.log('DOM更新了')
        console.log(this.$el.innerHTML)
    })
}
```

# Vue.set( target, propertyName/index, value )

第一个参数，可以放对象或者数组，第二个是属性，第三个是属性值

```js
changeValue() {
    let obj = {
        name: 'yao',
        skill: ['ps', 'js', 'css']
    }
    console.log(obj)
    // 更新对象 只要是对象或者数组，都可以用这个方法来改对象
    Vue.set(obj, 'name', 'jing')
    console.log(obj)
}
```

# Vue.delete( target, propertyName/index )

```js
changeValue() {
    let obj = {
        name: 'yao',
        skill: ['ps', 'js', 'css']
    }
    console.log(obj)
    // 更新对象 只要是对象或者数组，都可以用这个方法来改对象
    // 删掉obj的name属性值
    Vue.delete(obj, 'name')
    console.log(obj)
}
```

# Vue.directive( id, [definition] ) 面试会问到的

自定义指令，指令，一般不需要自己去定义指令，内置指令一般是足够我们的使用了

内置指令，个人在项目里面不是建议使用

- v-model v-on
- v-if v-show v-for v-text

指令的本质是对同一个相似的DOM操作的封装，所有能用指令完成都会有其他方法来解决

```js
// 全局自定义指令 第一个指令的名字
Vue.directive('yao', (el, binding, vnode) => {
    // el就是指令绑定那个节点
    // binding就是传给指令的那个值
    el.style.color = binding.value
    console.log(el, binding, vnode)
    console.log('触发指令')
    // 这里将会被 `bind` 和 `update` 调用
})

Vue.directive('showw', (el, binding, vnode) => {
    // el就是指令绑定那个节点
    // binding就是传给指令的那个值
    el.style.display = binding.value ? 'block' : 'none'
    console.log(el, binding, vnode)
    console.log('触发指令')
    // 这里将会被 `bind` 和 `update` 调用
})
```

# Vue.filter( id, [definition] )

过滤器，把一个数据从旧状态变成新状态，computed计算属性

双花括号插值{{}}和 v-bind 表达式 (后者从 2.1.0+ 开始支持)

所有过滤器都可以用计算属性解决，过滤器局限性，因为只能用{{}}和 v-bind 
```js
// 货币过滤器
Vue.filter('currency', (value) => {
    // value接受传进来的数据，然后处理返回
    return `￥${value}`
})
new Vue({
    el: "#demo",
    data: {
        version: Vue.version
    },
    template: `
        <div>
            <p>{{version}}</p>
            <p>过滤器就是用|管道字符</p>
            <p>{{version|currency}}</p>
        </div>
    `
})
```
```html
<!-- 正确的写法 -->
<p>{{version|currency}}</p>
<!-- 错误的写法 -->
<p v-text="version|currency"></p>
```

# Vue.use()

如果引入第三方插件，轮播图，cookie，

- vuex        仓库
- vue-router  路由
- vue-axios
- vue-swiper
- vue-scroll

vue常用的插件，里面封装功能，常用的方法，封装进去

先引入vue再引入插件，然后再使用`Vue.use(xxx)`注册该插件，激活插件
```js
var Vue = require('vue')
var VueRouter = require('vue-router')
// 不要忘了调用此方法
Vue.use(VueRouter)
```

[官方收录的插件库awesome-vue](https://github.com/vuejs/awesome-vue#components--libraries)

如果你希望去拓展Vue本身没有的功能，那么你可以使用一个对象，配合`Vue.use()`来创建插件，模块化和组件化高度体现，用于Vue构建生态

```js
// 定义一个对象
var myPlugin = {
    // 安装 必须得有
    install(Vue, options) {
        // new Vue选项
        // 放Vue的属性上
        Vue.plus = function (a, b) {
            // 逻辑...
            return a + b
        }
        // 放原型链上
        Vue.prototype.$plus = function (a, b) {
            // 逻辑...
            return a + b
        }
        // 组件
        Vue.component(options.name, {
            template: `
                <header>头部</header>
            `
        })
    }
}
// 插件本质对象
Vue.use(myPlugin, {
    name: 'my-header'
})
var vm = new Vue({
    el: "#demo",
    data: {
        version: Vue.version
    },
    template: `
        <div>
            <p v-text="version"></p>
            <my-header></my-header>
        </div>
    `
})
```
# Vue.mixin

混入，不建议应用上使用

```js
Vue.mixin({
    // 选项
    data() {
        return {
            name: 'yao'
        }
    },
    // 这里面会监听
    watch: {
        name() {
            console.log(this.name)
        }
    },
    methods: {
        test() {
            console.log(1)
        }
    },
})
// new Vue本质是一个组件 容器 根组件
var vm = new Vue({
    el: "#demo",
    data: {
        version: Vue.version
    },
    template: `
        <div>
            <p v-text="name"></p>
            <input v-model="name" />
            <button @click="test">ok</button>
        </div>
    `,
    methods: {
        test() {
            console.log(2)
        }
    },
    watch: {
        name() {
            console.log(11111)
        }
    }
})
```

# Vue.compile

`Vue`支持把html结构转化为`JSX`，构造虚拟DOM对象的函数

```js
Vue.compile('<div><span>{{ msg }}</span></div>')
```
```
对象=Vue.compile(字符串)
```
字符串做对比
```html
<div><span>123</span></div>
<div><span>456</span></div>
```
对象对比比较好处理，Vue想办法把html模板转化为函数，函数接受(M)执行诞生一个对象，对象描述真实DOM结构，把对象渲染到真实DOM结构里面，空间Double，首次加载会比较慢，第二次就会加快会做镜像比较，然后差异化更新
```js
{
    tag:'div',
    children:[{
        tag: 'span',
        text: '123'
    }]
}

{
    tag:'div',
    children:[{
        tag: 'span',
        text: '456'
    }]
}
```

# Vue.observable

Vue.observable接受一个对象，里面存放着数据，这个state，你可以理解为一个仓库，2.6.0新增

```js
// 全局数据
const state = Vue.observable({
    count: 0
})

// 以前我们会把数据放入一个data或者computed里面 局部数据
new Vue({
    data:{}
})
```

你可以配合计算属性把仓库的值导入到组件或者容器里面，它就可以实现组件跨代通信

# 生命周期（重点）

一个根容器，所有的组件都活在一个根容器里面
```js
new Vue({
    tmeplate:`<myheader v-if="bool"></myheader>`
})
```
这些组件除了诞生，还要消失，每个容器和组件都会经过一个生命周期(诞生->消亡)

|生命周期||
|-|-|
|beforeCreate|创建前|
|created|创建后|
|||

```js
var vm = new Vue({  
    el: '#demo',
    data: {
        name: '生命周期'
    },
    // template: `
    //     <div>{{name}}</div>
    // `,
    render(createElement) {
        console.log('--------render--------')
        var vnode = createElement('div', null, this.name)
        console.log('vnode', vnode)
        return vnode
    },
    // 钩子 容器诞生前 组件诞生前
    // 诞生前，没数据没视图
    beforeCreate() {
        console.log('--------beforeCreate--------')
        console.log('V', this.$el)
        console.log('M', this.$data)
    },
    created() {
        // 视图没有
        // 数据就位了
        console.log('--------created--------')
        console.log('V', this.$el)
        console.log('M', this.$data)
    },
    beforeMount() {
        // 模板准备中，但是拿到挂载点
        // 数据也准备
        // 数据放进模板了，但是模板还没挂载到真实DOM
        console.log('--------beforeMount--------')
        console.log('V', this.$el)
        console.log('M', this.$data)
    },
    mounted() {
        console.log('--------mounted--------')
        console.log('V', this.$el)
        console.log('M', this.$data)
    }
})
```

- 我们一般把ajax请求放到created内，那就是因为这个生命周期最早出现数据
- 我们一般把DOM操作放mounted内，因为这个生命周期才具有完整真实DOM
- 如果你要操作真实DOM，第一想办法用指令实现，你可以尝试用ref

## keep-alive和component

高级选项卡

在 2.2.0 及其更高版本中

以前我们使用组件都是`<cp1/>`或者`<cp1></cp1>`这样使用的，那现在还可以这样用`<component is="cp1"></component>`
```js
Vue.component('cp1', {
    template: `
        <p>组件1</p>
    `
})
var vm = new Vue({
    el: '#demo',
    data: {
        name: '生命周期',
        vnode: null,
        color: 'red'
    },
    template: `
    <keep-alive>
        <component is="cp1"></component>
    </keep-alive>
    `,
})
```
你可以使用一个`<keep-alive>`包含任何组件，那就是可以把组件放进内存里面，在需要的时候才拿出来使用

## activated和deactivated

活跃和不活跃，缓存在内存里面，而非从虚拟DOM和真实DOM中消失
```js
Vue.component('cp1', {
    template: `
        <p>组件1</p>
    `,
    activated() {
        console.log('activated1')
    },
    deactivated() {
        console.log('deactivated1')
    }
})
```

## beforeDestroy和destroyed

销毁前和销毁后，从DOM上完全给删掉，虚拟DOM和真实DOM，完全从虚拟和真实DOM删除

- 一般由v-if触发
- 路由触发`<router-view></router-view>`


destroyed是完全删掉

比如你定义了一个全局的变量，是这个组件诞生的时候带来的，就需要在它销毁的时候带走，这样才不会对其他造成干扰
```js
Vue.component('cp1', {
    data() {
        return {
            timer: null
        }
    },
    template: `
        <div>组件</div>
    `,
    created() {
        this.timer = window.setInterval(() => {
            console.log(1)
        }, 1000)
    },
    beforeDestroy() {
        console.log('beforeDestroy')
    },
    destroyed() {
        console.log('destroyed')
        clearInterval(this.timer)
    }
})
```

# errorCaptured

你可以把它放在父组件中监听子组件的错误，你可以错误做逻辑
```js
Vue.component('cp1', {
    data() {
        return {
            timer: null
        }
    },
    template: `
        <div>组件</div>
    `,
    mounted() {
        // 错误
        this.abc = p
    }
})
var vm = new Vue({
    el: '#demo',
    data: {
        bool: true
    },
    template: `
        <div>
            <cp1 v-if="bool"></cp1>
            <button @click="bool=!bool">增加或者删除</button>
        </div>
    `,
    errorCaptured(err, vm, info) {
        // 子组件出现错误，捕捉成功
        console.log(err, vm, info)
    }
})
```


# ref

它帮你在虚拟DOM寻找你要更改的那个节点，先更改虚拟DOM，再自动更新真实DOM

```html
<div ref="pp">{{name}}</div>
```

以前是这样拿的，用选择直接选真实DOM更改
```js
var p = document.querySelector('p')
p.style.color = 'red'
```
但是你多了一层虚拟DOM，那需要先改虚拟DOM再动真实DOM
```js
var p = this.$refs.pp
p.style.color = 'red'
```
