<template>
  <div class="pelop_num">
    开户人数
    <span v-for="(item, index) in numberArr" :key="index">{{ item }}</span>

    人
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
  font-family: SourceHanSansCN-Medium;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 50px;
  letter-spacing: 0px;
  color: #666;
  text-align: right;
  padding: 0 50px 0 0;
  span {
    display: inline-block;
    width: 38px;
    line-height: 50px;
    background-image: linear-gradient(0deg, #06296a 0%, #06296a 100%);
    border-style: solid;
    border-width: 1px;
    border-image-source: linear-gradient(0deg, rgba(0, 182, 255, 0.8) 0%, rgba(0, 182, 255, 0.08) 100%);
    border-image-slice: 1;
    box-sizing: border-box;
    padding: 0 5px;
    margin: 10px 10px 0 0;
    text-align: center;
    font-family: AlibabaSans-Bold;
    font-size: 40px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 2px;
    color: #00fdf6;
  }
}
</style>
