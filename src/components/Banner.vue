<template>
  <div class="banner">
    <el-carousel height="240px">
      <el-carousel-item v-for="(img, index) in imgList" :key="index">
        <img :src="img.url" width="100%" height="100%" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          url: require('../assets/homeIndex/banner.png'),
        },
        {
          url: require('../assets/homeIndex/banner.png'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.banner {
  margin-bottom: 50px;
}
.el-carousel {
  height: 240px;
  background: #fff;
}
.imgs {
  width: 100%;
  height: 100%;
}
/deep/ .el-carousel__indicators {
  display: none;
}
</style>
