<template>
  <div class="right_item">
    <div class="top">
      <div class="title_e">
        {{ title }}
      </div>
      <div class="show_times">更新时间:{{ showTime }}</div>
    </div>
    <div class="center">
      <div class="conversion" v-for="(item, index) in conversionVal" :key="index">
        <div class="C_Number">
          {{ item.value }}
        </div>
        <div class="C_text">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { timeNowSum } from '@/api/home'
export default {
  name: 'Fenceng',
  props: {
    msg: String,
    querArr: Array,
  },
  data() {
    return {
      title: '实时分层数据',
      showTime: '',
      conversionVal: [],
    }
  },
  created: function() {
    this.getData(this.querArr)
  },
  methods: {
    //数据格式化
    dataAC(arr) {
      let nArr = []
      arr.forEach((item) => {
        nArr.push({
          value: item.cuset_count,
          name: item.layer_name,
        })
      })
      console.log(nArr)
      return nArr
    },
    // 请求实时分层数据
    getData(pramArr) {
      timeNowSum(pramArr).then((res) => {
        if (res.data.ErrorCode == 0) {
          var obj = JSON.parse(res.data.Data)[0].root
          console.log(obj, 'fencegn')
          this.showTime = obj.length > 0 ? obj[0].update_time : '未知'
          if (obj.length) {
            this.conversionVal = this.dataAC(obj)

            // this.$forceUpdate()
          } else {
            this.conversionVal = [
              { value: 0, name: '开户层' },
              { value: 0, name: '入金层' },
              { value: 0, name: '交易层' },
              { value: 0, name: '存续层' },
              { value: 0, name: '失活层' },
            ]
          }
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.right_item {
  width: 1120px;
  height: 200px;

  background: url('../../assets/home/right_3.png');
  @include backgroundSize;
  .top {
    display: flex;
    justify-content: space-between;
    width: 1120px;
    height: 60px;

    background: url('../../assets/home/title_right_bg.png') no-repeat;
    @include backgroundSize;

    .title_e {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #f1f1f1;
      line-height: 65px;
      padding-left: 60px;
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
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    .conversion {
      width: 78px;
      text-align: center;

      .C_Number {
        height: 72px;
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #ffffff;

        line-height: 50px;
      }

      .C_text {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
        line-height: 27px;
        opacity: 0.5;
        line-height: 40px;
      }
    }
    @for $i from 1 through 5 {
      .conversion:nth-child(#{$i}) .C_Number {
        @include backgroundSize;
        background-image: url('../../assets/home/con_#{$i}.png');
      }
    }
  }
}
</style>
