export default{
    //定义数据
    state:{
        //修改collapse
        isCollapse:false//用于控制菜单的展开还是收起
    },
    mutations:{
        //定义修改菜单展开收起的方法
        collapseMenu(state){
            state.isCollapse=!state.isCollapse
        }
    }
}