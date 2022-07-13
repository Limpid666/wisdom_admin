<template>
  <div class="users">
    <el-breadcrumb separator="/" class="path">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">系统管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="margin-top:10px;padding-left:30px">
      用户名 <el-input v-model="input" placeholder="请输入用户名" style="width:250px"></el-input>
      <el-button type="success" style="margin-left:30px">查询</el-button>
      <el-button type="primary" style="margin-left:30px">新增</el-button>
    </div>

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
.users {
  background-color: #fff;
  height: 85vh;

  .path {
    padding: 15px;
    border-bottom: 1px solid #ccc;
  }
}
</style>
