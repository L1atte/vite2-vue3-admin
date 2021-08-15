/*
 * @Author: Latte
 * @Date: 2021-08-15 20:21:00
 * @LAstEditors: Latte
 * @LastEditTime: 2021-08-15 20:35:19
 * @FilePath: \vite2-vue3-admin\src\store\mutations.js
 */
/**
 * mutations业务层数据提交
 */

import storage from "../utils/storage";

export default {
  saveUserInfo(state,userInfo) {
    state.userInfo = userInfo
    storage.setItem('userInfo',userInfo)
  }
}