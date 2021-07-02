<template>
  <div class="Left_3" id="">
    <div class="top">
      <div class="title_e">
        {{ title }}
      </div>
      <div class="show_times">截至时间：{{ showTime }}</div>
    </div>
    <div class="center">
      <div class="barChart" ref="barChart"></div>
    </div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'General',

  props: {
    msg: String,
  },
  data() {
    return {
      title: '漏斗层总体情况',
      showTime: '2021.05.08 24:00:00',
      conversionVal: [
        { value: 12, name: '开户层' },
        { value: 12, name: '开户层' },
        { value: 12, name: '开户层' },
        { value: 12, name: '开户层' },
        { value: 12, name: '开户层' },
      ],
      chartInstance: null,
      timerId: null, // 定时器的标识
    }
  },
  //方法集合
  methods: {
    initEcharts(data) {
      this.chartInstance = this.$echarts.init(this.$refs.barChart)

      const colorArr = []
      const colorArr2 = []
      var c1 = [
        'rgba(255,42,156)',
        'rgba(222,141,47)',
        'rgba(255,243,42)',
        'rgba(40,239,116)',

        'rgba(75, 243, 249,0.6)',
      ]
      var c2 = [
        'rgba(255,42,156,0.1)',
        'rgba(222,141,47,0.1)',
        'rgba(255,243,42,0.1)',

        'rgba(40,239,116,0.1)',
        'rgba(75, 243, 249,0.1)',
      ]

      for (var i = 0; i < c2.length; i++) {
        colorArr.push(
          new this.$echarts.graphic.LinearGradient(
            0,
            0,
            1,
            0,
            [
              {
                offset: 0,
                color: c2[i], // 100% 处的颜色
              },
              {
                offset: 0.2,
                color: c2[i], // 100% 处的颜色
              },

              {
                offset: 1,

                color: c1[i], // 0% 处的颜色
              },
            ],
            false
          )
        )
        colorArr2.push(
          new this.$echarts.graphic.LinearGradient(
            1,
            0,
            0,
            0,
            [
              {
                offset: 0,
                color: c2[i],
              },
              {
                offset: 0.2,
                color: c2[i],
              },
              {
                offset: 1,

                color: c1[i],
              },
            ],
            false
          )
        )
      }

      let option = {
        //提示框
        tooltip: {
          trigger: 'axis',
          showDelay: 0,
          extraCssText: 'padding:15px;font-size:10px',
          formatter: function(params) {
            return '漏斗总体情况' + ' : ' + params[1].name + '<br/>' + '人数' + ' : ' + params[1].value
          },
          axisPointer: {
            show: true,
            type: 'shadow',
          },
        },
        // 直角坐标系内绘图网格
        grid: {
          top: '2%',
          left: '4%',
          right: '4%',
          bottom: '2%',
          containLabel: true,
          textStyle: {
            color: '#fff',
          },
        },
        xAxis: {
          show: false,
        },
        yAxis: {
          type: 'category',
          axisTick: {
            show: false,
          },
          axisLabel: {
            formatter: '{value}',
            color: 'rgba(255,255,255,0.5)',

            fontSize: 14,
          },
          axisLine: {
            show: false,
            onZero: false,
          },

          splitLine: {
            show: false,
          },
          data: data.dataY.reverse(),
        },
        series: [
          {
            name: '工资区间1',
            type: 'bar',
            barCategoryGap: 50,
            barWidth: 25,
            stack: '总量',
            label: {
              show: false,
              color: 'white',
            },
            itemStyle: {
              normal: {
                color: function(params) {
                  return colorArr[params.dataIndex]
                },
                // borderColor: function(params) {
                //   console.log(params)
                //   return c1[params.dataIndex]
                // },
              },
            },
          },
          {
            name: '工资区间2',
            type: 'bar',
            stack: '总量',
            z: 10, //防止数字被覆盖
            label: {
              show: true,
              color: 'white',
              position: 'insideLeft',
              distance: -11,
              formatter: '{c}',
            },
            itemStyle: {
              normal: {
                color: function(params) {
                  return colorArr2[params.dataIndex]
                },
                // borderColor: function(params) {
                //   console.log(params)
                //   return c1[params.dataIndex]
                // },
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
        arr2 = []
      for (let i = 0; i < 6; i++) {
        let rand = Math.ceil(Math.random() * 100)
        arr.push(~rand)
        arr2.push(rand)
      }
      const dataOption = {
        series: [
          {
            data: arr,
          },
          {
            data: arr2,
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
  //生命周期 - 创建完成（可以访问当前this实例）
  mounted() {
    var data = {
      title: '',
      subtext: '单位:人',
      dataY: ['开户层', '入金层', '交易层', '存续层', '失活层'],
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
.Left_3 {
  width: 640px;
  height: 400px;
  background: url('../../assets/home/lsef_3_bg.png');
  @include backgroundSize;
  .top {
    height: 60px;
    background: url('../../assets/home/left_3.png') no-repeat;
    @include backgroundSize;

    display: flex;
    justify-content: space-between;
    .title_e {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #f1f1f1;
      line-height: 65px;
      padding-left: 50px;
    }
    .show_times {
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.5);
      line-height: 40px;
      padding-right: 30px;
    }
  }
  .center {
    width: 630px;
    height: 360px;
    padding: 20px;
    box-sizing: border-box;
    .barChart {
      width: 100%;
      height: 100%;
    }
    .item_Line {
      display: flex;
      justify-content: space-between;
      align-content: center;
      padding: 20px;
      .item_title {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #ffffff;
        opacity: 0.5;
        text-align: center;
        width: 50px;
        height: 40px;
        line-height: 40px;
      }
      .item_center {
        margin: 0 auto;
        // width: 488px;
        height: 40px;
        background-image: linear-gradient(90deg, #4bf3f9 0%, #4bf3f9 50%, #4bf3f9 100%);
        border: solid 1px #4bf3f9;
        opacity: 0.5;
        line-height: 40px;
        text-align: center;
      }
    }
  }
}
</style>
