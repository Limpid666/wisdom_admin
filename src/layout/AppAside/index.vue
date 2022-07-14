<template>
  <div class="">
    <el-menu default-active="0" class="el-menu-vertical-demo" background-color="#222d32" text-color="#fff" router
      active-text-color="#ffd04b">
      <MenuTree v-for="(item, index) in menus" :key="index" :item="item"></MenuTree>
    </el-menu>
  </div>
</template>
<script>
// import navigationBar from '@/api/navigationBar'
import { filterMenus } from '@/utils/menus'
import MenuTree from './MenuTree.vue'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    MenuTree
  },
  data() {
    return {}
  },
  methods: {
    // async menus() {
    //   const menus = await navigationBar.navigation()
    //   console.log(menus)
    // }
  },
  created() {
    console.log('create', this.menus)
  },
  computed: {
    activePath() {
      return this.$route.path
    },
    // eslint-disable-next-line vue/return-in-computed-property
    menus() {
      if (this.$store.getters.menus) {
        return filterMenus(this.$store.getters.menus)
      }
    },
    isCollapse() {
      return this.$store.getters.isCollapse
    }
  }
}
</script>
<style scoped lang='scss'>
.el-menu {
  border-right: none;
}
</style>
