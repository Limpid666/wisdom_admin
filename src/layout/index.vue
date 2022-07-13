// 引入模块化
<template>
  <el-container>
    <el-aside width="200px">
      <app-aside></app-aside>
    </el-aside>
    <el-container>
      <el-header>
        <app-header></app-header>
      </el-header>
      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import AppHeader from '@/layout/AppHeader'
import AppMain from '@/layout/AppMain'
import AppAside from '@/layout/AppAside'
export default {
  components: {
    AppHeader, AppMain, AppAside
  }

}
</script>
<style scoped lang='scss'>
.el-container {
  height: 100%;
}

.el-header {
  background-color: $header-bg-color;
  color: #333;
  line-height: 60px;
  height: 60px;
}

.el-aside {
  background-color: $aside-bg-color;
  color: #333;
}

.el-main {
  background-color: $main-bg-color;
  color: #333;
  height: calc(100vh - 60px);
}
</style>
