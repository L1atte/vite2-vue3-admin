/*
 * @Author: Latte
 * @Date: 2021-07-27 23:53:06
 * @LAstEditors: Latte
 * @LastEditTime: 2021-08-15 20:33:04
 * @FilePath: \vite2-vue3-admin\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import request from './utils/request'
import storage from './utils/storage'
import api from './api'
import store from './store'

console.log("环境变量=>",import.meta.env)

//axios.get(config.mockApi + '/login').then((res) => console.log(res))

const app = createApp(App);
app.config.globalProperties.$request = request;
app.config.globalProperties.$api = api;
app.config.globalProperties.$storage = storage;
app.use(router).use(ElementPlus).use(store).mount('#app')
