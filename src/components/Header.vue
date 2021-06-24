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
        <div class="time">
          实时更新频率:10分钟
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
          用户账号
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
    }
  },
  created: function() {},
  methods: {},
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
}
</style>
