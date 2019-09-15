// 以模块的方式引入vue
const Vue = require('vue');
const vm = new Vue({
    // V
    el: '#demo',
    // M
    data: {
        name: 'yao',
        html: `<p>123<b style="color:red">456</b>789</p>`,
        bool: 8,
        arr: [{
            name: 'lin',
            id: 3,
            skill: []
        }, {
            name: 'yao',
            id: 1,
            skill: ['scss']
        }, {
            name: 'jing',
            id: 2,
            skill: ['php', 'java', 'scss']
        }],
        url: 'https://avatars1.githubusercontent.com/u/17243165?s=460&v=4',
        isB: true,
        isC: false,
        classA: 'classA',
        size: 88
    },
    // 模板
    template: `
        <div>
            <p>{{name}}</p>
            <p v-text="'name'"></p>
            <div v-html="html"></div>
            <div v-show="0">显示或者隐藏</div>
            <hr />
            <div v-if="bool>10">A</div>
            <div v-else-if="bool<9">B</div>
            <div v-else>C</div>
            <hr />
            <ul>
                <li  v-for="item in arr" v-if="item.name==='jing'" >
                   <p v-text="item.name"></p>
                   <p v-for="s in item.skill" v-text="s"></p>
                </li>
            </ul>
            <hr />
            <button v-on:click="test">test</button>
            <button v-on:click="test(1)">test(带参数)</button>
            <input @keyup.13="onEnter">
            <hr />
            <img src="https://avatars1.githubusercontent.com/u/17243165?s=460&v=4" />
            <img v-bind:src="url" v-bind:name="name" />
            <p :class="[classA, { classB: isB, classC: isC }]">class指令</p>
            <p :style="{
                fontSize: size +'px'
            }">ABC</p>
            <hr />
            <input v-model="name" />
        </div>
    `,
    methods: {
        test(num) {
            // V->M->V
            // 把M层里面name改为jing，由于M变，V会跟着变
            vm.name = 'jing'
            console.log(num)
        },
        test2() {
            console.log(2)
        },
        // 使用回车键触发
        onEnter() {
            console.log('input')
        }
    }
})
console.log(vm)