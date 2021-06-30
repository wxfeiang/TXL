<template>
  <div class="pelop_num">
    <div class="peop">
      <b>开户人数 </b>
      <span v-for="(item, index) in numberArr" :key="index">{{ item }}</span>
      <b> 人</b>
    </div>
    <div class="time">统计时间 ： {{ show_times }}</div>
  </div>
</template>

<script>
export default {
  name: 'PeopleN',
  props: {
    msg: String,
  },
  created() {
    this.splitNum()
  },
  data() {
    return {
      show_times: '2015.01.01-2021.05.07',
      number: '1118811',
      numberArr: [],
    }
  },
  methods: {
    splitNum() {
      var num = Math.ceil(Math.random() * 100000).toString()
      this.number = num
      this.numberArr = this.number.split('')
    },
  },
}
</script>

<style lang="scss" scoped>
.pelop_num {
  width: 40%;
  padding: 0 20px 0 0;
  .peop {
    box-sizing: border-box;
    line-height: 50px;
    text-align: right;

    b {
      display: inline-block;
      line-height: 48px;
      font-family: SourceHanSansCN-Medium;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: $ff05;
      margin: 0px 10px 0;
      vertical-align: middle;
    }
    span {
      display: inline-block;
      width: 38px;
      line-height: 48px;
      background-image: linear-gradient(0deg, #06296a 0%, #06296a 100%);
      border-style: solid;
      border-width: 1px;
      border-image-source: linear-gradient(0deg, rgba(0, 182, 255, 0.8) 0%, rgba(0, 182, 255, 0.08) 100%);
      border-image-slice: 1;
      box-sizing: border-box;
      padding: 0 5px;
      margin: 0px 10px 0 0;
      text-align: center;
      font-family: AlibabaSans-Bold;
      font-size: 40px;
      font-stretch: normal;
      font-weight: bold;
      color: #00fdf6;
      vertical-align: middle;
    }
  }
  .time {
    margin: 10px;
    height: 12px;
    font-size: 12px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: $ff05;
    text-align: right;
    padding: 0 10px 0 0;
  }
}
</style>
