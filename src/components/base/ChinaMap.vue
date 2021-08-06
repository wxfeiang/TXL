<template>
  <div class="echarts_box" ref="echarts_box">
    <div class="china" ref="china"></div>
  </div>
</template>
<script>
import '@/assets/js/china.js' // 引入中国地图数据
export default {
  name: 'china',
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
    initEcharts() {
      this.chartInstance = this.$echarts.init(this.$refs.china)

      let option = {
        tooltip: {
          formatter: function(params) {
            return `${params.data ? params.data.region_zh : params.name}<br/>
                ${params.data ? params.data.value : 0} 
            `
          },
        },
        visualMap: {
          show: false,
          min: 0,
          left: 0,
          bottom: 0,
          itemWidth: 10, //图形的宽度，即长条的宽度。
          itemHeight: 40,
          textStyle: {
            color: '#fff',
          },
          inRange: {
            //定义 在选中范围中 的视觉元素
            color: ['#306de8', '#2a91e2', '#00FFFF'],
          },
        },

        //地图区域样式
        geo: {
          map: 'china',
          aspectScale: 0.75,

          zoom: 1.2, //视觉比例大小,1.2即为原有大小的1.2倍
          roam: false, //是否开启鼠标缩放和平移漫游。默认不开启。可以不用设置,如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启

          label: {
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            //未激活样式
            normal: {
              areaColor: '#2a91e2',
              borderColor: '#666',
            },
            //激活样式
            emphasis: {
              areaColor: '#306de8',
            },
          },
          // regions: [
          //   {
          //     name: '南海诸岛',
          //     value: 0,
          //     itemStyle: {
          //       normal: {
          //         opacity: 0,
          //         label: {
          //           show: true,
          //         },
          //       },
          //     },
          //   },
          // ],
        },
        series: [
          {
            name: '城市',
            type: 'map',
            geoIndex: 0,
          },
        ],
      }

      this.chartInstance.setOption(option)
    },
    //获取数据
    getData() {
      this.initEcharts()
      //..

      this.updateChart(this.chartData)
      //   // 启动定时器
      //   this.startInterval()
    },
    // 更新数据
    updateChart(data) {
      data.forEach((item) => {
        ;(item.name = item.region_zh.replace(new RegExp(/省|自治区|维吾尔自治区|市|回族自治区|壮族自治区/), '')),
          (item.value = item.cust_count)
      })
      console.log('地图数据', data)
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
.china {
  width: 100%;
  height: 100%;
}
</style>
