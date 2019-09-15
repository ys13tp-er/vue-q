const Vue = require('vue/dist/vue');
// import Vue from 'vue';
const template = require('./template/index.html');
const image = require('./image/1.png');
console.log(Vue)
const vm = new Vue({
    el: '#demo',
    data: {
        name: 'yao',
        image
    },
    // <div :name="name">{{name}}</div>
    // JSX
    // render(createElement) {
    //     var vdom = createElement('div', {
    //         attrs: {
    //             name: this.name
    //         }
    //     }, this.name)
    //     console.log(vdom)
    //     return vdom
    // },
    template
})