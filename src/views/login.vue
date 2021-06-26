<template>
  <div class="login" :style="login_bg">
    <div class="login_from" :style="sgin_bg">
      <div class="title">
        <img :src="logo" alt="" />
        <span>悦高用户漏斗分析软件</span>
      </div>
      <el-form :model="form" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item label="" prop="name">
          <el-input v-model="form.name" placeholder="请输入账号" clearable>
            <!-- prefix-icon="el-icon-user-solid" -->
            <img slot="prefix" class="el-input__icon el-icon-date" :src="user" alt="" />
          </el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="form.password" placeholder="请输入密码" type="password" clearable>
            <img slot="prefix" class="el-input__icon el-icon-date" :src="password" alt="" />
          </el-input>
        </el-form-item>
        <el-form-item label="">
          <el-row :gutter="20">
            <el-col :span="16">
              <el-input v-model="form.yanzm" placeholder="请输入验证码" clearable>
                <img slot="prefix" class="el-input__icon el-icon-date" :src="yanz" alt="" />
              </el-input>
            </el-col>
            <el-col :span="8">
              <yanzhenma @yanzhenma="getyanzhenme" />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked" size="medium" @change="jizhu">记住我</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <!--  @click="onSubmit" -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import yanzhenma from '@/components/yanzhenma.vue'
export default {
  components: {
    yanzhenma,
  },
  data() {
    return {
      logo: require('../assets/login/logo.png'),
      user: require('../assets/login/user.png'),
      password: require('../assets/login/password.png'),
      yanz: require('../assets/login/yanz.png'),
      login_bg: {
        backgroundImage: 'url(' + require('../assets/login/bg.png') + ')',
      },
      sgin_bg: {
        backgroundImage: 'url(' + require('../assets/login/login_bg.png') + ')',
      },
      yanzmserve: '',

      form: {
        name: '1053',
        password: '000000',
        yanzm: '',
      },
      rules: {
        name: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        yanzm: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
      },

      checked: false,
    }
  },
  created: function() {
    // 检测是否 有记住密码
    if (JSON.parse(localStorage.getItem('users'))) {
      this.form = JSON.parse(localStorage.getItem('users'))
      //  请求验证码
    }
    this.getyanzhenme()
  },
  methods: {
    submitForm(ruleForm) {
      console.log(this.form)
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          if (this.form.yanzm.toLowerCase() != this.yanzmserve.toLowerCase()) {
            this.$message({
              message: '验证码输入不正确!',
              type: 'error',
            })
            return false
          }

          //  请求登录接口
          // 存储登录状态
          localStorage.setItem('loginstatus', true)
          //  跳转首页
          //分发 actions并更改state  true 传入
          this.$store.dispatch('setIsAutnenticated', true)
          this.$store.dispatch('setUser', this.form)
          this.$message({
            message: '登录成功!',
            type: 'success',
          })
          this.$router.push({ name: 'home' })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    jizhu() {
      if (this.checked) {
        console.log(`object`, this.form)
        localStorage.setItem('users', JSON.stringify(this.form))
      }
    },
    yanzhe() {
      //  请求数据库验证码
    },
    getyanzhenme(data) {
      this.yanzmserve = data
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 20px 0 0 0;
  box-sizing: border-box;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .title {
    text-align: center;
    line-height: 80px;
    margin-top: 20px;
    img {
      width: 24px;
      height: 24px;
      // vertical-align: top;
      margin: 0px 10px 0 0;
    }
    span {
      font-size: 22px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #2ff8ff;
      line-height: 60px;
    }
  }
  .login_from {
    width: 624px;
    height: 446px;
    box-sizing: border-box;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .el-form {
    width: 424px;
    margin: 0 auto;
  }
  .el-form-item {
    margin: 0 auto 16px;
    width: 100%;
    height: 44px;

    /deep/ .el-input__inner {
      background-color: #09234d !important;
      color: #fff;
      border: none;
      padding-left: 40px;
    }
    //
    /deep/ .el-input__prefix {
      height: 44px;
      margin: 0 0 0 8px;
      img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
    }
    .el-checkbox {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #ffffff;
    }
    .el-button {
      width: 100%;
      height: 44px;
      // background: #2faeff;
      border: none;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
    }
  }
}
h3 {
  font-size: 80px;
}
</style>
