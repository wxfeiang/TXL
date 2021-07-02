<template>
  <div class="deactivation" id="">
    <div class="home_action">
      <Action />
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
            <div class="show_times">更新时间： {{ showTime }}</div>
          </div>
          <div class="checkbox">
            分层数据分析
            <el-switch v-model="checkboxVal" @change="change" active-color="#00FDF6"> </el-switch>
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
import Action from '@/components/base/Action.vue'
import PeopleN from '@/components/base/PeopleN.vue'

import RealTime from '@/components/deactivation/RealTime.vue'
import Ranking from '@/components/deactivation/Ranking.vue'
import Overalltrend from '@/components/deactivation/Overalltrend.vue'
import OverallTime from '@/components/deactivation/OverallTime.vue'
import Sex from '@/components/deactivation/Sex.vue'
import City from '@/components/deactivation/City.vue'
import Xueli from '@/components/deactivation/Xueli.vue'
import Level from '@/components/deactivation/Level.vue'
import Qudao from '@/components/deactivation/Qudao.vue'
import Age from '@/components/deactivation/Age.vue'
import Fenxian from '@/components/deactivation/Fenxian.vue'
import Famous from '@/components/deactivation/Famous.vue'

export default {
  name: 'deactivation',
  components: {
    Action,
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
      checkboxVal: true,
    }
  },
  //方法集合
  methods: {
    change() {
      console.log(this.checkboxVal)
      if (this.checkboxVal) {
        this.$message({
          message: '已开启',
          type: 'success',
        })
      } else {
        this.$message({
          message: '已关闭！',
          type: 'success',
        })
      }
    },
  },
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
  .right_box {
    background: url('../assets/kihu/liliang.png');
    @include backgroundSize;
    .top {
      background: url('../assets/kihu/lil_titile.png') no-repeat;
      @include backgroundSize;
    }
  }
}
.checkbox {
  text-align: right;
  color: #ffffff;
  padding: 0 40px 10px 0;
  margin: -10px 0 0 0;
  font-size: 12px;
  font-family: Source Han Sans CN;
  font-weight: 400;

  /deep/ .el-switch {
    width: 36px;
    margin: -3px 0 0 0;
  }
}
</style>
