<template>
  <div class="">

    <el-menu-item index="/home">
      <i class="el-icon-s-home"></i>
      <span slot="title">控制台</span>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-s-grid"></i>
        <span>系统管理</span>
      </template>
      <el-menu-item index="/user">
        <i class="el-icon-user"></i>
        <span>用户管理</span>
      </el-menu-item>
      <el-menu-item index="/users">
        <i class="el-icon-user-solid"></i>
        <span>角色管理</span>
      </el-menu-item>
      <el-menu-item index="/menus">
        <i class="el-icon-menu"></i>
        <span>菜单管理</span>
      </el-menu-item>
    </el-submenu>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {}
  },
  methods: {},
  created() { },
  mounted() { }

}
</script>
<style scoped lang='scss'>
</style>
