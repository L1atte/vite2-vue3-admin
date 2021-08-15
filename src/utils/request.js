/*
 * @Author: Latte
 * @Date: 2021-08-02 01:39:19
 * @LAstEditors: Latte
 * @LastEditTime: 2021-08-13 00:57:08
 * @FilePath: \vite2-vue3-admin\src\utils\request.js
 */

import axios from "axios";
import config from "../config";
import { ElMessage } from "element-plus";
import router from "../router";

const TOKEN_INVALID = 'token认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'
/**
 * 创建二次封装实例对象，添加全局配置
 */
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000,
})

/**
 * 请求拦截
 */
service.interceptors.request.use((req) => {
  return req;
})

/**
 * 响应拦截
 */
 service.interceptors.response.use((req) => {
  console.log("req",req)
  const { code, data, msg } = req.data
  if(code === 200) {
    return data
  } else if (code === 40001) {
    ElMessage.error(TOKEN_INVALID)
    setTimeout(() => {
      router.push('/login')
    },15000)
    return Promise.reject(TOKEN_INVALID)
  } else {
    ElMessage.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
  }
})

/**
 * 请求核心函数
 * @param {} options 请求配置 
 */
function request(options) {
  options.method = options.method || 'get'

  if(options.method.toLowerCase() === 'get') {
    options.params = options.data  //参数类型转换
  }

  if(typeof options.mock !== 'undefined') {
    config.mock = options.mock
  }

  if(config.env === 'prod') {
    service.defaults.baseURL = config.baseApi
  } else{
    console.log(config.mock)
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
  }
  return service(options)
}

['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
  request[item] = (url, data, options) => {
      return request({
          url,
          data,
          method: item,
          ...options
      })
  }
})

export default request