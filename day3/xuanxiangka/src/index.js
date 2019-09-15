// 以模块的方式引入vue
const Vue = require('./vue');
const vm = new Vue({
    // V
    el: '#demo',
    // M
    data: {
        dt: ['你好', '我好', '他好'],
        ddisok: [true, false, false],
        classA: 'dt',
        classB: 'dd'
    },
    // 模板
    template: `
        <ul>
            <li :class="classA" v-for="(item, index) in dt"  v-text="item" @click="bianb(index)"></li>
            <li :class="classB"  v-for="(item, index) in dt"  v-text="item" v-show="ddisok[index]"></li>
        </ul>
    `,
    methods: {
        bianb(index) {
            for (var i = 0; i < vm.ddisok.length; i++) {
                vm.ddisok[i] = false;
            }
            vm.ddisok[index] = true;
            vm.$forceUpdate();
        }
    }
})
// console.log(vm)