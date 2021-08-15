<!--
 * @Author: Latte
 * @Date: 2021-07-27 23:53:06
 * @LAstEditors: Latte
 * @LastEditTime: 2021-08-08 20:20:44
 * @FilePath: \vite2-vue3-admin\src\components\Home.vue
-->
<template>
  <div class="basic-layout">
    <div class="nav-side"></div>
    <div class="content-right">
      <div class="nav-top">
        <div class="bread">面包屑</div>
        <div class="user">用户</div>
      </div>
      <div class="wrapper">
        <div class="main-page">
          <router-view class="main-page"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
.basic-layout {
  position: relative;
  .nav-side {
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #001529;
    color: #fff;
    overflow-y: auto;
    transition: width 0.5s;
  }
  .content-right {
    margin-left: 200px;
    .nav-top {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 0 20px;
    }
    .wrapper {
      background: #eef0f3;
      padding: 20px;
      height: calc(100vh - 50px);
      .main-page{
        background: #fff;
        height: 100%;
      }
    }
  }
}
</style>
