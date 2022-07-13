<template>
  <div class="concat">
    <div class="left-concat"></div>
    <div class="right-concat">
      <img src="" alt="">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          duck<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="personalSetting">个人设置</el-dropdown-item>
          <el-dropdown-item command="logOutSafely">安全退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <!-- 弹框 -->
      <el-dialog title="编辑个人信息" :visible.sync="dialogVisible" width="30%">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账号" prop="code">
            <el-input v-model="ruleForm.code"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="success" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  components: {

  },
  data() {
    return {
      dialogVisible: false,
      ruleForm: {
        username: '',
        password: '',
        email: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleCommand(command) {
      this.$message('点击了 ' + command)
    }
    // outlogin() {
    //   this.$confirm('确定退出吗?', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   })
    //     .then(async () => {
    //       const res = await this.$axios.get('/logout')
    //       if (res.code === 200) {
    //         // 删除token, 需要提前设置token.js
    //         // removeToken()
    //         // 跳转到登录页面
    //         this.$router.push('/login')
    //       }
    //       this.$message({
    //         type: 'success',
    //         message: '退出成功!'
    //       })
    //     })
    //     .catch(() => { })
    // }
  },
  created() { },
  mounted() { }

}
</script>
<style scoped lang='scss'>
.concat {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
</style>
