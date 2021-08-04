<!--
 * @Author: Latte
 * @Date: 2021-07-28 23:32:21
 * @LAstEditors: Latte
 * @LastEditTime: 2021-08-04 23:24:56
 * @FilePath: \vite2-vue3-admin\src\components\Login.vue
-->
<template>
  <h1>登陆界面</h1>
  <el-button @click="goHome">回首页</el-button>
</template>

<script>
import welcome from './Welcome.vue'

export default {
  name: 'Login',
  components: {welcome},
  mounted() {
    console.log("1",this.$http)
    this.$http({
      method: 'get',
      url: '/login',
      data: {
      }
    }).then((res) => {
      console.log(res)
    })
  },
  methods: {
    goHome() {
      this.$router.push('/welcome')
    }
  }
}
</script>

<style scoped>
</style>