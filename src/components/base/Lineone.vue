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
            name: '月均开户数',
            data: data.series,
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
      //..
      this.updateChart()
      // 启动定时器
      // this.startInterval()
    },
    // 更新数据
    updateChart() {
      const arr = [],
        arr2 = [],
        arr3 = [],
        arr4 = []
      for (let i = 0; i < 6; i++) {
        let rand = Math.ceil(Math.random() * 100)
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
    console.log(this.dataList)
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
  height: 260px;
  margin: 0 auto;
}
.Lineone {
  width: 100%;
  height: 100%;
}
</style>
