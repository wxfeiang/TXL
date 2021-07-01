<template>
  <div class="subsist" id="">
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
            分析层数据
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
    <el-dialog :visible.sync="dialogVisible" :show-close="false" width="60%">
      <UserList @close="close" />
    </el-dialog>
  </div>
</template>
<script>
import Action from '@/components/base/Action.vue'
import PeopleN from '@/components/base/PeopleN.vue'
import UserList from '@/components/base/UserList.vue'

import RealTime from '@/components/subsist/RealTime.vue'
import Ranking from '@/components/subsist/Ranking.vue'
import Overalltrend from '@/components/subsist/Overalltrend.vue'
import OverallTime from '@/components/subsist/OverallTime.vue'
import Sex from '@/components/subsist/Sex.vue'
import City from '@/components/subsist/City.vue'
import Xueli from '@/components/subsist/Xueli.vue'
import Level from '@/components/subsist/Level.vue'
import Qudao from '@/components/subsist/Qudao.vue'
import Age from '@/components/subsist/Age.vue'
import Fenxian from '@/components/subsist/Fenxian.vue'
import Famous from '@/components/subsist/Famous.vue'

export default {
  name: 'subsist',
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
    UserList,
  },
  data() {
    return {
      dialogVisible: true,
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
    close() {
      this.dialogVisible = false
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
  display: flex;
  // justify-content: space-around;

  .echarts_left {
    display: flex;
    // justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  .right_box {
    // width: 1280px;

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
/deep/ .el-dialog {
  background: transparent;
}
/deep/ .el-dialog__header {
  display: none !important;
}
/deep/ .el-dialog__body {
  padding: 0 !important;
}
</style>
