/*
 * @Author: Latte
 * @Date: 2021-08-05 00:51:24
 * @LAstEditors: Latte
 * @LastEditTime: 2021-08-05 01:20:52
 * @FilePath: \vite2-vue3-admin\src\utils\storage.js
 */

import config from "../config"

// storage二次封装
export default {
  getStorage() {
    return JSON.parse(window.localStorage.getItem(config.namespace) || "{}")
  },

  setItem(key, val) {
    let storage = this.getStorage()
    storage[key] = val
    window.localStorage.setItem(config.namespace, JSON.stringify(storage))
  },

  getItem(key) {
      return this.getStorage()[key]
  },

  clearItem(key) {
    let storage = this.getStorage()
    delete storage[key]
    window.localStorage.setItem(config.namespace,JSON.stringify(storage));
  },
  
  clearAll() {
    window.localStorage.clear()
  },
}