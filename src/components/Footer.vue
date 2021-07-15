<template>
  <div class="footer">
    <div class="layout top">
      <div class="top_left">
        <div class="item">
          <div class="link">
            产权转让
          </div>
          <div class="link">
            资产交易
          </div>
          <div class="link">
            企业增资
          </div>
        </div>
        <div class="item">
          <div class="link">
            电话：0931-8732152
          </div>
          <div class="link">
            传真：0931-8732152
          </div>
          <div class="link">
            微信公众平台
          </div>
        </div>
      </div>
      <div class="top_right">
        <img :src="logoM" alt="" />
      </div>
    </div>
    <div class="center">
      <p>地址：甘肃省兰州市城关区农民巷8号之1号盛达金融大厦21层</p>
      <p>甘肃股权交易中心 版权所有： Copyright © 2021备案信息：陇ICP备07001814号-2</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '悦高用户漏斗分析软件',
      logoM: require('../assets/homeIndex/logoM.jpg'),
    }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 30px 0 0 0;
  height: 200px;
  background: #17192b;
  box-sizing: border-box;
  .top {
    display: flex;
    justify-content: center;
    .top_left {
      display: flex;
      justify-content: center;
      .item {
        font-size: 12px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #999999;
        margin: 0 80px 0 0;
        line-height: 30px;
      }
    }
    .top_right {
      img {
        width: 80px;
        height: 80px;
      }
    }
  }
  .center {
    text-align: center;
    p {
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #999999;
      line-height: 30px;
    }
  }
}
</style>
