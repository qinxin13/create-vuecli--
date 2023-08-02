import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'

//全局注入
Vue.use(Vuex)
//创建一个vuex实例
export default new Vuex.Store({
    //使用modules创建两个不同的模块
    modules:{
        tab
    }
})