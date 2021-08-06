<template>
  <div :class="['items', scren ? 'fillscren' : ' ']" id="OverallTime">
    <Title title="城市级别" @fillscren="fillscren" />
    <Radar :dataList="dataList" :chartData="chartData" />
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Title from '@/components/base/Title.vue'
import Radar from '@/components/base/Radar.vue'
import { level } from '@/api/deactivation'

export default {
  components: {
    Title,
    Radar,
  },
  props: {
    msg: String,
    querArr: Array,
  },
  data() {
    return {
      scren: false,
      chartData: {},

      dataList: {
        // name: '城市级别',
        // indicator: [
        //   { text: '一线城市', max: 500 },
        //   { text: '二线城市', max: 500 },
        //   { text: '三线城市', max: 500 },
        //   { text: '四线城市', max: 500 },
        // ],
        // value: [445, 85, 165, 232, 560],
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
      this.scren = !this.scren
    },
    //格式化数据
    dataAC(arr) {
      let indicator = []
      let value = []
      arr.forEach((item) => {
        indicator.push({
          max: '',
          text: item.city_level_zh,
        })
        value.push(item.cust_count)
      })
      let max = Math.max.apply(null, value)
      console.log(max, 'max')
      indicator.forEach((item) => {
        item.max = max
      })

      return {
        value,
        indicator,
        name: '城市级别',
      }
    },
    // dataValue

    // 数据
    getData() {
      console.log('')
      level(this.querArr).then((res) => {
        if (res.data.ErrorCode == 0) {
          var obj = JSON.parse(res.data.Data)[0].root
          console.log(obj, 'live------------')
          this.dataList = this.dataAC(obj)

          // this.dataList = {
          //   name: '城市级别',
          //   indicator: [
          //     { text: '一线城市', max: 2500 },
          //     { text: '线城市', max: 2500 },
          //     { text: '三线城市', max: 2500 },
          //     { text: '城市', max: 2500 },
          //   ],
          //   value: [85, 855, 1544, 800, 5],
          // }
          console.log(this.dataList, 'live------------')
        } else {
          console.log(res.data.Data)
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.items {
  width: 304px;
  height: 178px;
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
        color: #ffffff;
        opacity: 0.5;
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
