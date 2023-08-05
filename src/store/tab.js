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
    closeTag(state,item) {
      console.log(item, "item");
      const index = state.tabsList.findIndex((val) => val.name === item.name);
      state.tabsList.splice(index, 1);
    },
  },
};
