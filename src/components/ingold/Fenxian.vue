<template>
  <div :class="['items', scren ? 'fillscren' : ' ']" id="OverallTime">
    <Title title="风险级别" @fillscren="fillscren" />
    <Radar :dataList="dataList" />
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Title from '@/components/base/Title.vue'
import Radar from '@/components/base/Radar.vue'
export default {
  components: {
    Title,
    Radar,
  },
  data() {
    return {
      scren: false,
      dataList: {
        name: '风险级别',
        color: ['#DE8D2F', '#23B5CC', '#1A5FBB', '#25CD84', '#2FF8FF', '#DED71F', '#00B7FF'],

        indicator: [
          { text: '一级风险', max: 100 },
          { text: '二级风险', max: 100 },
          { text: '三级风险', max: 100 },
          { text: '四级风险', max: 100 },
          { text: '四级风险', max: 100 },
        ],
        value: [60, 73, 85, 100, 10],
        radius: ['25%', '50%'],

        roseType: 'area',
      },
    }
  },
  //方法集合
  methods: {
    fillscren() {
      this.scren = !this.scren
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
}
</script>
<style lang="scss" scoped>
.items {
  width: 302px;
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
