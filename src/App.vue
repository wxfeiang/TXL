<template>
  <div id="app">

      <!-- <router-link>Home</router-link>  -->
      <!-- <router-link to="/about">About</router-link> -->
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o"  to="/">联系人</van-tabbar-item>
    <van-tabbar-item icon="setting-o"  to="/about">设置</van-tabbar-item>
  </van-tabbar>

    <!--  -->
    <router-view/>
  </div>
</template>
<script>
export default {
    data() {
    return {
      active: 0,
    };
  },
}
</script>
<style>
#app {

}
html,body{
  background: #f5f5f5;
  height: 100%;
}

</style>
