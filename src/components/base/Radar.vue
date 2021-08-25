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
    chartData: Object,
  },
  data() {
    return {
      chartInstance: null,
      timerId: null, // 定时器的标识
    }
  },
  methods: {
    initEcharts(data) {
      let option = {
        tooltip: {
          trigger: 'axis',
        },

        radar: [
          {
            indicator: data.indicator,
            radius: '50%',
            axisLine: {
              show: true,
              // (圆内的几条直线)坐标轴轴线相关设置
              lineStyle: {
                color: '#fff',
                fontFamily: 'Source Han Sans CN',
                fontWeight: 400,
                fontSize: 12,
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
            center: ['50%', '80%'],
            label: {
              color: '#fff',
              fontFamily: 'Source Han Sans CN',
              fontWeight: 400,
              fontSize: 12,
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
      var data = this.dataList

      this.initEcharts(data)
      console.log('getdata-------------', data)
      this.updateChart(data)
    },
    // 更新数据
    updateChart(data) {
      const dataOption = {
        radar: [
          {
            indicator: data.indicator,
          },
        ],

        series: [
          {
            data: [
              {
                value: data.value,
                name: data.name,
              },
            ],
          },
        ],
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
    dataList: {
      handler(val, olVal) {
        console.log('雷达图数据dsd化了', val, olVal) //但是val和olVal值一样
        this.getData()
      },
      deep: true,
    },
  },

  mounted() {
    // 监听
    this.chartInstance = this.$echarts.init(this.$refs.radar)
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
  height: 160px;
  margin: 0 auto;
}
.radar {
  // margin: 10px 0 0 0;
  width: 100%;
  height: 100%;
}
</style>
