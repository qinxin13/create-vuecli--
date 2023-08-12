<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse" text-color="#333" active-text-color="#333">
        <h3>{{ isCollapse ? '后台' : '通用后台管理系统' }}</h3>
        <!-- 利用三元运算符展示不同内容 -->
        <el-menu-item @click="clickMenu(item)" v-for="item of noChildren" :key="item.name" :index="item.name">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <el-submenu v-for="item of hasChildren" :index="item.label" :key="item.label">
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{ item.label }}</span>
            </template>
            <el-menu-item-group v-for="subItem of item.children" :key="subItem.name" :index="subItem.name">
                <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{ item.label }}</el-menu-item>
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
import Cookie from 'js-cookie'
export default {
    data() {
        return {};
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        //点击菜单实现跳转
        clickMenu(item) {
            //当页面的路由与跳转的路由不一致的时候才允许跳转 路由容错 router时路由实例
            if (this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))) {
                this.$router.push(item.path)
            }
            //通过this.$store.commit()调用store中的mutation的方法数据
            this.$store.commit('selectMenu', item)
        },
        // this.isCollapse();
    },
    computed: {
        //没有子菜单
        noChildren() {
            return this.menuData.filter(item => !item.children)
        },
        //有子菜单
        hasChildren() {
            return this.menuData.filter(item => item.children)
        },
        menuData() {
            //判断当前数据，如果缓存中没有，则从store中获取
            //获取store
            return JSON.parse(Cookie.get('menu')) || this.$store.state.tab.menu
        },
        //定义一个方法，折叠
        isCollapse() {
            return this.$store.state.tab.isCollapse
        }
    }
}
</script>
<style lang="less" scoped>
.el-menu {
    height: 100%;
    border-right: none;
    background: url('../pic/ev02_015a04_mugai_close.png') repeat-y;
    font-weight: 600;

    h3 {
        color: #000000;
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 16px;
        font-weight: 600;

    }

}
</style>