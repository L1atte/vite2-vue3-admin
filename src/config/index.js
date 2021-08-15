/*
 * @Author: Latte
 * @Date: 2021-08-01 21:06:27
 * @LAstEditors: Latte
 * @LastEditTime: 2021-08-05 00:55:17
 * @FilePath: \vite2-vue3-admin\src\config\index.js
 */
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  dev: {
    baseApi: '/',
    mockApi: 'https://www.fastmock.site/mock/7596adab4b2c52b8490be156aed8f3f4/api'
  },
  test: {
    baseApi: '/',
    mockApi: 'https://www.fastmock.site/mock/7596adab4b2c52b8490be156aed8f3f4/api'
  },
  prod: {
    baseApi: '/',
    mockApi: ''
  },
}

export default {
  env: env,
  mock: true,
  namespace: "manager",
  ...EnvConfig[env]
}