<template>
  <div class="select">
    <el-select v-model="value" placeholder="渠道">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
    </el-select>
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
      value: '',
    }
  },
  created: function() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.select {
  .el-select {
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #2ff8ff;
    width: 100px;
  }
  /deep/ .el-input__inner {
    background: none;
    color: #fff;
    border: none;
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #2ff8ff;
  }
  /deep/ .el-input__inner::placeholder {
    color: #2ff8ff;
  }

  /deep/ .el-input__suffix i {
    color: #2ff8ff;
  }
}
</style>
