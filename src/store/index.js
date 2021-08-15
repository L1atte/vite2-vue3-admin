/*
 * @Author: Latte
 * @Date: 2021-08-15 20:20:44
 * @LAstEditors: Latte
 * @LastEditTime: 2021-08-15 20:25:48
 * @FilePath: \vite2-vue3-admin\src\store\index.js
 */

/**
 * vuex状态管理
 */
import { createStore } from "vuex";
import mutations from './mutations'
import storage from './../utils/storage'

const state = {
  userInfo: '' || storage.getItem("userInfo") // 获取用户信息
}
export default createStore({
  state,
  mutations,
})