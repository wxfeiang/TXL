<template>
  <div class="select">
    <el-dropdown @command="handleCommand">
      <!--    <el-dropdown @command="handleCommand" trigger="click" :hide-on-click="hide"> -->
      <span class="el-dropdown-link">
        <span>{{ title }}</span
        ><i class="el-icon-arrow-down el-icon-caret-bottom"></i>
      </span>
      <template v-if="flog == 0">
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :command="item.value" v-for="(item, index) in options" :key="index"
            >{{ item.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
      <!--  多选 -->
      <template v-if="flog == 1">
        <el-dropdown-menu slot="dropdown">
          <el-cascader-panel
            ref="csca"
            :options="options"
            v-model="selecVal"
            :show-all-levels="false"
            @change="change()"
            :props="{ expandTrigger: 'hover' }"
          ></el-cascader-panel>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'SclectItem',

  props: {
    title: String,
    options: Array,
    index: Number,
    flog: {
      type: String,
      default: '0',
    },
  },
  data() {
    return {
      selecVal: '',
      hide: true,
    }
  },
  created: function() {},
  methods: {
    handleCommand(command) {
      console.log(command, 'commandcommand')
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
    change() {
      let selctData = this.$refs.csca.getCheckedNodes()[0].data
      selctData.index = this.index
      this.$emit('select', selctData)
    },
  },
  watch: {
    userdata(data) {
      console.log(data)
      this.selecVal = this.options[0].value
      this.hide = true
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
.el-dropdown-menu {
  max-height: 250px !important;
  background: rgb(255, 255, 255) !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
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
