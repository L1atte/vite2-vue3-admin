/*
 * @Author: Latte
 * @Date: 2021-07-27 23:53:06
 * @LAstEditors: Latte
 * @LastEditTime: 2021-08-02 00:44:02
 * @FilePath: \vite2-vue3-admin\src\main.js
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import axios from 'axios'
import config from './config'

axios.get(config.mockApi + '/login').then((res) => {
  console.log(res)
})
console.log(import.meta.env)
const app = createApp(App);
app
  .use(router)
  .use(ElementPlus)
  .mount("#app");
