/*
 * @Author: Latte
 * @Date: 2021-07-28 00:39:47
 * @LAstEditors: Latte
 * @LastEditTime: 2021-08-24 00:33:47
 * @FilePath: \vite2-vue3-admin\src\api\index.js
 */
import request from './../utils/request'
export default {
  login(params) {
    return request({
      url: '/users/login',
      method: 'post',
      data: params,
    })
  },
  noticeCount(params) {
    return request({
      url: '/leave/count',
      method: 'get',
      data: {}
    })
  },
  getMenuList(params) {
    return request({
      url: '/menu/list',
      method: 'get',
      data: {}
    })
  }
}