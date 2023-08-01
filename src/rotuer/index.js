//引入vue和vuerouter
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Main from "../views/Main.vue";
//全局注册
Vue.use(VueRouter);
//1.创建路由组件
//2.将路由与组件进行映射

const routes = [
  {
    path: "/main",
    component: Main,
    children: [
      { path: "/home", component: Home },
      { path: "/user", component: User },
    ],
  },
];
//3.创建router实例
const router = new VueRouter({
  routes, //这是一个缩写，相当于 routes:routes
});
//4.将router实例向外界暴露
export default router;
