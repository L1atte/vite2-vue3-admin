<!--
 * @Author: Latte
 * @Date: 2021-08-25 00:08:48
 * @LAstEditors: Latte
 * @LastEditTime: 2021-08-25 00:25:31
 * @FilePath: \vite2-vue3-admin\src\components\BreadCrumb.vue
-->
<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="(item,index) in breadList" :key="item.path">
      <router-link v-if="index === 0" to="/welcome">{{item.meta.title}}</router-link>
      <span v-else>{{item.meta.title}}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "BreadCrumb",
  computed: {
    breadList() {
      return this.$route.matched
    }
  },
};
</script>

<style>
</style>