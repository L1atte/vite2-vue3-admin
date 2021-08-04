/*
 * @Author: Latte
 * @Date: 2021-07-27 23:53:06
 * @LAstEditors: Latte
 * @LastEditTime: 2021-08-04 23:29:24
 * @FilePath: \vite2-vue3-admin\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import request from './utils/request'

console.log("环境变量=>",import.meta.env)

//axios.get(config.mockApi + '/login').then((res) => console.log(res))

const app = createApp(App);
app.config.globalProperties.$http = request;
app.use(router).use(ElementPlus).mount('#app')
