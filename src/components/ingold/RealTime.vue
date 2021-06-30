<template>
  <div class="RealTime" id="">
    <div class="top">
      <div class="title_e">
        {{ title }}
      </div>
      <div class="show_times">更新时间： {{ showTime }}</div>
    </div>
    <div class="center">
      <div class="reamLL">
        <div class="items" v-for="(item, index) in conversionVal" :key="index">
          <div class="C_Number">
            {{ item.value }}
          </div>
          <div class="C_text">
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="reamLL">
        <div class="items" v-for="(item, index) in conversionVal2" :key="index">
          <div class="C_Number">
            {{ item.value }}
          </div>
          <div class="C_text">
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="reamLL">
        <div class="items" v-for="(item, index) in conversionVal3" :key="index">
          <div class="C_Number">
            {{ item.value }}
          </div>
          <div class="C_text">
            {{ item.name }}
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
  name: 'RealTime',

  data() {
    return {
      title: '实时看板',
      showTime: '2021.05.08 24:00:00',
      conversionVal: [
        { value: 122, name: '年度入金数' },
        { value: 122, name: '月度入金数' },
        { value: 1222, name: '今日入金数' },
      ],
      conversionVal2: [
        { value: 12, name: '入金层总人数' },
        { value: '1%', name: '占入金总数比' },
      ],
      conversionVal3: [
        { value: 12, name: '今日进入入金层人数' },
        { value: 12, name: '今日转至入金层人数' },
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
.RealTime {
  width: 500px;
  height: 500px;
  background: url('../../assets/kihu/realtimebg.png');
  @include backgroundSize;
  .top {
    height: 60px;
    background: url('../../assets/kihu/realtime_tit.png') no-repeat;
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
    .reamLL {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
      box-sizing: border-box;
      .items {
        min-width: 92px;
        text-align: center;
        .C_Number {
          width: 92px;
          height: 92px;
          font-size: 20px;
          font-family: Source Han Sans CN;
          font-weight: 500;
          color: #ffffff;
          line-height: 60px;
          text-align: center;
          margin: 0 auto;
        }
        .C_text {
          font-size: 14px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #ffffff;
          line-height: 27px;
          opacity: 0.5;
          text-align: center;
        }
      }
    }
    @for $i from 1 through 3 {
      .reamLL:nth-child(#{$i}) .items .C_Number {
        @include backgroundSize;
        background-image: url('../../assets/kihu/con_#{$i}.png');
      }
    }
  }
}
</style>
