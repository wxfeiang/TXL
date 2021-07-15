<template>
  <div class="">
    <Header />
    <div class="layout">
      <!-- <Banner />
      <Talbeof title="股权转让" />
      <Talbeof title="资产交易" />
      <Talbeof title="企业增资" /> -->
      <!-- <Jiaoyi /> -->
      <!-- <iframe
        src="http://api.ejy365.com/e-jy/portal/jjdt/list?orgId=101017&amp;pages=1&amp;pageSize=8&amp;t=2"
        frameborder="0"
        width="1160"
        scrolling="no"
        height="510"
        class="jiaoyi"
      ></iframe> -->
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
// import Banner from '@/components/Banner.vue'
// import Talbeof from '@/components/Talbeof.vue'
// import Jiaoyi from '@/components/Jiaoyi.vue'

import Footer from '@/components/Footer.vue'
export default {
  name: 'index',
  components: {
    Header,
    Footer,
    // Banner,
    // Talbeof,
    // Jiaoyi,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
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
