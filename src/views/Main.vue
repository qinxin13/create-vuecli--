<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <component-abside/>
                <!-- 小驼峰写法 -->
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
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
export default {
    name: 'Main',
    components:{
        ComponentAbside,
    },
    data() {
        return {

        }
    }
}
</script>
<style></style>