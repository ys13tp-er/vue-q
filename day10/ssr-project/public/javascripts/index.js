const Vue = require('vue')
const vm = new Vue({
    el: "#demo",
    data: {
        msg: "hello world1231313131321"
    },
    template: `<div v-text="msg"></div>`
})
module.exports = vm