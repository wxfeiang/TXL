<template>
  <div :class="['items', scren ? 'fillscren' : ' ']" id="OverallTime">
    <Title title="开户年龄" @fillscren="fillscren" />
    <!-- xuanze -->
    <!-- <span>筛选条件</span>
    <SclectItem :options="qudao" /> -->

    <Bar :dataList="dataList" />
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Title from '@/components/base/Title.vue'
import Bar from '@/components/base/Bar.vue'
export default {
  components: {
    Title,
    Bar,
    // SclectItem,
  },
  data() {
    return {
      qudao: [
        {
          value: '渠道',
          label: '渠道',
        },
        {
          value: '渠道2',
          label: '渠道2',
        },
      ],
      scren: false,
      dataList: {
        name: '学历',
        color: ['#DE8D2F', '#23B5CC', '#1A5FBB', '#25CD84', '#2FF8FF', '#DED71F', '#00B7FF'],
        series: [120, 200, 150, 80, 70, 110, 130, 368],
        dataX: ['18-30', '31-35', '36-40', '41-45', '46-50', '51-55', '55-60', '60+'],
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
