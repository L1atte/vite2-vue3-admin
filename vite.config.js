/*
 * @Author: Latte
 * @Date: 2021-07-27 23:53:06
 * @LAstEditors: Latte
 * @LastEditTime: 2021-08-17 00:34:27
 * @FilePath: \vite2-vue3-admin\vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host:'localhost',
    port:8080,
    proxy:{
      "/api":{
        target:"http://localhost:3000"
      }
    }
  },
  plugins: [vue()]
})
