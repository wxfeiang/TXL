<template>
  <div class="home" :style="home_bg">
    <div class="home_box">
      <Header />
      <div class="min_box">
        <!-- 左侧按钮 -->
        <Leftmenu />
        <div class="min_des">
          <div class="home_action">
            <div class="select_warp">
              <div class="select_box">
                <div class="lab_sban">
                  <span>筛选条件</span>
                  <SclectItem />
                  <SclectItem />
                </div>
              </div>
              <div class="select_box">
                <div class="lab_sban">
                  <span>筛选条件</span>
                  <SclectItem />
                  <SclectItem />
                </div>
              </div>
            </div>
            <div class="pelop_num">
              开户人数
              <span>1</span>
              <span>5</span>
              <span>0</span>
              <span>0</span>
              人
            </div>
          </div>
          <!-- echartsbox -->
          <div class="echarts_box">
            <div class="Left_3" :style="left_3">
              <div class="top" :style="title_bg">
                <div class="title_e">
                  漏斗层总体情况
                </div>
                <div class="show_times">
                  截至时间:2021.05.08 24:00:00
                </div>
              </div>
              <div class="center">
                jutinetong
              </div>
            </div>
            <div class="right_6">
              <div class="right_item" :style="right_3">
                <div class="top" :style="title_right_bg">
                  <div class="title_e">
                    实时分层数据
                  </div>
                  <div class="show_times">
                    截至时间:2021.05.08 24:00:00
                  </div>
                </div>
                <div class="center">
                  <div class="conversion">
                    <div class="C_Number" :style="conversion1">
                      sdcs
                    </div>
                    <div class="C_text">
                      开户层
                    </div>
                  </div>
                  <div class="conversion">
                    <div class="C_Number" :style="conversion2">
                      sdcs
                    </div>
                    <div class="C_text">
                      开户层
                    </div>
                  </div>
                  <div class="conversion">
                    <div class="C_Number" :style="conversion3">
                      sdcs
                    </div>
                    <div class="C_text">
                      开户层
                    </div>
                  </div>
                  <div class="conversion">
                    <div class="C_Number" :style="conversion4">
                      sdcs
                    </div>
                    <div class="C_text">
                      开户层
                    </div>
                  </div>
                  <div class="conversion">
                    <div class="C_Number" :style="conversion5">
                      sdcs
                    </div>
                    <div class="C_text">
                      开户层
                    </div>
                  </div>
                </div>
              </div>
              <div class="right_item" :style="right_3">
                <div class="top" :style="title_right_2">
                  <div class="title_e">
                    实时转化率/留存率
                  </div>
                  <div class="show_times">
                    截至时间:2021.05.08 24:00:00
                  </div>
                </div>
                <div class="center">
                  <div class="bar" :style="bar_bg">
                    <div class="B_text">
                      开户层
                    </div>
                    <div class="B_Number">
                      1121
                    </div>
                  </div>
                  <div class="bar" :style="bar_bg">
                    <div class="B_text">
                      开户层
                    </div>
                    <div class="B_Number">
                      1121
                    </div>
                  </div>
                  <div class="bar" :style="bar_bg">
                    <div class="B_text">
                      开户层
                    </div>
                    <div class="B_Number">
                      1121
                    </div>
                  </div>
                  <div class="bar" :style="bar_bg">
                    <div class="B_text">
                      开户层
                    </div>
                    <div class="B_Number">
                      1121
                    </div>
                  </div>
                  <div class="bar" :style="bar_bg">
                    <div class="B_text">
                      开户层
                    </div>
                    <div class="B_Number">
                      1121
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Leftmenu from '@/components/Leftmenu.vue'
import SclectItem from '@/components/SclectItem.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Leftmenu,
    SclectItem,
  },
  data() {
    return {
      logo: require('../assets/login/logo.png'),
      user: require('../assets/login/user.png'),
      password: require('../assets/login/password.png'),
      home_bg: {
        backgroundImage: 'url(' + require('../assets/home/bg_n.jpg') + ')',
      },
      home_bg_box: {
        backgroundImage: 'url(' + require('../assets/home/home_bg_box.png') + ')',
      },
      left_3: {
        backgroundImage: 'url(' + require('../assets/home/lsef_3_bg.png') + ')',
      },
      title_bg: {
        backgroundImage: 'url(' + require('../assets/home/left_3.png') + ')',
      },
      right_3: {
        backgroundImage: 'url(' + require('../assets/home/right_3.png') + ')',
      },
      title_right_bg: {
        backgroundImage: 'url(' + require('../assets/home/title_right_bg.png') + ')',
      },

      title_right_2: {
        backgroundImage: 'url(' + require('../assets/home/title_right_2.png') + ')',
      },
      conversion1: {
        backgroundImage: 'url(' + require('../assets/home/con_1.png') + ')',
      },
      conversion2: {
        backgroundImage: 'url(' + require('../assets/home/con_2.png') + ')',
      },
      conversion3: {
        backgroundImage: 'url(' + require('../assets/home/con_3.png') + ')',
      },
      conversion4: {
        backgroundImage: 'url(' + require('../assets/home/con_4.png') + ')',
      },
      conversion5: {
        backgroundImage: 'url(' + require('../assets/home/con_5.png') + ')',
      },
      bar_bg: {
        backgroundImage: 'url(' + require('../assets/home/bar_bg.png') + ')',
      },

      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      value: '',
    }
  },
}
</script>
<style lang="scss" scoped>
.home {
  padding: 14px 16px 0;
}
.home,
.home_box {
  height: 100%;
  box-sizing: border-box;
  background-size: cover;
  background-repeat: no-repeat;
}
.min_box {
  display: flex;
  .min_des {
    width: 95%;
    box-sizing: border-box;
    padding: 10px 0 0 30px;
  }
}
.home_action {
  display: flex;
  justify-content: space-between;
  .select_warp {
    width: 60%;
  }
  .select_box {
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #2ff8ff;
    .lab_sban {
      display: flex;
      span {
        line-height: 40px;
      }
    }
  }
  .pelop_num {
    width: 40%;
    font-family: SourceHanSansCN-Medium;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 50px;
    letter-spacing: 0px;
    color: #666;
    text-align: right;
    padding: 0 50px 0 0;
    span {
      display: inline-block;
      width: 38px;
      line-height: 50px;
      background-image: linear-gradient(0deg, #06296a 0%, #06296a 100%);
      border-style: solid;
      border-width: 1px;
      border-image-source: linear-gradient(0deg, rgba(0, 182, 255, 0.8) 0%, rgba(0, 182, 255, 0.08) 100%);
      border-image-slice: 1;
      box-sizing: border-box;
      padding: 0 5px;
      margin: 10px 10px 0 0;
      text-align: center;
      font-family: AlibabaSans-Bold;
      font-size: 40px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 2px;
      color: #00fdf6;
    }
  }
}
.echarts_box {
  display: flex;
  .Left_3 {
    width: 630px;
    height: 400px;
    @extend .backgroundSize;
    .top {
      width: 630px;
      height: 60px;
      @extend .backgroundSize;

      display: flex;
      justify-content: space-between;
      .title_e {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #f1f1f1;
        line-height: 60px;
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
  }
  .right_6 {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .right_item {
      width: 1120px;
      height: 200px;
      @extend .backgroundSize;
      .top {
        width: 1120px;
        height: 60px;
        @extend .backgroundSize;

        display: flex;
        justify-content: space-between;
        .title_e {
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #f1f1f1;
          line-height: 60px;
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
        display: flex;
        justify-content: space-around;
        padding-top: 10px;
        .conversion {
          width: 78px;
          text-align: center;
          .C_Number {
            height: 72px;
            font-size: 20px;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #ffffff;
            @extend .backgroundSize;
            line-height: 50px;
          }
          .C_text {
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #ffffff;
            line-height: 27px;
            opacity: 0.5;
            line-height: 40px;
          }
        }
        .bar {
          margin-top: 20px;
          width: 145px;
          height: 60px;
          padding-right: 5px;
          @extend .backgroundSize;
          .B_text {
            text-align: right;
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #4bf3f9;
            line-height: 20px;
            margin-top: -5px;
          }
          .B_Number {
            font-family: Source Han Sans CN;
            font-weight: bold;
            font-style: italic;
            color: #4bf3f9;
            text-align: right;
            line-height: 50px;
          }
        }
      }
    }
  }
}
</style>
