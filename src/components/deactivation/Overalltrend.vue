<template>
  <div :class="['Overalltrend', scren ? 'fillscren' : ' ']" id="Overalltrend">
    <Title title="整体趋势" @fillscren="fillscren" />
    <div class="Overal">
      <div class="Overal_top">
        <div class="allnum">{{ num }}</div>
        <div class="titleP">{{ people }}</div>
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
          >
          </el-date-picker>
        </div>
        <el-radio-group v-model="radio">
          <el-radio :label="item.label" v-for="(item, index) in radiOption" :key="index">{{ item.name }}</el-radio>
        </el-radio-group>
      </div>
      <LineFour />
    </div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Title from '@/components/base/Title.vue'
import LineFour from '@/components/base/LineFour.vue'
export default {
  components: {
    Title,
    LineFour,
  },
  data() {
    return {
      scren: false,
      num: '992',
      people: '失活总人数',
      startY: '2018',
      endY: '2021',
      radio: '',
      radiOption: [
        { label: 2, name: '分年展示' },
        { label: 3, name: '合计' },
        { label: 4, name: '均值' },
      ],
    }
  },
  //方法集合
  methods: {
    fillscren() {
      this.scren = !this.scren // move the window to 0,0 (X,Y)
      // this.diyWindowResize()
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
