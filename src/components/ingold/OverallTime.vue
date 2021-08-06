<template>
  <div :class="['OverallTime', scren ? 'fillscren' : ' ']" id="OverallTime">
    <Title title="首笔入金时间" @fillscren="fillscren" />
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
    <div class="rad_box  rad_box_right">
      <el-radio-group v-model="radio2">
        <el-radio :label="item.label" @change="change2()" v-for="(item, index) in radiOption2" :key="index">{{
          item.name
        }}</el-radio>
      </el-radio-group>
    </div>
    <Barone :dataList="dataList" />
  </div>
</template>
<script>
import Title from '@/components/base/Title.vue'
import Barone from '@/components/base/Barone.vue'
import { layerKhsj } from '@/api/ingold'
export default {
  components: {
    Title,
    Barone,
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
        { label: 0, name: '周期' },
        { label: 1, name: '时段' },
        { label: 2, name: '金额' },
        { label: 3, name: '方式' },
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
        rotate: '30',
      },
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
        meanval = [],
        count = [],
        dataX = [],
        series = []

      console.log(data, 'datadatadatadata', arr, this.radio)

      switch (this.radio) {
        case 0:
          //   星期
          arr.forEach((item) => {
            meanval.push(item.cust_count_avg)
            count.push(item.cust_count)
            dataX.push(item.day_num_zh)
          })
          break
        case 1:
          //   月份
          arr.forEach((item) => {
            meanval.push(item.cust_count_avg)
            count.push(item.cust_count)
            dataX.push(item.hh_num_zh)
          })
          break
        case 2:
          //   季度
          arr.forEach((item) => {
            meanval.push(item.cust_count_avg)
            count.push(item.cust_count)
            dataX.push(item.money_num_zh)
          })
          break
        case 3:
          //   时段
          arr.forEach((item) => {
            meanval.push(item.cust_count_avg)
            count.push(item.cust_count)
            dataX.push(item.in_first_type_zh)
          })
          break
        default:
          //   星期
          arr.forEach((item) => {
            meanval.push(item.cust_count_avg)
            count.push(item.cust_count)
            dataX.push(item.day_num_zh)
          })
          break
      }
      if (this.radio2 == 0) {
        series = count
        return {
          series,
          dataX,
        }
      }
      if (this.radio2 == 1) {
        series = meanval
        return {
          series,
          dataX,
        }
      }
    },
    // 数据
    getData() {
      let curArr = [
        ['p_begin_year', this.startY, 'C', '255'],
        ['p_end_year', this.endY, 'C', '255'],
      ]
      console.log(curArr, 'curArrcurArr')
      let pramArr = this.querArr.concat(curArr)

      layerKhsj(pramArr).then((res) => {
        if (res.data.ErrorCode == 0) {
          let obj = JSON.parse(res.data.Data)
          this.dataList.dataX = this.dataList = {
            series: this.dataAC(obj).series,
            dataX: this.dataAC(obj).dataX,
            name: this.radiOption2[this.radio2].name,
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
