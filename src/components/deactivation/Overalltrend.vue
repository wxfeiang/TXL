<template>
  <div :class="['Overalltrend', scren ? 'fillscren' : ' ']" id="Overalltrend">
    <Title title="整体趋势" @fillscren="fillscren" />
    <div class="Overal">
      <div class="Overal_top">
        <div class="allnum" @click="showd()">{{ num }}</div>
        <div class="titleP">失活{{ checkboxVal ? '层' : '' }}总人数</div>
      </div>

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
            @change="changeYear()"
            format="yyyy"
            value-format="yyyy"
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
        <el-radio-group v-model="radio">
          <el-radio :label="item.label" @change="change()" v-for="(item, index) in radiOption" :key="index">{{
            item.name
          }}</el-radio>
        </el-radio-group>
      </div>

      <LineFour :chartData="chartData" :seriesNmae="seriesNmae" />
    </div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Title from '@/components/base/Title.vue'
import LineFour from '@/components/base/LineFour.vue'
import { layerqushi } from '@/api/deactivation'
export default {
  components: {
    Title,
    LineFour,
  },
  props: {
    msg: String,
    querArr: Array,
    checkboxVal: Boolean,
  },
  data() {
    return {
      scren: false,
      num: '',
      people: '失活层总人数',
      startY: '2018',
      endY: '2021',
      radio: 0,
      radiOption: [
        { label: 0, name: '分年展示' },
        { label: 1, name: '合计' },
        { label: 2, name: '均值' },
      ],
      chartData: [],
      seriesNmae: [],
    }
  },
  //方法集合
  methods: {
    fillscren() {
      this.scren = !this.scren // move the window to 0,0 (X,Y)
      // this.diyWindowResize()
    },
    showd() {
      this.$emit('showd')
    },
    //格式化数据
    dataAC(arr) {
      let value = []

      switch (this.radio) {
        case 0:
          //   总计
          arr.forEach((item) => {
            value.push(item.cust_count)
          })
          break
        case 1:
          //   总计

          arr.forEach((item) => {
            value.push(item.cust_count)
          })

          break
        case 2:
          //   均值
          arr.forEach((item) => {
            value.push(item.cust_count_avg)
          })

          break
        default:
          //   总计
          arr.forEach((item) => {
            value.push(item.cust_count)
          })
          break
      }

      return value
    },
    // 格式化 总计

    //
    group(array, subGroupLength) {
      let index = 0
      let newArray = []
      while (index < array.length) {
        newArray.push(array.slice(index, (index += subGroupLength)))
      }
      return newArray
    },
    change() {
      this.chartData = []
      this.seriesNmae = []
      this.getData()
    },
    changeYear() {
      this.getData()
    },

    // 数据
    getData() {
      let curArr = [
        ['p_begin_year', this.startY, 'C', '255'],
        ['p_end_year', this.endY, 'C', '255'],
      ]
      let pramArr = this.querArr.concat(curArr)

      layerqushi(pramArr).then((res) => {
        if (res.data.ErrorCode == 0) {
          var resObj = JSON.parse(res.data.Data)
          this.chartData = []
          this.seriesNmae = []

          console.log(this.chartData, this.seriesNmae, resObj, '交易层')

          if (this.radio == 0) {
            let obj = resObj[0].root
            let length = Math.abs(this.startY - this.endY)
            let items = obj.length / (length + 1)
            this.group(obj, items).forEach((item) => this.chartData.push([this.dataAC(item)]))
            let namestart = this.startY < this.endY ? this.startY : this.endY
            for (let i = namestart; i < namestart + length; i++) this.seriesNmae.push(i + '年')
            console.log(this.radio, 'this.radio')
          } else {
            let obj = resObj[this.radio].root
            console.log(obj, 'heji结果集', this.dataAC(obj))
            this.chartData.push([this.dataAC(obj)])
            this.seriesNmae.push(this.radiOption[this.radio].name)
          }
          //
          this.num = resObj[3].root[0].cust_count_sum
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
.Overalltrend {
  width: 540px;
  height: 376px;
  background: rgba(2, 51, 177, 0.1);
  .Overal {
    .Overal_top {
      text-align: center;
      margin-bottom: 10px;
      .allnum {
        font-size: 30px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #ffffff;
        line-height: 50px;
      }
      .titleP {
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: $ff05;
        font-size: 14px;
      }
    }
    .selevt_b {
      display: flex;
      justify-content: space-between;
      padding: 0 20px 10px;
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
    }
  }
}
</style>
