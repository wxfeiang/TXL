<template>
  <div class="left_menu">
    <div class="menu_item" :style="menu_bg">
      <div class="text">
        开户去
      </div>
    </div>
    <div class="menu_item" :style="menu_bg">
      <div class="text">
        开户去
      </div>
    </div>

    <div class="menu_item" :style="menu_bg">
      <div class="text">
        开户去
      </div>
    </div>
    <div class="menu_item" :style="menu_bg">
      <div class="text">
        开户去
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Leftmenu',
  props: {
    msg: String,
  },
  data() {
    return {
      title: '悦高用户漏斗分析软件',
      logo: require('../assets/login/logo.png'),
      menu_bg: {
        backgroundImage: 'url(' + require('../assets/home/menu_bg.png') + ')',
      },
    }
  },
  created: function() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.left_menu {
  position: relative;
  top: 120px;
  width: 70px;
  .menu_item {
    width: 70px;
    height: 175px;
    // margin: -10px 0 0 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-self: ceter;
    justify-items: center;
    box-sizing: border-box;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    cursor: pointer;

    .text {
      width: 16px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #00fffc;
      text-align: center;
      writing-mode: vertical-lr;
    }
  }
  .menu_item:nth-child(1) {
    top: -80px;
  }
  .menu_item:nth-child(2) {
    top: -120px;
    z-index: 2;
  }
  .menu_item:nth-child(3) {
    top: -160px;
    z-index: 3;
  }
  .menu_item:nth-child(4) {
    top: -200px;
    z-index: 4;
  }
}
</style>
