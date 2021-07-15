<template>
  <div class="" id="">
    <div class="tag" @click="go_back()">
      首页 > 产权转让
    </div>
    <div class="boot_20 ban_box">
      <div class="left">
        <div class="top">
          <img :src="ss" alt="" />
        </div>
        <div class="center">
          <img :src="ss2" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="top_title">
          <span>预披露</span>
          甘肃华茂博文书业有限公司100%股权拟转让预告
        </div>
        <div class="number">
          项目编号：N0117GQ210035
        </div>
        <div class="baoming">
          <span>正在<br />报名</span>
          <p>倒计时 24 天 5 小时 8 分钟 14 秒</p>
        </div>
        <div class="cen_des">
          <span>挂牌价格</span>
          <span>696.150000</span>万元
          <span>保证金</span>
          <span>340,000</span>元
        </div>
        <div class="cen_ct">
          <span>所属地区</span>
          <span>兰州市宁海路122号</span>
        </div>

        <div class="btns">
          报名
        </div>
        <div class="desc_text">
          <p>预告开始时间：2021-07-09 09:00:00</p>
          <p>预告截止时间：2021-08-06 17:00:00</p>
        </div>
      </div>
    </div>
    <div class="boot_20 dees_step">
      <img :src="step" alt="" />
    </div>
    <div class="tabs boot_20">
      <el-tabs>
        <el-tab-pane>
          <span slot="label">
            <div class="tabs_item">挂牌信息</div>
          </span>
          <Tables1 />
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">
            <div class="tabs_item">成交公告</div>
          </span>
          <Tables2 />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Tables1 from '@/components/Tables1.vue'
import Tables2 from '@/components/Tables2.vue'
export default {
  components: {
    Tables1,
    Tables2,
  },
  data() {
    return {
      step: require('../assets/homeIndex/step.png'),
      ss: require('../assets/homeIndex/ss.png'),
      ss2: require('../assets/homeIndex/ss2.png'),

      activeName: 'first',
    }
  },
  //方法集合
  methods: {
    go_back() {
      this.$router.go(-1)
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
}
</script>
<style lang="scss" scoped>
.tag {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #333333;
  line-height: 50px;
  cursor: pointer;
}
.ban_box {
  background: #fff;
  padding: 20px;
  display: flex;
  .left {
    width: 480px;
    margin-right: 30px;
    .top {
      width: 480px;
      height: 360px;
    }
    .center {
      width: 480px;
      height: 47px;
      margin: 20px 0 0 0;
      img {
        width: 480px;
        height: 47px;
      }
    }
  }

  .right {
    padding-top: 30px;
    box-sizing: border-box;
    .top_title {
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #333333;
      line-height: 50px;
      span {
        display: inline-block;
        width: 62px;
        height: 26px;
        vertical-align: middle;
        background: #b5975f;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
        line-height: 26px;
        text-align: center;
      }
    }
    .number {
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #666666;
      line-height: 30px;
      line-height: 40px;
    }
    .baoming {
      width: 500px;
      height: 60px;
      background: #ffffff;
      border: 1px dashed #b5975f;
      display: flex;
      span {
        display: inline-block;
        width: 60px;
        height: 60px;
        background: #b5975f;
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
        text-align: center;
        line-height: 26px;
        box-sizing: border-box;
        padding: 5px 0 0 0;
        // margin: 0 20px 0 0;
      }
      p {
        padding-left: 20px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #b5975f;
        line-height: 60px;
      }
    }
    .cen_des {
      line-height: 40px;
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #333333;
      span:nth-child(2) {
        color: #f10000;
        margin-left: 20px;
        font-size: 18px;
      }
      span:nth-child(3) {
        margin: 0 20px;
      }
      span:nth-child(4) {
        color: #f10000;
      }
    }
    .cen_ct {
      line-height: 40px;
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #333333;
      span:nth-child(2) {
        margin-left: 20px;
      }
    }
    .btns {
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;
      width: 122px;
      height: 42px;
      background: #b5975f;
      line-height: 42px;
      text-align: center;
    }
    .desc_text {
      margin: 65px 0 0 0;
      font-size: 14px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #666666;
      line-height: 30px;
    }
  }
}
.tabs {
  background: #fff;

  .el-tabs__nav .is-top {
  }
  .el-tabs__item {
    padding: 0 20px;
    width: 120px;
  }
  /deep/ .el-tabs__item.is-active {
    color: #b5975f;
  }

  /deep/ .el-tabs__active-bar {
    background-color: #b5975f;
  }
  /deep/ .el-tabs__active-bar {
    width: 100px;
  }
  .tab_d {
    color: red;
  }
  .tabs_item {
    width: 120px;
    text-align: center;
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #333333;
  }
  .tabs_item:hover {
    color: #b5975f;
  }
}
</style>
