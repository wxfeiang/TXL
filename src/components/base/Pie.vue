<template>
  <div class="echarts_box" ref="echarts_box">
    <div class="pie" ref="pie"></div>
  </div>
</template>
<script>
export default {
  name: 'pie',
  props: {
    dataList: Object,
    chartData: Array,
  },
  data() {
    return {
      chartInstance: null,
      timerId: null, // 定时器的标识
    }
  },
  methods: {
    initEcharts(data) {
      this.chartInstance = this.$echarts.init(this.$refs.pie)
      let option = {
        color: data.color,
        tooltip: {
          trigger: 'item',
        },
        series: [
          {
            name: data.name,
            type: 'pie',
            radius: data.radius ? data.radius : '80%',
            roseType: data.roseType ? data.roseType : '',
            center: ['50%', '60%'],
            data: data.series,
            label: {
              color: '#fff',
              fontFamily: 'Source Han Sans CN',
              fontWeight: 400,
              fontSize: 12,
              formatter: function(data) {
                return data.name + data.value
              },
            },

            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }
      this.chartInstance.setOption(option)
    },
    //获取数据
    getData() {
      this.initEcharts(this.dataList)

      this.updateChart(this.chartData)
      //   // 启动定时器
      // this.startInterval()
    },
    // 更新数据
    updateChart(data) {
      // console.log(data, 'sdfasddata')

      const dataOption = {
        series: [
          {
            data: data,
          },
        ],
      }
      this.chartInstance.setOption(dataOption)
    },
    //  TODO 定时

    startInterval() {
      if (this.timerId) {
        clearInterval(this.timerId)
      }
      this.timerId = setInterval(() => {
        this.updateChart()
      }, 3000)
    },
    // 当浏览器的大小发生变化的时候, 会调用的方法, 来完成屏幕的适配
    screenAdapter() {
      // 手动的调用图表对象的resize 才能产生效果
      this.chartInstance.resize()
    },
  },
  watch: {
    chartData() {
      this.getData()
    },
  },
  mounted() {
    //获取
    this.getData()
    // 监听
    window.addEventListener('resize', this.screenAdapter)

    this.$erd.listenTo(this.$refs.echarts_box, () => {
      // console.log(element)
      this.screenAdapter()
    })
  },
  destroyed() {
    window.removeEventListener('resize', this.screenAdapter)
    clearInterval(this.timerId)
  },
}
</script>

<style lang="scss" scoped>
.echarts_box {
  width: 98%;
  height: 140px;
  margin: 0 auto;
}
.pie {
  width: 100%;
  height: 100%;
}
</style>
