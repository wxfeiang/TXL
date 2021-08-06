const mixinTime = {
  data() {
    return {
      timerId: null, // 定时器的标识
    }
  },
  methods: {
    startInterval() {
      if (this.timerId) {
        clearInterval(this.timerId)
      }

      this.timerId = setInterval(() => {
        console.log(this.$store.getters.time, '当前定时器时间---')
        this.updateData()
      }, this.$store.getters.time * 60 * 1000)
    },

    getNowTime() {
      let dateTime
      let yy = new Date().getFullYear()
      let mm = new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1
      let dd = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()
      let hh = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours()
      let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()
      let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds()
      dateTime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss
      console.log(dateTime)
      this.showTime = dateTime
      // return dateTime
    },
  },
  computed: {
    count() {
      return this.$store.getters.time
    },
  },
  watch: {
    count(newCount) {
      console.log(`We have ${newCount} fruits now, yaay!`, '见听到改变了')

      clearInterval(this.timerId)
      this.startInterval()
    },
  },

  mounted() {
    this.startInterval()
    this.getNowTime()
  },
  destroyed() {
    clearInterval(this.timerId)
  },
}

export default mixinTime
