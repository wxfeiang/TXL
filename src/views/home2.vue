<template>
  <div class="home2">
    <div class="layout">
      <Banner />
      <Talbeof title="股权转让" />
      <Talbeof title="资产交易" />
      <Talbeof title="企业增资" />
      <!-- <Jiaoyi /> -->
      <iframe
        src="http://api.ejy365.com/e-jy/portal/jjdt/list?orgId=101017&amp;pages=1&amp;pageSize=8&amp;t=2"
        frameborder="0"
        width="1160"
        scrolling="no"
        height="510"
        class="jiaoyi"
      ></iframe>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Talbeof from '@/components/Talbeof.vue'
// import Jiaoyi from '@/components/Jiaoyi.vue'

export default {
  name: 'index',
  components: {
    Banner,
    Talbeof,
    // Jiaoyi,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.home2 {
}
.layout {
  width: 1200px;
  margin: 0 auto;
}
.jiaoyi {
  background: #fff;
  padding: 20px;
  .top {
    height: 76px;
    background: #333333;
  }
}
</style>
