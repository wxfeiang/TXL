<template>
  <div class="Left_3" id="">
    <div class="top">
      <div class="title_e">
        {{ title }}
      </div>
      <div class="show_times">统计时间：{{ showTime }}</div>
    </div>
    <div class="center">
      <LineChart :chartData="chartData" />
    </div>
  </div>
</template>
<script>
//例如：import 《组件名称》 from '《组件路径》';
import LineChart from '@/components/base/Line.vue'

import { openSumLine } from '@/api/home'
export default {
  name: 'Account',
  components: {
    LineChart,
  },
  props: {
    msg: String,
    querArr: Array,
  },
  data() {
    return {
      title: '开户数总体情况',
      showTime: '',
      chartData: [],
    }
  },
  //方法集合
  methods: {
    getData(pramArr) {
      openSumLine(pramArr).then((res) => {
        if (res.data.ErrorCode == 0) {
          var obj = JSON.parse(res.data.Data)[0].root
          console.log(obj, 'objcont')
          this.chartData = obj
          this.showTime = obj.length > 0 ? obj[0].update_time : '未知'
        }
      })
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getData(this.querArr)
  },
}
</script>
<style lang="scss" scoped>
.Left_3 {
  width: 1120px;
  height: 460px;
  background: url('../../assets/home/tabls.png') no-repeat;
  @include backgroundSize;
  .top {
    width: 1120px;
    height: 60px;
    padding: 0 10px;
    background: url('../../assets/home/right_22.png') no-repeat;

    @include backgroundSize;

    display: flex;
    justify-content: space-between;
    .title_e {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #f1f1f1;
      line-height: 65px;
      padding-left: 50px;
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
    box-sizing: border-box;
    padding: 10px 10px;
  }
}
</style>
