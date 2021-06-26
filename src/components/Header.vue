<template>
  <div class="header">
    <div class="logo">
      <img :src="logo" alt="" />
    </div>
    <div class="h_left">
      {{ title }}
    </div>
    <div class="h_center">
      <div class="time">
        2021.05.08 16:10:55
      </div>
      <div class="time_select">
        <div class="time_show">实时更新频率:</div>
        <div class="select_item">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <span v-html="timevlaue">10</span>分钟 <i class="el-icon-arrow-down el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="item.value" v-for="item in time" :key="item.value"
                >{{ item.value }}{{ item.dw }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="h_right">
      <div class="desc">
        <img :src="s_home" alt="" />
        <span>
          平台总览
        </span>
      </div>
      <div class="actiion">
        <img :src="action" alt="" />
        <span>
          设置
        </span>
      </div>
      <div class="user">
        <img :src="user" alt="" />
        <span>
          <el-dropdown @command="logout">
            <span class="el-dropdown-link">
              {{ users.name }}
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="0">退出 </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
  data() {
    return {
      title: '悦高用户漏斗分析软件',
      logo: require('../assets/login/logo.png'),
      s_home: require('../assets/home/s_home.png'),
      action: require('../assets/home/action.png'),
      user: require('../assets/home/action.png'),
      time: [
        { value: 5, dw: '分钟' },
        { value: 10, dw: '分钟' },
        { value: 15, dw: '分钟' },
        { value: 30, dw: '分钟' },
      ],
      timevlaue: 10,
    }
  },
  created: function() {},
  computed: {
    // 判断是否登录 授权 getters.js
    // isLogin() {
    //   return this.$store.getters.isAutnenticated ? true : false
    // },
    users() {
      return this.$store.getters.user
    },
  },
  methods: {
    handleCommand(command) {
      this.timevlaue = command
      //  TODO
    },

    logout(command) {
      console.log(command)
      //删除localStorage
      // localStorage.removeItem('jwtToken')
      // 删除请求头 改变 actions 状态
      // this.$store.dispatch("setIsAutnenticated", false);
      //清空user
      //this.$store.dispatch("setUser", {});

      this.$store.dispatch('clearCurrentState')
      //跳转登录
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  padding-top: 3px;
  height: 48px;
  display: flex;
  // margin: 10px 0 0 0;

  .logo {
    position: absolute;
    top: 20px;
    left: 35px;
    width: 50px;
    height: 50px;

    img {
      width: 50px;
      height: 50px;
    }
  }

  .h_left {
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #2ff8ff;
    padding: 0 0 0 105px;
    line-height: 48px;
    width: 30%;
  }
  .h_center {
    display: flex;
    padding-left: 100px;
    width: 30%;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 48px;
    color: #ffffff;

    .time {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #ffffff;
      margin-right: 60px;
    }
    .time_select {
      display: flex;
      .time_show {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
        margin-right: 10px;
      }
    }
  }

  .h_right {
    flex: 1;
    text-align: right;
    display: flex;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #666;
    line-height: 48px;
    justify-content: flex-end;
    padding-right: 60px;
    .desc {
      margin-left: 10px;
      img {
        width: 22px;
        height: 20px;
      }
    }
    .actiion {
      margin-left: 10px;
      img {
        width: 22px;
        height: 20px;
      }
    }
    .user {
      margin-left: 10px;

      img {
        width: 22px;
        height: 20px;
      }
    }
    .active {
      color: #2ff8ff;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>
