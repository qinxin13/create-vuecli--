import Cookie from "js-cookie";
export default {
  //定义数据
  state: {
    //修改collapse
    isCollapse: false, //用于控制菜单的展开还是收起
    //面包屑数据
    tabsList: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "s-home",
        url: "Home/Home",
      },
    ],
    menu: [],
  },
  mutations: {
    //定义修改菜单展开收起的方法
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
    //更新面包屑数据
    selectMenu(state, val) {
      console.log(val, "val");
      //判断添加数据是否为首页
      if (val.name !== "home") {
        //通过数组的findIndex函数来判断数组中数据是否和传入的一致
        //如果不存在，则返回-1
        const index = state.tabsList.findIndex(
          (item) => item.name === val.name
        );
        if (index === -1) {
          state.tabsList.push(val);
        }
      }
    },
    //删除指定的tag数据
    closeTag(state, item) {
      console.log(item, "item");
      const index = state.tabsList.findIndex((val) => val.name === item.name);
      state.tabsList.splice(index, 1);
    },
    //设置menu数据
    setMenu(state, val) {
      state.menu = val;
      Cookie.set("menu", JSON.stringify(val));
    },
    //动态注册路由
    addMenu(state, router) {
      //判断当前缓存中是否有数据
      if (!Cookie.get("menu")) return;
      const menu = JSON.parse(Cookie.get("menu"));
      state.menu = menu;
      //组转动态路由的数据
      const menuArray = [];
      menu.forEach((item) => {
        if (item.children) {
          item.children = item.children.map((item) => {
            item.component = () => import(`../views/${item.url}`);
            return item;
          });
          menuArray.push(...item.children);
        } else {
          item.component = () => import(`../views/${item.url}`);
          menuArray.push(item)
        }
      });
      console.log(menuArray,'menuArray')
      //路由的动态添加
      menuArray.forEach(item=>{
        router.addRoute('Main',item)
      })
    },
  },
};
