<template>
  <div :class="['OverallTime', scren ? 'fillscren' : ' ']" id="OverallTime">
    <Title title="首笔交易时间" @fillscren="fillscren" />
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
    <!-- <div class="rad_box  rad_box_right">
      <el-radio-group v-model="radio2">
        <el-radio :label="item.label" @change="change2()" v-for="(item, index) in radiOption2" :key="index">{{
          item.name
        }}</el-radio>
      </el-radio-group>
    </div> -->
    <Lineone :dataList="dataList" />
  </div>
</template>
<script>
import Title from '@/components/base/Title.vue'
import Lineone from '@/components/base/Lineone.vue'

import { layerKhsj } from '@/api/Transaction'
export default {
  components: {
    Title,
    Lineone,
  },
  props: {
    msg: String,
    querArr: Array,
  },
  data() {
    return {
      scren: false,
      startY: '2018',
      endY: '2021',

      radio: 0,
      radiOption: [
        { label: 0, name: '开户后周期' },
        { label: 1, name: '入金后周期' },
        { label: 2, name: '时段' },
        { label: 3, name: '金额' },
        { label: 4, name: '方式' },
        { label: 5, name: '品种' },
        { label: 6, name: '仓位' },
      ],
      radio2: '0',
      radiOption2: [
        { label: '0', name: '总计' },
        { label: '1', name: '均值' },
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
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getData()
  },

  //方法集合
  methods: {
    fillscren() {
      this.scren = !this.scren // move the window to 0,0 (X,Y)
      // this.diyWindowResize()
    },
    change(value) {
      console.log('value', value, this.radio)
      this.getData()
    },
    change2(value) {
      //  第二个切换显示
      console.log('value', value, this.radio2)
      this.getData()
    },
    changeYear() {
      console.log(this.startY, 'startY')
      this.getData()
    },
    //格式化数据
    dataAC(data) {
      let arr = data[this.radio].root,
        count = [],
        dataX = []

      console.log('datadatadatadata', data, arr)

      switch (this.radio) {
        case 0:
          //   开户后周期数据
          arr.forEach((item) => {
            count.push(item.cust_count)
            dataX.push(item.day_num_zh)
          })
          break
        case 1:
          //   入金后周期数据
          arr.forEach((item) => {
            count.push(item.cust_count)
            dataX.push(item.day_num_zh)
          })
          break
        case 2:
          //  金额数据
          arr.forEach((item) => {
            count.push(item.cust_count)
            dataX.push(item.hh_num_zh)
          })
          break
        case 3:
          //   时段
          arr.forEach((item) => {
            count.push(item.cust_count)
            dataX.push(item.money_num_zh)
          })
          break
        case 4:
          //   时段
          arr.forEach((item) => {
            count.push(item.cust_count)
            dataX.push(item.trd_first_type_zh)
          })
          break
        case 5:
          //   时段
          arr.forEach((item) => {
            count.push(item.cust_count)
            dataX.push(item.trd_first_variety_zh)
          })
          break
        case 6:
          //   时段
          arr.forEach((item) => {
            count.push(item.cust_count)
            dataX.push(item.trd_first_position_zh)
          })
          break
        default:
          //   星期
          arr.forEach((item) => {
            count.push(item.cust_count)
            dataX.push(item.wk_num_zh)
          })
          break
      }
      return {
        series: count,
        dataX,
      }
    },
    // 数据
    getData() {
      console.log('')
      let curArr = [
        ['p_begin_year', this.startY, 'C', '255'],
        ['p_end_year', this.endY, 'C', '255'],
      ]

      let pramArr = this.querArr.concat(curArr)

      layerKhsj(pramArr).then((res) => {
        if (res.data.ErrorCode == 0) {
          let obj = JSON.parse(res.data.Data)
          this.dataList.dataX = this.dataList = {
            series: this.dataAC(obj).series,
            dataX: this.dataAC(obj).dataX,
            name: this.radiOption[this.radio].name,
          }
        } else {
          console.log(res.data.Data)
        }
      })
    },
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
  padding: 0 10px;

  /deep/ .el-radio-group {
    .el-radio {
      margin-right: 0px !important;
    }
  }
}

/deep/ .el-radio {
  margin-right: 6px !important;
  margin-bottom: 10px !important;
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
  padding: 0 10px;
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
</style>
