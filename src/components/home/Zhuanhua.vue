<template>
  <div class="right_item">
    <div class="top">
      <div class="title_e">
        {{ title }}
      </div>
      <div class="show_times">更新时间:{{ showTime }}</div>
    </div>
    <div class="center">
      <div class="bar" v-for="(item, index) in barVal" :key="index">
        <div class="B_text">
          {{ item.name }}
        </div>
        <div class="B_Number">
          {{ item.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { changeSaveRate } from '@/api/home'
export default {
  name: 'Zhuanhua',
  props: {
    msg: String,
    querArr: Array,
  },
  data() {
    return {
      title: '实时转化率/留存率',
      showTime: '2021.05.08 24:00:00',
      barVal: [],
    }
  },
  created: function() {
    this.getData(this.querArr)
  },
  methods: {
    // 请求实时分层数据
    getData(pramArr) {
      changeSaveRate(pramArr).then((res) => {
        if (res.data.ErrorCode == 0) {
          var obj = JSON.parse(res.data.Data)[0].root[0]
          this.showTime = obj.length > 0 ? obj.update_time : '未知'
          if (obj) {
            this.barVal = [
              { value: obj.in_capital_rate + '%', name: '入金转化率' },
              { value: obj.trd_rate + '%', name: '交易转化率' },
              { value: obj.hold_rate + '%', name: '存续转化率' },
              { value: obj.lost_rate + '%', name: '静态留存率' },
              { value: obj.jt_save_rate + '%', name: '动态留存率' },
              { value: obj.dt_save_rate + '%', name: '动态流失率' },
            ]
            // this.$forceUpdate()
          } else {
            this.barVal = [
              { value: '0', name: '入金转化率' },
              { value: '0', name: '交易转化率' },
              { value: '0', name: '存续转化率' },
              { value: '0', name: '静态留存率' },
              { value: '0', name: '动态留存率' },
              { value: '0', name: '动态流失率' },
            ]
          }
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.right_item {
  width: 1120px;
  height: 200px;
  background: url('../../assets/home/right_3.png');
  @include backgroundSize;

  .top {
    display: flex;
    justify-content: space-between;
    width: 1120px;
    height: 60px;
    background: url('../../assets/home/title_right_2.png');
    @include backgroundSize;
    .title_e {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #f1f1f1;
      line-height: 60px;
      padding-left: 60px;
    }
    .show_times {
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.5);
      line-height: 40px;
      padding-right: 30px;
    }
  }
  .center {
    display: flex;
    justify-content: space-around;
    padding: 10px 10px 0;

    .bar {
      margin-top: 20px;
      width: 145px;
      height: 60px;
      padding-right: 5px;
      background: url('../../assets/home/bar_bg.png') no-repeat;
      @include backgroundSize;
      .B_text {
        text-align: right;
        font-size: 14px;
        font-family: Source Han Sans CN;

        color: #4bf3f9;
        line-height: 20px;
        margin-top: -5px;
      }
      .B_Number {
        font-family: Source Han Sans CN;
        font-weight: bold;
        font-style: italic;
        color: #4bf3f9;
        text-align: right;
        font-size: 20px;
        line-height: 50px;
      }
    }
  }
}
</style>
