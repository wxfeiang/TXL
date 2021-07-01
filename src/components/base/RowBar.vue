<template>
  <div class="echarts_box2" ref="echarts_box">
    <div class="title">{{ dataList.title }}</div>
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

      var salvProValue = [239, 181, 154, 144, 135, 117, 74, 72, 67]
      var salvProMax = [] //背景按最大值
      for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0])
      }
      this.chartInstance = this.$echarts.init(this.$refs.Lineone)
      let option = {
        // title: {
        //   text: data.title,

        //   left: 'center',
        //   textStyle: {
        //     fontFamily: 'SourceHanSansCN-Regular',
        //     fontSize: '14',
        //     color: 'rgba(255,255,255,1)',
        //   },
        // },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '2%',
          top: '5%',
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none',
          },
          formatter: function(params) {
            return params[0].name + ' : ' + params[0].value
          },
        },
        xAxis: {
          show: false,
          type: 'value',
        },
        yAxis: [
          {
            type: 'category',
            inverse: true,
            axisLabel: {
              show: true,
              textStyle: {
                color: 'rgba(255,255,255,0.5)',
                fontSize: 12,
                width: '20%',
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: data.dataY,
          },
        ],
        series: [
          {
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  color: '#fff',
                  fontFamily: 'Source Han Sans CN',
                  fontWeight: 400,
                  fontSize: 14,
                  position: 'right',
                },
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: 'rgba(0, 183, 255, 0.35)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 183, 255, 1)',
                  },
                ]),
              },
            },
            barWidth: 14,
            data: data.series,
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
.echarts_box2 {
  width: 98%;
  height: 160px;
  box-sizing: border-box;
  padding: 0px 0 0 0;
  margin: 0 auto;
}
.Bar {
  width: 100%;
  height: 100%;
}
.title {
  margin: 20px 0 0 0;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
}
</style>
