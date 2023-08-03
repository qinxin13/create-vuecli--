<template>
    <el-row>
        <el-col :span="8">
            <el-card class="box-card">
                <div class="user">
                    <img src="../pic/}N]HW_2N]69C6T$SI)@X_N6.png" alt="" />
                    <div class="user-info">
                        <p class="name">Admin</p>
                        <p class="access">管理员</p>
                    </div>
                </div>
                <div class="Login-info">
                    <p>上次登录时间：<span>2022-7-20</span></p>
                    <p>上次登录地点：<span>成都</span></p>
                </div>
            </el-card>
            <el-card style="margin-top: 20px;height: 460px;">
                <el-table :data="tableData" style="width: 100%">
                    <!-- <el-table-column prop="name" label="课程" >
                    </el-table-column>
                    <el-table-column prop="todayBuy" label="今日购买">
                    </el-table-column>
                    <el-table-column prop="monthBuy" label="本月购买" >
                    </el-table-column>
                    <el-table-column prop="totalBuy" label="总购买" >
                    </el-table-column> -->
                    <el-table-column v-for="(val, key) in tableLabel" :prop="key" :label="val" />
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="18">
            <div class="grid-content bg-purple-light">
                <div class="num">
                    <el-card v-for="item in countData" :key="item.name" :body-style="{ display:'flex',padding:0 }">
                        <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
                    <div class="detail">
                        <p class="price">{{ item.value }}</p>
                        <p class="desc">{{ item.name }}</p>
                    </div>
                    </el-card>
                </div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import {getData} from '../api'
export default {
    name: 'Home',
    data() {
        return {
            tableLabel: {
                name: '课程',
                todayBuy: '今日购买',
                monthBuy: '本月购买',
                totalBuy: '总购买',
            },
            tableData: [
                {
                    name: 'oppo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'vivo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '苹果',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '小米',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '三星',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '魅族',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                }
            ],
            countData: [
                {
                    name: "今日支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "今日收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "今日未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
                {
                    name: "本月支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "本月收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "本月未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
            ],
        }
    },
    mounted() {
        getData().then((data)=>{
            console.log(data)
        })
    },
}
</script>
<style lang="less" scoped>
.el-row{
    display: flex;
    flex-direction: row;
    .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;

    img {
        margin-right: 40px;
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }

    .user-info {
        .name {
            font-size: 32px;
            margin-bottom: 10px;
        }

        .access {
            color: #999999;
        }
    }
}

.Login-info {
    p {
        line-height: 28px;
        font-size: 14px;
        color: #999999;

        span {
            color: #666666;
            margin-left: 60px;
        }
    }
}
.num{
    display: flex;
    margin-left: 20px;
    // 换行
    flex-wrap: wrap;
    //每个元素相隔相同的距离
    justify-content: space-between;
    .icon{
        width: 80px;
        height: 80px;
        font-size: 30px;
        text-align: center;
        line-height: 80px;
        color: #ffffff;
    }
    .detail{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 15px;
        .price{
            font-size: 30px;
            margin-bottom: 10px;
            height: 30px;
            line-height: 30px;
        }
        .desc{
            font-size: 14px;
            color: #999;
            text-align: center;
        }
    }
    .el-card{
        width: 32%;
        margin-bottom: 20px;
    }
}
}

</style>