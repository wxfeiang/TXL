<template>
  <div class="LineFour_box">
    <div class="LineFour" id="LineFour" ref="LineFour"></div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'LineFour',
  props: {
    msg: String,
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
          data: data.dataX,
          axisLabel: {
            formatter: '{value}',
            color: 'rgba(255,255,255,0.5)',
            fontSize: 14,
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
            name: '今年开户数',
            data: [820, 932, 900, 834, 120, 130, 130],
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
                      color: 'rgba(108,80,243,0.3)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(108,80,243,0)',
                    },
                  ],
                  false
                ),
                shadowColor: 'rgba(108,80,243, 0.9)',
                shadowBlur: 20,
              },
            },
            itemStyle: {
              normal: {
                color: '#4BF3F9',

                lineStyle: {
                  color: '#4BF3F9',
                },
              },
            },
          },
          {
            name: '月均开户数',
            data: [800, 902, 700, 304, 190, 133, 130],
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
                      color: 'rgba(0,202,149,0.3)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(0,202,149,0)',
                    },
                  ],
                  false
                ),
                shadowColor: 'rgba(0,202,149, 0.9)',
                shadowBlur: 20,
              },
            },
            symbolSize: 8,
            symbol: 'circle', // 设置标记的图形为circl
            itemStyle: {
              normal: {
                color: '#00ca95',
                lineStyle: {
                  color: '#00ca95',
                },
              },
            },
          },
          {
            name: '月均开户数',
            data: [800, 902, 700, 304, 190, 133, 130],
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
                      color: '#FEAB67',
                    },
                    {
                      offset: 1,
                      color: 'rgba(0,202,149,0)',
                    },
                  ],
                  false
                ),
                shadowColor: '#FEAB67',
                shadowBlur: 20,
              },
            },
            symbolSize: 8,
            symbol: 'circle', // 设置标记的图形为circl
            itemStyle: {
              normal: {
                color: '#00ca95',
                lineStyle: {
                  color: '#00ca95',
                },
              },
            },
          },
          {
            name: '月均开户数',
            data: [800, 902, 700, 304, 190, 133, 130],
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
                      color: '#00F9E3',
                    },
                    {
                      offset: 1,
                      color: 'rgba(0,202,149,0)',
                    },
                  ],
                  false
                ),
                shadowColor: '#00F9E3',
                shadowBlur: 20,
              },
            },
            symbolSize: 8,
            symbol: 'circle', // 设置标记的图形为circl
            itemStyle: {
              normal: {
                color: '#00ca95',
                lineStyle: {
                  color: '#00ca95',
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
      this.updateChart()
      // 启动定时器
      this.startInterval()
    },
    // 更新数据
    updateChart() {
      const arr = [],
        arr2 = [],
        arr3 = [],
        arr4 = []
      for (let i = 0; i < 6; i++) {
        let rand = Math.ceil(Math.random() * 10)
        let rand2 = Math.ceil(Math.random() * rand)
        let rand3 = Math.ceil(Math.random() * 5)
        let rand4 = Math.ceil(Math.random() * 33)
        arr.push(rand)
        arr2.push(rand2)
        arr3.push(rand3)
        arr4.push(rand4)
      }
      const dataOption = {
        series: [
          {
            data: arr,
          },
          {
            data: arr2,
          },
          {
            data: arr3,
          },
          {
            data: arr4,
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
    var data = {
      title: '',
      subtext: '单位:人',
      dataX: ['1月', '2月', '3月', '4月', '5月', '6月'],
    }
    this.initEcharts(data)
    //获取
    this.getData()
    // 监听
    window.addEventListener('resize', this.screenAdapter)
  },
  destroyed() {
    window.removeEventListener('resize', this.screenAdapter)
    clearInterval(this.timerId)
  },
}
</script>
<style lang="scss" scoped>
.LineFour_box {
  width: 500px;
  height: 260px;
  margin: 0 auto;
}
.LineFour {
  width: 100%;
  height: 100%;
}
</style>
