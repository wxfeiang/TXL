<template>
  <div class="Left_3" id="">
    <div class="top">
      <div class="title_e">
        {{ title }}
      </div>
      <div class="show_times">
        {{ showTime }}
      </div>
    </div>
    <div class="center">
      <LineChart />
    </div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import LineChart from '@/components/Line.vue'
export default {
  name: 'Account',
  components: {
    LineChart,
  },
  data() {
    return {
      title: '漏斗层总体情况',
      showTime: '2021.05.08 24:00:00',
      conversionVal: [
        { value: 12, name: '开户层' },
        { value: 12, name: '开户层' },
        { value: 12, name: '开户层' },
        { value: 12, name: '开户层' },
        { value: 12, name: '开户层' },
      ],
    }
  },
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
}
</script>
<style lang="scss" scoped>
.Left_3 {
  width: 630px;
  height: 424px;
  background: url('../../assets/home/lsef_3_bg.png');
  @include backgroundSize;
  .top {
    width: 630px;
    height: 60px;
    background: url('../../assets/home/left_3.png') no-repeat;
    @include backgroundSize;

    display: flex;
    justify-content: space-between;
    .title_e {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #f1f1f1;
      line-height: 60px;
      padding-left: 50px;
    }
    .show_times {
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.5);
      line-height: 40px;
      padding-right: 30px;
    }
  }
  .center {
    box-sizing: border-box;
    padding: 10px 10px;
  }
}
</style>
