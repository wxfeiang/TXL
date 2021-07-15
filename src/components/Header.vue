<template>
  <div class="header_box">
    <div class="layout header">
      <div class="header_left">
        <img :src="logo" alt="logo" />
      </div>
      <div class="header_right">
        <div class="right_item">
          <img :src="jiaoyi" alt="logo" />
          <p>交易方登录</p>
        </div>
        <div class="right_item">
          <img :src="jingjia" alt="logo" />
          <p>竞价登录</p>
        </div>
        <div class="right_item">
          <img :src="ment" alt="logo" />
          <p>机构登录</p>
        </div>
        <div class="right_item">
          <img :src="rister" alt="logo" />
          <p>免费注册</p>
        </div>
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
      logo: require('../assets/homeIndex/logo.png'),
      jiaoyi: require('../assets/homeIndex/jiaoyi.png'),
      jingjia: require('../assets/homeIndex/jingjia.png'),
      ment: require('../assets/homeIndex/ment.png'),
      rister: require('../assets/homeIndex/rister.png'),
    }
  },
  created: function() {
    // alert('11')
  },

  computed: {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.header_box {
  background: #fff;
}
.header {
  height: 100px;
  display: flex;
  justify-content: space-between;
  .header_left {
    line-height: 100px;
  }
  .header_right {
    display: flex;
    justify-content: end;

    .right_item {
      margin-left: 5px;
      width: 100px;
      height: 100px;
      background: #f5f5f5;
      text-align: center;
      cursor: pointer;
      box-sizing: border-box;
      padding: 20px 0 0 0;
      img {
        width: 40px;
        height: 40px;
      }
      p {
        height: 14px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #b5975f;
        line-height: 30px;

        text-align: center;
      }
    }
  }
}
</style>
