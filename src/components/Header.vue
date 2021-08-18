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
              <span>{{ timevlaue }}</span
              >分钟 <i class="el-icon-arrow-down el-icon-caret-bottom"></i>

              <!-- 选择时间----- -->
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="item.value" v-for="item in time" :key="item.value"
                >{{ item.value }}{{ item.dw }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="time_select">
        <div class="time_show">轮播展示:</div>
        <div class="select_item">
          <el-dropdown @command="handleCommand2" trigger="click">
            <span class="el-dropdown-link">
              <span v-if="time2flog !== 0">{{ timevlaue2 }}</span>
              <span v-else>{{ timevlaue2 }}</span>

              <i class="el-icon-arrow-down el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="0" v-if="time2flog == 0">默认暂停</el-dropdown-item>
              <el-dropdown-item command="1" v-if="time2flog == 1">默认开启</el-dropdown-item>

              <el-dropdown-item :command="item.value" v-for="item in time2" :key="item.value"
                >{{ item.value }}{{ item.dw }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="h_right">
      <router-link to="/index" :class="['desc', currRouter === '/home' ? 'active' : '']">
        <img :src="s_home" alt="" v-if="currRouter === '/home'" />
        <img :src="s_home2" alt="" v-else />
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
              {{ user.user_name }} ({{ user.userid }})
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="0">退 出 </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
      </div>
    </div>

    <el-dialog title="提示" class="el-dialog_dy" :visible.sync="dialogVisible" width="30%" top="30vh">
      <span>确定退出系统吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button class="" @click="dialogVisible = false">取 消</el-button>
        <el-button class="logu_suree" type="primary" @click="logout">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { loginout } from '@/api/login'
export default {
  name: 'Header',
  props: {
    msg: String,
  },
  data() {
    return {
      title: '悦高用户漏斗分析软件',
      logo: require('../assets/login/logo.svg'),
      s_home: require('../assets/home/s_home.png'),
      s_home2: require('../assets/home/home2.png'),
      action: require('../assets/home/action.png'),
      userimg: require('../assets/home/actor.png'),
      currentTime: {},
      time: [
        { value: 5, dw: '分钟' },
        { value: 10, dw: '分钟' },
        { value: 15, dw: '分钟' },
        { value: 30, dw: '分钟' },
      ],
      timerId: null, // 定时器的标识
      timevlaue: 10,
      dialogVisible: false,
      homeActive: true,
      timerId2: null, // 定时器的标识
      time2flog: 1,
      time2: [
        { value: 1, dw: '分钟' },
        { value: 5, dw: '分钟' },
        { value: 10, dw: '分钟' },
        { value: 15, dw: '分钟' },
      ],
      timevlaue2: '默认暂停',
      time2valus: 5,
    }
  },
  created: function() {
    console.log('config', config.bbh)

    this.title = config.title
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

    ...mapGetters(['user', 'currRouter']),
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
      this.$store.dispatch('setTime', command)
      this.$message({
        message: '系统更新频率切换到' + command + '分钟 ！',
        type: 'success',
      })
    },
    handleCommand2(command) {
      console.log(command, '-------------')
      if (command == 0) {
        this.timevlaue2 = '默认暂停'
        this.time2flog = 1
        //  暂停

        if (this.timerId2) {
          clearInterval(this.timerId2)
        }
        this.$message({
          message: '轮播展示时间' + command,
          type: 'success',
        })

        return false
      } else {
        //开启
        console.log('esle--')
        this.time2flog = 0

        this.timevlaue2 = command + '分钟'
        this.time2valus = command
        this.startIntervalPath()
        this.$message({
          message: '轮播展示时间' + command + '分钟 ！',
          type: 'success',
        })
      }
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
      loginout().then((res) => {
        console.log(res)
        if (res.data.ErrorCode == 0) {
          var obj = JSON.parse(res.data.Data)
          console.log(obj)

          this.$store.dispatch('clearCurrentState')
          //跳转登录
          this.$router.push('/login')
          this.$message({
            message: '退出系统成功!',
            type: 'success',
          })
        } else {
          this.$message({
            message: '失败!',
            type: 'error',
          })
        }
      })
    },
    startIntervalPath() {
      if (this.timerId2) {
        clearInterval(this.timerId2)
      }
      //  获取路由地址
      console.log(this.$route.path, '$route.name ')
      let path = this.$route.path
      let route = this.$router.options.routes[3].children
      let rootArr = route.map((item) => item.path)

      let i = null
      rootArr.forEach((item, index) => {
        if (item === path) {
          i = index
        }
      })
      console.log(i)
      var times = this.time2valus
      console.log(times, 'times')
      this.timerId2 = setInterval(() => {
        i++
        if (i == 6) {
          i = 0
        }
        console.log(i, '-----dingshi ----------', times * 60 * 1000)
        this.$router.push(rootArr[i])
      }, times * 60 * 1000)
    },
  },
  mounted: function() {
    // this.startIntervalPath()
  },

  destroyed() {
    clearInterval(this.timerId2)
    this.homeActive = false
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
    // width: 50%;
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

      span {
        margin: 0 5px 0;
      }
    }
    .time_select {
      display: flex;
      margin-left: 40px;
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
    padding-right: 30px;
    .desc {
      margin-left: 20px;
      cursor: pointer;
      color: $ff05;
      img {
        vertical-align: top;
        margin-top: 15px;
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
      &:hover {
        color: #2ff8ff;
      }
    }
    .user {
      margin-left: 20px;
      color: $ff05;
      img {
        // width: 22px;
        // height: 20px;
        width: 30px;
        height: 30px;
        vertical-align: top;
        margin: 6px 0 0 0;
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
  .router-link-active {
    color: red;
  }
}
/deep/ .el-dialog {
  background: #031a53 !important;
}
/deep/ .el-dialog__header {
  color: #fff;
}
/deep/ .el-dialog__header span {
  color: #fff;
}
/deep/ .el-dialog__body {
  color: #fff;
}
.logu_close {
  background: transparent;
}
.logu_suree {
  background: #2faeff;
}
</style>
