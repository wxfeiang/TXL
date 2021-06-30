<template>
  <div class="left_menu">
    <template v-for="(item, index) in menu">
      <router-link class="menu_item" :to="item.name" :key="index">
        <div class="text">{{ item.meta.title }}</div>
      </router-link>
    </template>
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
      menu: [
        {
          path: '/Openaccount',
          name: 'Openaccount',
          meta: {
            title: '开户层',
          },
        },
        {
          path: '/Ingold',
          name: 'Ingold',
          meta: {
            title: '入金层',
          },
        },

        {
          path: '/Transaction',
          name: 'Transaction',
          meta: {
            title: '交易层',
          },
        },
        {
          path: '/Subsist',
          name: 'Subsist',
          meta: {
            title: '存续层',
          },
        },
        {
          path: '/Deactivation',
          name: 'Deactivation',
          meta: {
            title: '失活层',
          },
        },
      ],
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
    background: url('../assets/home/menu_bg.png') no-repeat;
    justify-items: center;
    box-sizing: border-box;
    background-size: 100% 100%;
    cursor: pointer;
    &:hover {
      background: url('../assets/kihu/menu_hover.png') no-repeat;
      box-sizing: border-box;
      background-size: 100% 100%;
    }

    .text {
      width: 16px;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #00fffc;
      text-align: center;
      writing-mode: vertical-lr;
      padding: 20px 0 0 0;
    }
  }
  .router-link-active {
    background: url('../assets/kihu/menu_hover.png') no-repeat;
    box-sizing: border-box;
    background-size: 100% 100%;
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
  .menu_item:nth-child(5) {
    top: -240px;
    z-index: 5;
  }
}
</style>
