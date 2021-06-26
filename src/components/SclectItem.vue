<template>
  <div class="select">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <span v-html="selecVal">10</span><i class="el-icon-arrow-down el-icon-caret-bottom"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item :command="item.value" v-for="(item, index) in options" :key="index"
          >{{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'SclectItem',
  props: {
    msg: String,
  },
  data() {
    return {
      selecVal: '',

      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
    }
  },
  created: function() {
    this.selecVal = this.options[0].value
  },
  methods: {
    handleCommand(command) {
      this.selecVal = command
      //  TODO
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
  }
}
</style>
