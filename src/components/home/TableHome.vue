<template>
  <div class="tables" id="">
    <div class="top">
      <div class="title_e">
        {{ title }}
      </div>
      <div class="show_times">更新时间:{{ showTime }}</div>
    </div>
    <div class="tab_warp">
      <div class="selevt_b">
        <div class="date_box">
          日期:
          <el-date-picker
            class="dy_date"
            prefix-icon="el-icon-caret-bottom"
            v-model="startY"
            type="year"
            placeholder="选择年"
            clear-icon="none"
            format="yyyy"
            value-format="yyyy"
            @change="changeYear()"
          >
          </el-date-picker>
          ~
          <el-date-picker
            class="dy_date"
            prefix-icon="el-icon-caret-bottom"
            v-model="endY"
            type="year"
            placeholder="选择年"
            clear-icon="none"
            format="yyyy"
            value-format="yyyy"
            @change="changeYear()"
          >
          </el-date-picker>
        </div>
      </div>
      <div class="rad_box">
        <el-radio-group v-model="radio">
          <el-radio :label="item.label" @change="change()" v-for="(item, index) in radiOption" :key="index">{{
            item.name
          }}</el-radio>
        </el-radio-group>
      </div>
      <Lineone :dataList="dataList" />
    </div>
  </div>
</template>
<script>
import Lineone from '@/components/base/Lineone.vue'
import { homezqfb } from '@/api/home'

export default {
  name: 'TableHome',
  components: {
    Lineone,
  },
  props: {
    msg: String,
    querArr: Array,
  },
  data() {
    return {
      title: '周期分布',
      showTime: '2021.05.08 24:00:00',
      startY: '2018',
      endY: '2021',

      radio: 0,

      radiOption: [
        { label: 0, name: '首次入金周期' },
        { label: 1, name: '开户后首次交易周期' },
        { label: 2, name: '入金后首次交易周期' },
      ],

      dataList: {
        series: [],
        dataX: [],
        name: '',
      },
      chartData: [],
      seriesNmae: [],
    }
  },

  //方法集合
  methods: {
    change() {
      this.getData(this.querArr)
    },

    changeYear() {
      console.log(this.startY, 'startY')
      this.getTime(this.querArr)
    },
    dataAC(data) {
      let arr = data[this.radio].root,
        dataX = [],
        series = []

      switch (this.radio) {
        case 0:
          //   星期
          arr.forEach((item) => {
            series.push(item.cust_count)
            dataX.push(item.day_num_zh)
          })
          break
        case 1:
          //   月份
          arr.forEach((item) => {
            series.push(item.cust_count)
            dataX.push(item.day_num_zh)
          })
          break
        case 2:
          //   季度
          arr.forEach((item) => {
            series.push(item.cust_count)
            dataX.push(item.day_num_zh)
          })
          break

        default:
          //   星期
          arr.forEach((item) => {
            series.push(item.cust_count)
            dataX.push(item.day_num_zh)
          })
          break
      }
      return {
        series,
        dataX,
      }
    },

    getData(pramArr) {
      let curArr = [
        ['p_begin_year', this.startY, 'C', '255'],
        ['p_end_year', this.endY, 'C', '255'],
      ]
      console.log(curArr, 'curArrcurArr')
      pramArr = pramArr.concat(curArr)

      homezqfb(pramArr).then((res) => {
        let obj = JSON.parse(res.data.Data)
        console.log(obj, '实时流动----')
        this.dataList = {
          series: this.dataAC(obj).series,
          dataX: this.dataAC(obj).dataX,
          name: this.radiOption[this.radio].name,
        }
        this.showTime = obj.length > 0 ? obj[0].root[0].update_time : '未知'
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
//@import url(); 引入公共css类
.tables {
  width: 640px;
  height: 460px;

  background: url('../../assets/home/lsef_3_bg.png');
  @include backgroundSize;
  .top {
    display: flex;
    justify-content: space-between;
    width: 640px;
    height: 60px;
    background: url('../../assets/home/zhouqi22.png') no-repeat;
    @include backgroundSize;

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
  .tab_warp {
    width: 640px;
    box-sizing: border-box;
  }

  .dy_cont {
    font-family: SourceHanSansCN-Regular;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 17px;
    letter-spacing: 0px;
    color: #2ff8ff;
    text-align: center;
  }
  /deep/ .el-table thead tr th {
    height: 58px;
  }

  /deep/ .dytable .el-table thead tr th:nth-last-child(2) {
    color: #2ff8ff !important;
  }
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
  padding: 0 20px 20px;
}
.rad_box_right {
  text-align: right;
}

.dy_date {
  width: 80px;
  height: 20px;
  /deep/ .el-input__inner {
    padding: 0 10px;
    background-color: transparent !important;
    height: 20px;
    border: 1px solid $ff05 !important;
  }

  /deep/ .el-input__prefix {
    color: $ff05;
    right: -40px;
    top: -8px;
  }
  /deep/ .el-radio {
    color: $ff05;
  }
}

/deep/ .echarts_box {
  width: 90%;
  height: 300px;
  margin: 0 auto;
}
</style>
