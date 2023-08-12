<template>
    <el-form ref="form" label-width="70px" :inline="true" class="login-container" :model="form" :rules="rules">
        <h3 class="login-title">后台系统登录</h3>
        <el-form-item label="用户名" prop="username">
            <el-input placeholder="请输入账号" v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="paddword" placeholder="请输入密码" v-model="form.password" />
        </el-form-item>
        <el-form-item>
            <el-button @click="submit" class="login-submit" style="margin-left: 100px;" type="primary">登录</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import Cookie from 'js-cookie'
import Mock from 'mockjs';
import { getMenu } from '../api'
export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
            },
            //通过rules定义校验规则
            rules: {
                username: [
                    { required: true, trigger: 'blur', message: '请输入用户名' },
                ],
                password: [
                    { required: true, trigger: 'blur', message: '请输入密码' }
                ]
            }
        }
    },
    methods: {
        //登录
        submit() {
            //token信息
            // const token = Mock.Random.guid();//获取一个随机数
            // //token信息存入cookie用于不同页面间的通信
            // Cookie.set('token',token)
            // //跳转至首页

            //调用接口 校验通过
            this.$refs.form.validate((valid) => {
                if (valid) {
                    getMenu(this.form).then(({ data }) => {
                        console.log(data)
                        if (data.code === 20000) {

                            //token信息存入cookie用于不同页面间的通信
                            Cookie.set('token', data.data.token)

                            //获取菜单的数据，存入store
                            // data.data.menu
                            this.$store.commit('setMenu',data.data.menu)
                            this.$store.commit('addMenu',this.$router)
                            //跳转到首页
                            this.$router.push('/home')
                        } else {
                            this.$message.error(data.data);
                        }


                    })
                }
            })


        }
    }
}
</script>
<style lang="less" scoped>
.login-container {
    width: 350px;
    border: 1px solid #eaeaea;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 25px #cacaca;
    box-sizing: border-box;

    .login-title {
        text-align: center;
        margin-bottom: 40px;
        color: #505458;
    }

    .el-input {
        width: 198px;
    }

    :deep(.login-submit) {
        cursor: pointer;
        margin: 10px auto 0px auto;
    }
}
</style>