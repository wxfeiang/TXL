<template>
  <div :class="['OverallTime', scren ? 'fillscren' : ' ']" id="OverallTime">
    <Title title="开户时间" @fillscren="fillscren" />
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
    </div>
    <div class="rad_box">
      <el-radio-group v-model="radio">
        <el-radio :label="item.label" v-for="(item, index) in radiOption" :key="index">{{ item.name }}</el-radio>
      </el-radio-group>
    </div>
    <div class="rad_box  rad_box_right">
      <el-radio-group v-model="radio2">
        <el-radio :label="item.label" v-for="(item, index) in radiOption2" :key="index">{{ item.name }}</el-radio>
      </el-radio-group>
    </div>
    <Lineone :dataList="dataList" />
  </div>
</template>
<script>
import Title from '@/components/base/Title.vue'
import Lineone from '@/components/base/Lineone.vue'

export default {
  components: {
    Title,
    Lineone,
  },
  data() {
    return {
      scren: false,
      startY: '',
      endY: '',
      radio: '2',
      radiOption: [
        { label: '2', name: '星期' },
        { label: '3', name: '月度' },
        { label: '4', name: '季度' },
        { label: '5', name: '时段' },
      ],
      radio2: '3',
      radiOption2: [
        { label: '3', name: '总计' },
        { label: '4', name: '均值' },
      ],
      dataList: {
        name: '民族',
        series: [420, 50, 150, 80, 70, 110, 130, 368],
        dataX: ['一月', '二月', '三月', '四月', '五月'],
      },
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
/deep/ .el-radio__label {
  color: $ff05;
}
</style>
