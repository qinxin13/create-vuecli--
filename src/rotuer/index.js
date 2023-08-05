//引入vue和vuerouter
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Main from "../views/Main.vue";
import Mail from "../views/Mail.vue";
import PageOne from "../views/PageOne.vue";
import PageTwo from "../views/PageTwo.vue";
//全局注册
Vue.use(VueRouter);
//1.创建路由组件
//2.将路由与组件进行映射

//解决重复点击出错问题
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    component: Main,
    redirect: "/home", //重定向
    children: [
      { path: "home", name: "home", component: Home }, //首页
      { path: "user", name: "user", component: User }, //用户管理
      { path: "mail", name: "mail", component: Mail }, //商品管理
      { path: "page1", name: "page1", component: PageOne }, //页面1
      { path: "page2", name: "page2", component: PageTwo }, //页面2
    ],
  },
];
//3.创建router实例
const router = new VueRouter({
  routes, //这是一个缩写，相当于 routes:routes
});

//4.将router实例向外界暴露
export default router;
