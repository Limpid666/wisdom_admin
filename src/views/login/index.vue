/* 登录页面 */
<template>
  <div class="login-container">
    <div class="login">
      <h1>智慧服务平台</h1>
      <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-rulesForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入账号" suffix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" suffix-icon="el-icon-lock">
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <div class="codeForm">
            <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:55%"></el-input>
            <el-image :src="codeImageUrl" style="margin-left:10px" @click.stop="handleCodeRefresh"></el-image>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="handleVerfyForm" :loading="loading" style="width:100%">{{ loading ? '登陆中' :
              '立即登录'
          }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import rules from './rules'
import UserApi from '@/api/user'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      loginForm: {
        username: 'duck',
        password: 'admin888',
        code: '',
        token: ''
      },
      rules,
      // 加载loading
      loading: false,
      // 验证密码的路径
      codeImageUrl: ''
    }
  },
  methods: {
    // 调用接口获取验证码
    async hanleGetCaptcha() {
      const { captchaImg, token } = await UserApi.getCaptcha()
      this.codeImageUrl = captchaImg
      this.loginForm.token = token
    },
    // 验证码刷新
    handleCodeRefresh() {
      this.loginForm.code = ''
      this.hanleGetCaptcha()
    },
    // 表单校验
    handleVerfyForm() {
      this.$refs.loginForm.validate(async (result) => {
        if (result) {
          this.submitForm()
        }
      })
    },
    // 提交用户
    async submitForm() {
      try {
        const token = await this.login(this.loginForm)
        if (!token) return
        this.$notify({ title: '提示', message: '登录成功', type: 'success' })
        // const userInfo = await this.loginUserInfo(this.loginForm)
        // console.log(userInfo)
        this.loading = true
        await this.$router.push('/')
      } catch (e) {
        console.log(e)
      } finally {
        this.loadingStatus = false
      }
    },
    //  vuex登录
    ...mapActions({
      login: 'user/login'
    })
  },
  created() {
    this.hanleGetCaptcha()
  },
  mounted() { }

}
</script>
<style scoped lang='scss'>
.login-container {
  width: 100%;
  height: 100vh;
  background-image: url(https://pic1.zhimg.com/v2-6cb4b2a4e695dcc0466e5a6bcfe75fe8_r.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  .login {
    width: 20%;

    h1 {
      font-size: 30px;
      margin-bottom: 30px;
      text-align: center;
    }
  }

  ::v-deep .codeForm {
    display: flex;
    align-items: center;
  }
}
</style>
