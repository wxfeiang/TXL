<template>
  <div class="echarts_box" ref="echarts_box">
    <div class="LineFour" id="LineFour" ref="LineFour"></div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'LineFour',
  props: {
    dataList: Object,
    chartData: Array,
    seriesNmae: Array,
  },

  data() {
    return {
      chartInstance: null,
      timerId: null, // 定时器的标识
    }
  },
  methods: {
    initEcharts(data) {
      this.chartInstance = this.$echarts.init(this.$refs.LineFour)
      let option = {
        // title: {
        //   text: data.title,
        //   subtext: data.subtext,
        //   right: '0',
        //   subtextStyle: {
        //     fontFamily: 'SourceHanSansCN-Regular',
        //     fontSize: '12',

        //     align: 'right',
        //   },
        // },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          top: '5%',
          left: '4%',
          right: '4%',
          bottom: '5%',
          containLabel: true,
          textStyle: {
            color: '#fff',
          },
        },
        // legend: {
        //   right: 50,
        //   top: 9,
        //   itemHeight: 14,
        //   textStyle: {
        //     color: 'rgba(255,255,255, 0.5)',
        //     fontSize: 12,
        //   },
        //   data: ['今年开户数', '月均开户数'],
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,

          axisLabel: {
            formatter: '{value}',
            color: 'rgba(255,255,255,0.5)',
            fontSize: 12,
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
            fontSize: 12,
          },
        },
        series: [
          {
            type: 'line',
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(255,185,68,0.4)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(255,185,68,0.1)',
                    },
                  ],
                  false
                ),

                shadowBlur: 20,
              },
            },
            symbolSize: 8,
            symbol: 'circle', // 设置标记的图形为circl
            itemStyle: {
              normal: {
                color: '#ffb944',
                lineStyle: {
                  color: '#ffb944',
                },
              },
            },
          },
          {
            type: 'line',

            symbolSize: 8,
            symbol: 'circle', // 设置标记的图形为circl
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(171,144,223,0.4)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(171,144,223,0.2)',
                    },
                  ],
                  false
                ),

                shadowBlur: 20,
              },
            },
            itemStyle: {
              normal: {
                color: '#ab90df',

                lineStyle: {
                  color: '#ab90df',
                },
              },
            },
          },
          {
            type: 'line',
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(47,174,255,0.4)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(47,174,255,0.2)',
                    },
                  ],
                  false
                ),

                shadowBlur: 20,
              },
            },
            symbolSize: 8,
            symbol: 'circle', // 设置标记的图形为circl
            itemStyle: {
              normal: {
                color: 'rgba(47,174,255,0.4)',
                lineStyle: {
                  color: 'rgba(47,174,255,0.4)',
                },
              },
            },
          },
          {
            type: 'line',
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(0,249,227,0.4)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(0,249,227,0.2)',
                    },
                  ],
                  false
                ),

                shadowBlur: 20,
              },
            },
            symbolSize: 8,
            symbol: 'circle', // 设置标记的图形为circl
            itemStyle: {
              normal: {
                color: 'rgba(0,249,227,0.4)',
                lineStyle: {
                  color: 'rgba(0,249,227,0.4)',
                },
              },
            },
          },
        ],
      }
      // option.series = this.chartData.length == 1 ? option.series.splice(0, 3) : option

      this.chartInstance.setOption(option)
    },
    //获取数据
    getData() {
      //..
      this.updateChart()
      // 启动定时器
      // this.startInterval()
    },
    // 更新数据
    updateChart() {
      let dataX = [],
        series = []
      for (var i = 1; i < 13; i++) dataX.push(i + '月')
      console.log(this.chartData, ' this.chartData44444444444444444444444')

      this.chartData.forEach((item, index) => {
        series.push({ data: item[0], name: this.seriesNmae[index] })
      })
      if (this.chartData.length == 1) {
        series[1] = { data: null, name: null }
        series[2] = { data: null, name: null }
        series[3] = { data: null, name: null }
      }

      const dataOption = {
        xAxis: {
          data: dataX,
        },
        series,
      }

      this.chartInstance.setOption(dataOption)
    },
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
    var data = {
      title: '',
      subtext: '单位:人',
    }
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
  beforeDestory() {
    this.$echarts.dispose(this.chartInstance)
    this.chartInstance = null
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
  height: 260px;
  margin: 0 auto;
}
.LineFour {
  width: 100%;
  height: 100%;
}
</style>
