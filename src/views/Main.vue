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
export default {
    name: 'Main',
    components: {
        ComponentAbside,
        CommonHeader
    },
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.el-header {
    padding: 0;
}
</style>