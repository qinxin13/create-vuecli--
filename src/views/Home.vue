<template>
    <el-row>
        <el-col :span="8" style="padding-right:10px ;">
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
        <el-col :span="16" style="padding-left: 10px;">
            <div class="grid-content bg-purple-light">
                <div class="num">
                    <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
                        <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
                        <div class="detail">
                            <p class="price">{{ item.value }}</p>
                            <p class="desc">{{ item.name }}</p>
                        </div>
                    </el-card>
                </div>
                <el-card style="height: 280px;">
                    <!-- 折线图 -->
                    <div ref="echarts1" style="height: 280px;"></div>

                </el-card>
                <div class="graph">
                    <el-card style="height: 260px;">
                        <div ref="echarts2" style="height: 260px;"></div>
                    </el-card>
                    <el-card style="height: 260px;">
                        <div ref="echarts3" style="height: 240px;"></div>
                    </el-card>
                </div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import { getData } from '../api'
import * as echarts from 'echarts'
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
        getData().then(({ data }) => {
            console.log(data)
            //获取当前的tableData
            const { tableData } = data.data
            console.log(data)
            console.log(tableData)
            //使tableData变为动态数据
            this.tableData = tableData;

            //基于准备好的Dom，初始化echarts实例
            const echarts1 = echarts.init(this.$refs.echarts1)
            //指定图表的配置项和数据
            var echarts1Option = {

            }
            //处理数据XAis
            const { orderData, userData,videoData } = data.data

            const xAxis = Object.keys(orderData.data[0])
            const xAxisData = {
                data: xAxis
            }
            echarts1Option.xAxis = xAxisData
            echarts1Option.yAxis = {}
            echarts1Option.legend = xAxisData
            echarts1Option.series = []
            //获取到当前的每一项
            xAxis.forEach(key => {
                echarts1Option.series.push({
                    name: key,
                    data: orderData.data.map(item => item[key]),
                    type: 'line'
                })
            })
            console.log(echarts1Option)
            //使用刚指定的配置项和数据显示图表
            echarts1.setOption(echarts1Option)
            console.log(xAxis)


            //柱状图
            const echarts2 = echarts.init(this.$refs.echarts2)
            const echarts2Option = {
                legend: {
                    // 图例文字颜色
                    textStyle: {
                        color: "#333",
                    },
                },
                grid: {
                    left: "20%",
                },
                // 提示框
                tooltip: {
                    trigger: "axis",
                },
                xAxis: {
                    type: "category", // 类目轴
                    data: userData.map(item => item.date),
                    axisLine: {
                        lineStyle: {
                            color: "#17b3a3",
                        },
                    },
                    axisLabel: {
                        interval: 0,
                        color: "#333",
                    },
                },
                yAxis: [
                    {
                        type: "value",
                        axisLine: {
                            lineStyle: {
                                color: "#17b3a3",
                            },
                        },
                    },
                ],
                color: ["#2ec7c9", "#b6a2de"],
                series: [
                    {
                        name: '新增用户',
                        data: userData.map(item => item.new),
                        type: 'bar'
                    },
                    {
                        name: '活跃用户',
                        data: userData.map(item => item.active),
                        type: 'bar'
                    }
                ],
            }
            //调用实例的setOptin方法，把echarts2Option传进去 用于设置图表的配置项和数据，以更新图表的显示
            echarts2.setOption(echarts2Option)

            //饼状图
            const echarts3 = echarts.init(this.$refs.echarts3)
            const echarts3Option = {
                tooltip: {
                    trigger: "item",
                },
                color: [
                    "#0f78f4",
                    "#dd536b",
                    "#9462e5",
                    "#a6a6a6",
                    "#e1bb22",
                    "#39c362",
                    "#3ed1cf",
                ],
                series: [
                    {
                        data:videoData,
                        type:'pie'
                    }
                ],
            }
            echarts3.setOption(echarts3Option)
        })
    },
}
</script>
<style lang="less" scoped>
.el-row {
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

    .num {
        display: flex;
        // margin-left: 20px;
        // 换行
        flex-wrap: wrap;
        //每个元素相隔相同的距离
        justify-content: space-between;

        .icon {
            width: 80px;
            height: 80px;
            font-size: 30px;
            text-align: center;
            line-height: 80px;
            color: #ffffff;
        }

        .detail {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 15px;

            .price {
                font-size: 30px;
                margin-bottom: 10px;
                height: 30px;
                line-height: 30px;
            }

            .desc {
                font-size: 14px;
                color: #999;
                text-align: center;
            }
        }

        .el-card {
            width: 32%;
            margin-bottom: 20px;
        }
    }

    .graph {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

        .el-card {
            width: 48%;
        }
    }
}
</style>