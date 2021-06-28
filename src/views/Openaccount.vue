<template>
  <div class="Openaccount" id="">
    <div class="home_action">
      <div class="select_warp">
        <div class="select_box">
          <div class="lab_sban">
            <span>筛选条件</span>
            <SclectItem :options="qudao" />
            <SclectItem :options="jigou" />
            <SclectItem :options="city" />
            <SclectItem :options="cityjb" />
            <SclectItem :options="age" />
            <SclectItem :options="agetime" />
            <SclectItem :options="xueli" />
            <SclectItem :options="sex" />
            <SclectItem :options="mingzu" />
            <SclectItem :options="dengji" />
          </div>
        </div>
        <div class="select_box">
          <div class="lab_sban">
            <span>当前条件</span>
            <span class="showhtml">全部</span>
          </div>
        </div>
      </div>
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
              <Overalltrend />
            </div>
            <div class="box_right">
              right
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
import SclectItem from '@/components/SclectItem.vue'
import PeopleN from '@/components/home/PeopleN.vue'
import RealTime from '@/components/base/RealTime.vue'

import Ranking from '@/components/base/Ranking.vue'

import Overalltrend from '@/components/base/Overalltrend.vue'

export default {
  name: 'Openaccount',
  components: {
    SclectItem,
    PeopleN,
    RealTime,
    Ranking,
    Overalltrend,
  },
  data() {
    return {
      title: '流量看板',
      showTime: '2021.05.08 24:00:00',
      conversionVal: [
        { value: 12, name: '开户层' },
        { value: 12, name: '开户层' },
        { value: 12, name: '开户层' },
      ],
      conversionVal2: [
        { value: 12, name: '开户层' },
        { value: 12, name: '开户层' },
      ],
      conversionVal3: [
        { value: 12, name: '开户层' },
        { value: 12, name: '开户层' },
      ],

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
  justify-content: space-between;
  .echarts_left {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  .right_box {
    width: 1268px;
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
      padding: 0 0 0 20px;
    }
  }
}
</style>
