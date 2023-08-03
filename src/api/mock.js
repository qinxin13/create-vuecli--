import Mock from "mockjs";
// import { getData } from ".";
import homeApi from './mockServeData/home'

//定义Mock请求拦截
Mock.mock('/api/home/getData',homeApi.getStatisticalData)
    //拦截到请求后的处理逻辑
