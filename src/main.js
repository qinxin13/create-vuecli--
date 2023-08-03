import Vue from 'vue'
import App from './App.vue'
// import "element-ui/lib/theme-chalk/index.css"
import router from './rotuer'
//引入element-ui
import ElementUI from 'element-ui'
// 按需引入
// import {Row,Button,Container,Aside} from 'element-ui'

import store  from './store'
import './api/mock'
Vue.config.productionTip = false
//全局注入element-ui
Vue.use(ElementUI)
//按需引入
// Vue.use(Row)
// Vue.use(Button)
// Vue.use(Container)
// Vue.use(Aside)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
