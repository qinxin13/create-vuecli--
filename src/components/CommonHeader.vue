<template>
    <div class="header-container">
        <div class="l-content">
            <el-button @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
            <!-- 面包屑 -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item of tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="img" src="../pic/head.png" alt="下拉">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                    <!-- <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item> -->
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'Home',
    data() {
        return {

        }
    },
    methods: {
        handleMenu() {
            this.$store.commit('collapseMenu')
        }
    },
    computed:{
        ...mapState({
            tags:state=>state.tab.tabsList
        })
    },
}
</script>
<style lang="less" scoped>
.header-container {
    padding: 0 20px;
    // background-image: linear-gradient(to right,#ff0000, #f9be1c);
    background: url('../pic/f08b512d3316dcf55af3464e7958e1426e92cbb1.jpg@942w_531h_progressive.webp')no-repeat;
    background-size: 2000px 2000px;
    height: 60px;
    display: flex;
    // flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // align-content: center;
    position: sticky;
    z-index: 100;

    .l-content {
        display: flex;
        flex-direction: row;
        align-items: center;

        .text {
            color: #000000;
            font-size: 14px;
            margin-left: 10px;
            font-weight: 600;
        }
        .el-breadcrumb{
            margin-left: 10px;
        }
    }




    .r-content {
        .img {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
}
</style>