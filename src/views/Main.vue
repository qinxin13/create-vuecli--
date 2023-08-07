<template>
    <div>
        <el-container>
            <el-aside width="auto">
                <component-abside />
                <!-- 小驼峰写法 -->
            </el-aside>
            <el-container>
                <el-header>
                    <common-header />
                </el-header>
                <common-tag />
                <el-main>
                    <h1>我是Main</h1>
                    <!-- 路由出口 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import ComponentAbside from "../components/ComponentAbside.vue"
import CommonHeader from "@/components/CommonHeader.vue";
import CommonTag from "@/components/CommonTag.vue";
export default {
    name: 'Main',
    components: {
        ComponentAbside,
        CommonHeader,
        CommonTag
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.el-header {
    padding: 0;
    
}
// .el-main{
//         overflow: hidden;
//     }
</style>