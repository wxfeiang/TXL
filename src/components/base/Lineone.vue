<template>
  <div class="echarts_box" ref="echarts_box">
    <div class="Lineone" id="Lineone" ref="Lineone"></div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'Lineone',
  props: {
    msg: String,

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
      this.chartInstance = this.$echarts.init(this.$refs.Lineone)
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
          right: '6%',
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
                      color: 'rgba(43, 200, 255, 0.4)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(43, 200, 255, 0.1)',
                    },
                  ],
                  false
                ),
                shadowBlur: 20,
              },
            },
            symbolSize: 8,
            symbol: 'circle', // 设置标记的图形为circl
            smooth: true,

            itemStyle: {
              normal: {
                color: '#03C4FF',
                lineStyle: {
                  color: '#03C4FF',
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
      this.initEcharts()
      //..
      this.updateChart()
      // 启动定时器
      // this.startInterval()
    },
    // 更新数据
    updateChart() {
      const dataOption = {
        xAxis: {
          data: this.dataList.dataX,
        },
        series: [
          {
            name: this.dataList.name,
            data: this.dataList.series,
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
    dataList: {
      handler(val, olVal) {
        console.log('单条折线图', val, olVal) //但是val和olVal值一样
        this.getData()
      },
      deep: true,
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
.Lineone {
  width: 100%;
  height: 100%;
}
</style>
