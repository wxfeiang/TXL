<template>
  <div class="echarts_box" ref="echarts_box">
    <div class="radar" ref="radar"></div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'radar',
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
      this.chartInstance = this.$echarts.init(this.$refs.radar)
      let option = {
        tooltip: {
          trigger: 'axis',
        },

        radar: [
          {
            indicator: data.indicator,
            radius: '80%',

            axisLine: {
              show: true,
              // (圆内的几条直线)坐标轴轴线相关设置
              lineStyle: {
                color: '#fff',
                fontFamily: 'Source Han Sans CN',
                fontWeight: 400,
                fontSize: 14,
              },
            },
            splitLine: {
              // (这里是指所有圆环)坐标轴在 grid 区域中的分隔线。
              lineStyle: {
                color: '#0233B1',
                // 分隔线颜色
              },
            },
            splitArea: {
              // 坐标轴在 grid 区域中的分隔区域，默认不显示。
              show: true,
              areaStyle: {
                // 分隔区域的样式设置。
                color: [],
                // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
              },
            },
            axisLabel: {
              color: '#fff',
              fontFamily: 'Source Han Sans CN',
              fontWeight: 400,
              fontSize: 14,
              formatter: function(data) {
                console.log(data)
                return data.name + data.value
              },
            },
          },
        ],
        series: [
          {
            type: 'radar',
            symbol: 'none',
            tooltip: {
              trigger: 'item',
            },
            label: {
              color: '#fff',
              fontFamily: 'Source Han Sans CN',
              fontWeight: 400,
              fontSize: 14,
              formatter: function(data) {
                console.log(data)
                return data.name + data.value
              },
            },

            splitArea: {
              show: false,
              areaStyle: {
                color: '#1890ff', // 图表背景的颜色
              },
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(131,141,158,.1)',
              },
            },

            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#00F9E3', // 0% 处的颜色
                  },
                  {
                    offset: 0.4,
                    color: '#2FAEFF', // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: '#2FAEFF', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#2FAEFF', // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            data: [
              {
                value: data.value,
                name: data.name,
              },
            ],
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
  height: 140px;
  margin: 0 auto;
}
.radar {
  width: 100%;
  height: 100%;
}
</style>
