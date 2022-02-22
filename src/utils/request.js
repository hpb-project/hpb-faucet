import Vue from 'vue'
import axios from 'axios' 
import { VueAxios } from './axios'  

//自动设置后台服务 baseURL (也可以手工指定写死项目名字)
//let baseDomain = "https://hscan.org" ;// http://3.13.115.224:9001;
let baseDomain = "/api" ; 

// 创建 axios 实例
const service = axios.create({ 
  baseURL: baseDomain, // api base_url 代理地址baseProject
  timeout: 9000 // 请求超时时间
})

const err = (error) => {
  if (error.response) {
    let data = error.response.data  
    console.log("------异常响应------",error.response)
    
  }
  return Promise.reject(error)
};

// request interceptor  网络请求拦截器
service.interceptors.response.use((response) => {
    return response.data
  }, err)

const installer = {
  vm: {},
  install (Vue, router = {}) {
    Vue.use(VueAxios, router, service)
  }
}

export {
  installer as VueAxios,
  service as axios
}
