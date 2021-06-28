<template>
  <div class="title" id="title">
    <div class="left_name">{{ title }}</div>
    <div class="right_scren" :title="tips">
      <img :src="scren" alt="" />
    </div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'Title',
  props: {
    title: String,
  },
  data() {
    return {
      tips: '全屏显示',
      scren: require('../../assets/kihu/scren.png'),
    }
  },
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
}
</script>
<style lang="scss" scoped>
.title {
  height: 14px;
  border-left: 3px solid #2ff8ff;

  display: flex;
  justify-content: space-between;
  .left_name {
    padding: 0 0 0 15px;
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #2ff8ff;
    line-height: 14px;
  }
  .right_scren {
    cursor: pointer;
  }
}
</style>
