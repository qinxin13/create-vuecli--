<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse">
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>

<script>
export default {
    data() {
        return {
            isCollapse: false,
            menuData:[
                {
                    path:'/',
                    naem:'home',
                    label:'首页',
                    icon:'s-home',
                    url:'Home/Home'
                },
                {
                    path:'/mail',
                    naem:'mail',
                    label:'商品管理',
                    icon:'video-play',
                    url:'MailManage/MailManage'
                },
                {
                    path:'/',
                    naem:'home',
                    label:'首页',
                    icon:'s-home',
                    url:'Home/Home'
                },
                {
                    path:'/',
                    naem:'home',
                    label:'首页',
                    icon:'s-home',
                    url:'Home/Home'
                },
                {
                    path:'/',
                    naem:'home',
                    label:'首页',
                    icon:'s-home',
                    url:'Home/Home'
                },
            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>