<template>
  <el-container class="home">
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside> <Leftmenu /></el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Header from '@/components/Header.vue'
import Leftmenu from '@/components/Leftmenu.vue'

export default {
  name: 'index',
  components: {
    Header,
    Leftmenu,
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.home {
  padding: 14px 16px;
  min-height: 1080px;
  background: url('../assets/home/bg_n.jpg') no-repeat top center;
  @include backgroundSize;

  .el-aside {
    width: 70px !important;
    overflow: hidden;
  }
}
</style>
