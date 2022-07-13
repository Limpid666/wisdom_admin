<template>
  <div class="box">
    <el-breadcrumb separator="/" class="path">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">系统管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>角色管理</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name: '',
  components: {

  },
  data() {
    return {

    }
  },
  methods: {

  },
  created() { },
  mounted() { }

}
</script>
<style scoped lang='scss'>
.box {
  background-color: #fff;
  height: 85vh;

  .path {
    padding: 15px;
    border-bottom: 1px solid #ccc;
  }
}
</style>
