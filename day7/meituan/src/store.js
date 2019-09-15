import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 初始化一个仓库
const store = new Vuex.Store({
    // 所有的仓库的值都会放在这里面
    // 状态===仓库的值
    state: {
        author: 'yao',
        name: 'eno',
        ajaxUrl: 'http://xxxx',
        arr: ['ps', 'js', 'css'],
        plus(a, b) {
            return a + b
        }
    },
    // 用于修改仓库里面的值
    mutations: {
        setAuthor(state, name) {
            state.author = name
            // 不需要return，跟getters很像
        },
        setName(state, name) {
            state.author = name
        }
    },
    actions: {
        setAuthor(context, name) {
            // 在action里面触发commit
            context.commit('setAuthor', name)
        }
    },
    // 定义getters方法
    getters: {
        getAuthor(state) {
            // 获取数据，去做一次数据处理，等价于一个计算属性或者过滤器
            return state.name + 'abc'
        }
    }
})
// 导出仓库
export default store

// store.state来去获取state
// store.commit触发mutations