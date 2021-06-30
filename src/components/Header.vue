<template>
  <div class="header">
    <div class="logo">
      <img :src="logo" alt="" />
    </div>
    <div class="h_left">{{ title }}</div>
    <div class="h_center">
      <div class="time">
        <span>{{ currentTime.date }}</span>
        <span>{{ currentTime.time }}</span>
        <span>{{ currentTime.week }}</span>
      </div>
      <div class="time_select">
        <div class="time_show">实时更新频率:</div>
        <div class="select_item">
          <el-dropdown @command="handleCommand" trigger="click">
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
      <router-link class="desc" to="/index">
        <img :src="s_home" alt="" />
        <span>
          平台总览
        </span>
      </router-link>
      <div class="actiion">
        <img :src="action" alt="" />
        <span>
          设置
        </span>
      </div>
      <div class="user">
        <span>
          <el-dropdown @command="logouting" trigger="click">
            <span class="el-dropdown-link">
              <img :src="userimg" alt="" />
              {{ user.name }}
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="0">退出 </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
      </div>
    </div>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" top="30vh">
      <span>确定退出系统吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="logout">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
      userimg: require('../assets/home/actor.png'),
      currentTime: {},
      timerId: '',
      time: [
        { value: 5, dw: '分钟' },
        { value: 10, dw: '分钟' },
        { value: 15, dw: '分钟' },
        { value: 30, dw: '分钟' },
      ],
      timevlaue: 10,
      dialogVisible: false,
    }
  },
  created: function() {
    this.getCurrentTime()
  },

  computed: {
    // 判断是否登录 授权 getters.js
    // isLogin() {
    //   return this.$store.getters.isAutnenticated ? true : false
    // },
    // users() {
    //   return this.$store.getters.user
    // },

    ...mapGetters(['user']),
  },
  methods: {
    getCurrentTime() {
      this.autoPlay()
      setInterval(this.autoPlay, 1000)
      this.startInterval()
    },
    autoPlay() {
      const date = new Date() //返回系统时间
      const y = date.getFullYear()
      const m = date.getMonth() + 1
      const da = date.getDate()
      var day = date.getDay()

      const h = date.getHours()
      const min = date.getMinutes()
      const s = date.getSeconds()
      const arr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

      this.currentTime = {
        date: y + '年' + m + '月' + da + '日',
        time: this.toTwo(h) + ':' + this.toTwo(min) + ':' + this.toTwo(s),
        week: arr[day],
      }
    },
    toTwo(date) {
      return date < 10 ? '0' + date : date
    },

    startInterval() {
      if (this.timerId) {
        clearInterval(this.timerId)
      }
      this.timerId = setInterval(() => {
        this.autoPlay()
      }, 1000)
    },
    handleCommand(command) {
      this.timevlaue = command

      this.$message({
        message: '系统更新频率切换到' + command + '分钟 ！',
        type: 'success',
      })
    },
    gohome() {
      this.$router.push('/index')
    },
    logouting(command) {
      console.log(command)
      //删除localStorage
      // localStorage.removeItem('jwtToken')
      // 删除请求头 改变 actions 状态
      // this.$store.dispatch("setIsAutnenticated", false);
      //清空user
      //this.$store.dispatch("setUser", {});
      this.dialogVisible = true
    },
    logout() {
      this.$store.dispatch('clearCurrentState')
      //跳转登录
      this.$router.push('/login')
    },
  },
  destroyed() {
    clearInterval(this.timerId)
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  padding-top: 8px;
  height: 48px;
  display: flex;
  // margin: 10px 0 0 0;

  .logo {
    position: absolute;
    top: 20px;
    left: 20px;
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
    padding-left: 70px;
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
      span {
        margin: 0 5px 0;
      }
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
    color: $ff05;
    line-height: 48px;
    justify-content: flex-end;
    padding-right: 60px;
    .desc {
      margin-left: 20px;
      cursor: pointer;
      img {
        vertical-align: top;
        margin-top: 13px;
        width: 22px;
        height: 20px;
      }
    }
    .actiion {
      margin-left: 20px;
      cursor: pointer;
      img {
        vertical-align: top;
        margin-top: 15px;
        width: 22px;
        height: 20px;
      }
    }
    .user {
      margin-left: 20px;
      color: $ff05;

      img {
        // width: 22px;
        // height: 20px;
        vertical-align: top;
      }
    }
    .active {
      color: #2ff8ff;
    }
    .el-dropdown-link {
      cursor: pointer;
      color: $ff05;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
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
