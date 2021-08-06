<template>
  <div :class="['OverallTime', scren ? 'fillscren' : ' ']" id="OverallTime">
    <Title title="失活层预警分析" @fillscren="fillscren" />
    <RowBar :dataList="dataList" />
    <RowBar :dataList="dataList2" />
  </div>
</template>
<script>
import Title from '@/components/base/Title.vue'
import RowBar from '@/components/base/RowBar.vue'
import { layerYjfx } from '@/api/deactivation'

export default {
  components: {
    Title,
    RowBar,
  },
  props: {
    msg: String,
    querArr: Array,
  },
  data() {
    return {
      scren: false,
      dataList: {
        series: [],
        dataY: [],
        color: ['rgba(0, 183, 255, 0.35)', 'rgba(0, 183, 255, 1)'],
      },
      dataList2: {
        series: [],
        dataY: [],
        color: ['rgba(0,249,227, 0.35)', 'rgba(0,249,227)'],
      },
    }
  },
  //方法集合
  methods: {
    fillscren() {
      this.scren = !this.scren // move the window to 0,0 (X,Y)
      // this.diyWindowResize()
    },
    //  格式化数据
    dataAC(arr) {
      let series = [],
        name = []

      arr.forEach((item) => {
        series.push(item.cust_count)
        name.push(item.day_num_zh)

        console.log(item)
      })
      return {
        series,
        name,
      }
    },

    getData() {
      layerYjfx(this.querArr).then((res) => {
        if (res.data.ErrorCode == 0) {
          let obj = JSON.parse(res.data.Data)
          this.dataList = {
            series: this.dataAC(obj[0].root).series,
            dataY: this.dataAC(obj[0].root).name,
            title: '近期未交易人数统计',
          }
          this.dataList2 = {
            series: this.dataAC(obj[1].root).series,
            dataY: this.dataAC(obj[1].root).name,
            title: '近期未登录交易系统人数统计',
          }
        } else {
          console.log(res.data.Data)
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
.OverallTime {
  width: 540px;
  height: 376px;
  box-sizing: border-box;
  background: rgba(2, 51, 177, 0.1);
}
.selevt_b {
  margin: 20px 0 10px;
  padding: 0 20px;
  .el-radio-group {
    .el-radio {
      margin-right: 10px;
    }
  }
}
/deep/ .el-radio__input .el-radio__inner {
  background: none !important;
}
.date_box {
  font-size: 12px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: $ff05;
}
.rad_box {
  padding: 0 20px;
}
.rad_box_right {
  text-align: right;
}
</style>
