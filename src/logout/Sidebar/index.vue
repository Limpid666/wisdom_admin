<template>
  <div class="">
    <el-menu default-active="0" class="el-menu-vertical-demo" background-color="#222d32" text-color="#fff" router
      active-text-color="#ffd04b">
      <MenuTree v-for="(item, index) in menus" :key="index" :item="item"></MenuTree>
    </el-menu>
  </div>
</template>
<script>
import navigationBar from '@/api/navigationBar'
import MenuTree from './MenuTree.vue'
export default {
  name: '',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MenuTree
  },
  data() {
    return {}
  },
  methods: {
    async menus() {
      const menus = await navigationBar.navigation()
      console.log(menus)
    }
  },
  created() {
    this.menus()
  },
  mounted() { }
}
</script>
<style scoped lang='scss'>
</style>
