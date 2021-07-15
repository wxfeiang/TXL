<template>
  <div class="jiaoyi layuot" id="Jiaoyi">
    <div class="title">
      交易大厅
    </div>
    <div class="top">
      <div class="left">
        <img :src="jiaoyilogo" alt="" />
      </div>
      <div class="top_center">
        <div class="c_top">
          sdhadifv
        </div>
        <div class="c_desc">
          <div class="dexc_l">
            <div class="linck">e风采</div>
            <div class="linck">产权贷 您的投资置业好帮手</div>
            <div class="linck">银行股权 投资佳选</div>
          </div>
          <div class="dexc_r">
            <div class="item">默认排序</div>
            <div class="item">即将开始</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  data() {
    return {
      jiaoyilogo: require('../assets/homeIndex/jiaoyilogo.png'),
    }
  },
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
}
</script>
<style lang="scss" scoped>
.jiaoyi {
  background: #fff;
  padding: 20px;
  .top {
    height: 76px;
    background: #333333;
  }
}
</style>
