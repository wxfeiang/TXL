<template>
  <div class="echarts_box" ref="echarts_box">
    <div class="Bar" ref="Lineone"></div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'Lineone',
  props: {
    dataList: Object,
  },
  data() {
    return {
      chartInstance: null,
      timerId: null, // 定时器的标识
    }
  },
  methods: {
    initEcharts(data) {
      console.log(data)
      this.chartInstance = this.$echarts.init(this.$refs.Lineone)
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '4%',
          right: '4%',
          bottom: '3%',
          top: '5%',
          containLabel: true,
          textStyle: {
            color: '#fff',
          },
        },
        xAxis: {
          type: 'category',
          data: data.dataX,
          boundaryGap: true,
          axisLabel: {
            formatter: '{value}',
            color: 'rgba(255,255,255,0.5)',
            fontSize: 14,
            interval: 0,
            rotate: 30,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          type: 'value',
          nameTextStyle: {
            color: '#00FFFF',
          },
          splitLine: {
            lineStyle: {
              type: 'solid',
              color: 'rgba(255,255,255,0.1)',
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            formatter: '{value}',
            color: 'rgba(255,255,255,0.5)',
            fontSize: 14,
          },
        },
        series: [
          {
            data: data.series,
            type: 'bar',
            showBackground: false,
            barWidth: 20, //柱图宽度
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  color: '#fff',
                  fontFamily: 'Source Han Sans CN',
                  fontWeight: 400,
                  fontSize: 14,
                  position: 'top',
                },
                color: {
                  x: 0,
                  y: 1,
                  x2: 0,
                  y2: 0,
                  type: 'linear',
                  colorStops: [
                    {
                      offset: 0,
                      color: '#00B7FF',
                    },
                    {
                      offset: 1,
                      color: 'rgba(0, 183, 255, 0.35)',
                    },
                  ],
                },
              },
            },
          },
        ],
      }
      this.chartInstance.setOption(option)
    },
    //获取数据
    getData() {
      //..
      //   this.updateChart()
      //   // 启动定时器
      //   this.startInterval()
    },
    // 更新数据
    updateChart() {
      const arr = []
      for (let i = 0; i < 6; i++) {
        // let rand = Math.ceil(Math.random() * 100)
      }
      const dataOption = {
        series: [
          {
            data: arr,
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

  mounted() {
    var data = this.dataList
    this.initEcharts(data)
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
  height: 150px;
  box-sizing: border-box;
  padding: 20px 0 0 0;
  margin: 0 auto;
}
.Bar {
  width: 100%;
  height: 100%;
}
</style>
