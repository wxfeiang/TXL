<template>
  <div class="Openaccount" id="">
    <div class="home_action">
      <PeopleN />
    </div>

    <div class="echart">
      <!-- echartbox -->
      <div class="echarts_left">
        <div class="echarts_left_top">
          <RealTime />
        </div>
        <div class="echarts_left_boot">
          <Ranking />
        </div>
      </div>
      <div class="echarts_right">
        <div class="right_box">
          <div class="top">
            <div class="title_e">
              {{ title }}
            </div>
            <div class="show_times">
              {{ showTime }}
            </div>
          </div>
          <div class="center">
            <div class="box_left">
              <div class="item">
                <Overalltrend />
              </div>
              <div class="item">
                <OverallTime />
              </div>
            </div>
            <div class="box_right">
              <div class="right_item">
                <Sex />
              </div>
              <div class="right_item">
                <City />
              </div>
              <div class="right_item">
                <Xueli />
              </div>
              <div class="right_item">
                <Level />
              </div>
              <div class="right_item">
                <Age />
              </div>
              <div class="right_item">
                <Qudao />
              </div>
              <div class="right_item">
                <Fenxian />
              </div>
              <div class="right_item">
                <Famous />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import SclectItem from '@/components/gase/SclectItem.vue'
import PeopleN from '@/components/base/PeopleN.vue'

import RealTime from '@/components/kihu/RealTime.vue'
import Ranking from '@/components/kihu/Ranking.vue'
import Overalltrend from '@/components/kihu/Overalltrend.vue'
import OverallTime from '@/components/kihu/OverallTime.vue'
import Sex from '@/components/kihu/Sex.vue'
import City from '@/components/kihu/City.vue'

import Xueli from '@/components/kihu/Xueli.vue'
import Level from '@/components/kihu/Level.vue'
import Qudao from '@/components/kihu/Qudao.vue'
import Age from '@/components/kihu/Age.vue'
import Fenxian from '@/components/kihu/Fenxian.vue'
import Famous from '@/components/kihu/Famous.vue'

export default {
  name: 'Openaccount',
  components: {
    PeopleN,
    RealTime,
    Ranking,
    Overalltrend,
    OverallTime,
    Sex,
    City,
    Xueli,
    Level,
    Qudao,
    Age,
    Fenxian,
    Famous,
  },
  data() {
    return {
      showTime: '2021.05.08 24:00:00',
      title: '流量看板',

      qudao: [
        {
          value: '渠道',
          label: '渠道',
        },
        {
          value: '渠道2',
          label: '渠道2',
        },
      ],
      jigou: [
        {
          value: '组织机构',
          label: '组织机构',
        },
        {
          value: '组织机构2',
          label: '组织机构2',
        },
      ],
      city: [
        {
          value: '所在城市',
          label: '所在城市',
        },
        {
          value: '所在城市2',
          label: '所在城市2',
        },
      ],
      cityjb: [
        {
          value: '所在城市级别',
          label: '所在城市级别',
        },
        {
          value: '所在城市级别2',
          label: '所在城市级别2',
        },
      ],
      age: [
        {
          value: '开户年龄',
          label: '开户年龄',
        },
        {
          value: '开户年龄',
          label: '开户年龄',
        },
      ],
      agetime: [
        {
          value: '开户时间',
          label: '开户时间',
        },
        {
          value: '开户时间',
          label: '开户时间',
        },
      ],
      xueli: [
        {
          value: '学历',
          label: '学历',
        },
      ],
      sex: [
        {
          value: '性别',
          label: '性别',
        },
        {
          value: '男',
          label: '男',
        },
        {
          value: '女',
          label: '女',
        },
      ],
      mingzu: [
        {
          value: '名族',
          label: '名族',
        },
      ],
      dengji: [
        {
          value: '风险等级',
          label: '风险等级',
        },
      ],
    }
  },
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
}
</script>
<style lang="scss" scoped>
.home_action {
  // margin: 0px 0 20px;
  padding: 0 0 0 20px;
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
      .showhtml {
        margin-left: 20px;
      }
    }
  }
}
.echart {
  display: flex;

  .echarts_left {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  .right_box {
    width: 1250px;
    height: 890px;
    background: url('../assets/kihu/liliang.png');
    @include backgroundSize;
    .top {
      height: 60px;
      background: url('../assets/kihu/lil_titile.png') no-repeat;
      @include backgroundSize;

      display: flex;
      justify-content: space-between;
      .title_e {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #f1f1f1;
        line-height: 60px;
        padding-left: 60px;
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
      justify-content: space-between;
      padding: 0 0 0 30px;

      .box_left {
        .item {
          margin: 0 0 20px 0;
        }
      }
      .box_right {
        display: flex;

        flex-wrap: wrap;
        padding: 0 0 0 20px;
        box-sizing: border-box;
      }
      .right_item {
        margin-right: 20px;
      }
    }
  }
}
</style>
