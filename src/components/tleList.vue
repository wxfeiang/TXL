<template>
  <div class="hello">
    <div class="list">
      <h2 class="van-doc-demo-block__title">W</h2>
      <template v-for="item in list">
        <van-cell :title="item.name" icon="phone-o" :key="item.id" @click="Tle(item.tel)" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TleList',
  props: {
    msg: String,
  },
  data() {
    return {
      chosenContactId: '1',
      list: [],
    }
  },
  created: function() {
    //  设置随机数
    var number = Math.ceil(Math.random() * 100000)
    console.log(number)
    this.$http.get('data.json?bbh=' + number).then((res) => {
      console.log(res, '成功')
      this.list = res.data
    })
  },
  methods: {
    Tle(tel) {
      var flog = localStorage.getItem('flog')
      if (flog != 1) {
        this.$toast('请前往设置主叫号码')
        return false
      }
      console.log(tel, '--------------')
      // 转换当前号码\\
      var data = {
        PhoneNoB: tel,
      }
      this.$http.post('http://work.yogoo.net/weworkapi/api/set_PhoneNoB/', JSON.stringify(data)).then((res) => {
        console.log(res, '成功')
        if (res.data.ErrorCode == 0) {
          this.$toast.loading({
            message: '启用拨号',
            forbidClick: true,
          })
          window.location.href = 'tel://' + '17150870359'
        }
      })
    },
  },
}
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 20px;
  line-height: 40px;
  background: #07c160;
  color: #fff;
}
.van-doc-demo-block__title {
  padding: 32px 16px 16px;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}
.van-cell .van-cell__title {
  font-size: 16px;
}
</style>
