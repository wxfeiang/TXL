<template>
  <div class="select">
    <el-dropdown @command="handleCommand" trigger="click">
      <span class="el-dropdown-link">
        <span>{{ title }}</span
        ><i class="el-icon-arrow-down el-icon-caret-bottom"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item :command="item.value" v-for="(item, index) in options" :key="index"
          >{{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <!-- 备用select -->
    <!-- <div class="select_item">
          <el-select v-model="value" placeholder="所在城市级别" size="mini" @change="change">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </div> -->
  </div>
</template>

<script>
export default {
  name: 'SclectItem',

  props: {
    title: String,
    options: Array,
    index: Number,
  },
  data() {
    return {
      selecVal: '',
    }
  },
  created: function() {
    this.selecVal = this.options[0].value
  },
  methods: {
    handleCommand(command) {
      //  同样适用于  select 的
      this.selecVal = command
      let obj = {}
      obj = this.options.find((item) => {
        return item.value === command
      })
      let selctData = {
        value: command,
        label: obj.label,
        index: this.index,
      }
      // console.log(selctData)
      this.$emit('select', selctData)
    },
  },
}
</script>

<style lang="scss" scoped>
.select {
  .el-dropdown {
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #2ff8ff;
    line-height: 40px;
    margin-left: 20px;
    min-width: 50px;
    cursor: pointer;
  }
}
// /deep/ .el-select .el-input__inner {
//   background: none;
//   border: none;
//   color: #2ff8ff;
//   padding: 0;
//   min-width: 35px;
//   width: auto !important;
//   max-width: 100px;
// }

// /deep/ .el-icon-arrow-up:before {
//   content: '\e78f';
//   color: #2ff8ff;
// }

// /deep/ input::-webkit-input-placeholder {
//   color: #2ff8ff;
//   font-size: 14px;
//   font-family: Source Han Sans CN;
//   font-weight: 400;
//   color: #2ff8ff;
// }
// /deep/ input::-moz-input-placeholder {
//   color: #2ff8ff;
//   font-size: 14px;
//   font-family: Source Han Sans CN;
//   font-weight: 400;
//   color: #2ff8ff;
// }
// /deep/ input::-ms-input-placeholder {
//   color: #2ff8ff;
//   font-size: 14px;
//   font-family: Source Han Sans CN;
//   font-weight: 400;
//   color: #2ff8ff;
// }
</style>
