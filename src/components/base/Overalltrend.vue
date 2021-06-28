<template>
  <div class="Overalltrend" id="Overalltrend">
    <Title title="整体趋势" />
    <div class="Overal">
      <div class="Overal_top">
        <div class="allnum">{{ num }}</div>
        <div class="titleP">{{ people }}</div>
      </div>
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
      <div class="line_box">
        <LineFour />
      </div>
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
      num: '992',
      people: '开户总人数',
      startY: '',
      endY: '',
    }
  },
  //方法集合
  methods: {},
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
    .date_box {
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.5);
    }

    .dy_date {
      width: 80px;
      height: 20px;
      /deep/ .el-input__inner {
        padding: 0 10px;
        background-color: transparent !important;
        height: 20px;
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
