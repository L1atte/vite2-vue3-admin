<!--
 * @Author: Latte
 * @Date: 2021-07-28 23:32:21
 * @LAstEditors: Latte
 * @LastEditTime: 2021-07-30 00:55:07
 * @FilePath: \vite2-vue3-admin\src\components\Login.vue
-->
<template>
  <h1>登陆界面</h1>
  <el-button @click="goHome">回首页</el-button>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const router = useRouter()
    console.log(router)

    const goHome = () => {
      router.push('/welcome')
    }

    return {
      goHome,
    }
  }
}
</script>

<style scoped>
</style>