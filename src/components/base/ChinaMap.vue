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
      this.chartInstance = this.$echarts.init(this.$refs.china)
      var dataList = [
        {
          name: '南海诸岛',
          value: 0,
        },
        {
          name: '北京',
          value: 54,
        },
        {
          name: '天津',
          value: 13,
        },
        {
          name: '上海',
          value: 40,
        },
        {
          name: '重庆',
          value: 75,
        },
        {
          name: '河北',
          value: 13,
        },
        {
          name: '河南',
          value: 83,
        },
        {
          name: '云南',
          value: 11,
        },
        {
          name: '辽宁',
          value: 19,
        },
        {
          name: '黑龙江',
          value: 15,
        },
        {
          name: '湖南',
          value: 69,
        },
        {
          name: '安徽',
          value: 60,
        },
        {
          name: '山东',
          value: 39,
        },
        {
          name: '新疆',
          value: 4,
        },
        {
          name: '江苏',
          value: 31,
        },
        {
          name: '浙江',
          value: 104,
        },
        {
          name: '江西',
          value: 36,
        },
        {
          name: '湖北',
          value: 1052,
        },
        {
          name: '广西',
          value: 33,
        },
        {
          name: '甘肃',
          value: 7,
        },
        {
          name: '山西',
          value: 9,
        },
        {
          name: '内蒙古',
          value: 7,
        },
        {
          name: '陕西',
          value: 22,
        },
        {
          name: '吉林',
          value: 4,
        },
        {
          name: '福建',
          value: 18,
        },
        {
          name: '贵州',
          value: 5,
        },
        {
          name: '广东',
          value: 98,
        },
        {
          name: '青海',
          value: 1,
        },
        {
          name: '西藏',
          value: 0,
        },
        {
          name: '四川',
          value: 44,
        },
        {
          name: '宁夏',
          value: 4,
        },
        {
          name: '海南',
          value: 22,
        },
        {
          name: '台湾',
          value: 3,
        },
        {
          name: '香港',
          value: 5,
        },
        {
          name: '澳门',
          value: 5,
        },
      ]
      let option = {
        tooltip: {},

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
            data: dataList,
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
    var data = {
      title: '',
      subtext: '单位:人',
      name: '性别',
      arr: [
        { value: 1048, name: '男' },
        { value: 735, name: '女' },
      ],
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
