<template>
  <div class="Openaccount" id="">
    <div class="home_action">
      <Action @sleData="sleData" />
      <PeopleN :openUdata="userdata" />
    </div>

    <div class="echart">
      <!-- echartbox -->
      <div class="echarts_left">
        <div class="echarts_left_top">
          <RealTime ref="RealTime" :querArr="querArr" />
        </div>
        <div class="echarts_left_boot">
          <Ranking ref="Ranking" :querArr="querArr" />
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
                <Overalltrend ref="Overalltrend" :querArr="querArr2" :checkboxVal="checkboxVal" />
              </div>
              <div class="item">
                <OverallTime ref="overallTime" :querArr="querArr2" />
              </div>
            </div>
            <div class="box_right">
              <div class="right_item">
                <Sex ref="sex" :querArr="querArr2" />
              </div>
              <div class="right_item">
                <City ref="city" :querArr="querArr2" />
              </div>
              <div class="right_item">
                <Xueli ref="xueli" :querArr="querArr2" />
              </div>
              <div class="right_item">
                <Level ref="level" :querArr="querArr2" />
              </div>
              <div class="right_item">
                <Age ref="age" :querArr="querArr2" />
              </div>
              <div class="right_item">
                <Qudao ref="qudao" :querArr="querArr2" />
              </div>
              <div class="right_item">
                <Fenxian ref="fenxian" :querArr="querArr2" />
              </div>
              <div class="right_item">
                <Famous ref="famous" :querArr="querArr2" />
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

import { openCountSum } from '@/api/home'
import mixinTime from '@/api/mixinTime'

export default {
  name: 'Openaccount',
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
  mixins: [mixinTime],
  data() {
    return {
      userdata: {},
      qurselect: [],
      querArr: [
        ['p_canal_code', '', 'C', '255'],
        ['p_org_code', '', 'C', '255'],
        ['p_city_code', '', 'C', '255'],
        ['p_city_level_code', '', 'C', '255'],
        ['p_open_age_code', '', 'C', '4'],
        ['p_open_date', '', 'C', '255'],
        ['p_education_code', '', 'C', '255'],
        ['p_sex_code', '', 'C', '255'],
        ['p_nation_code', '', 'C', '255'],
        ['p_risk_level_code', '', 'C', '255'],
      ],
      querArr2: [
        ['p_layer_status', '1', 'C', '255'],
        ['p_canal_code', '', 'C', '255'],
        ['p_org_code', '', 'C', '255'],
        ['p_city_code', '', 'C', '255'],
        ['p_city_level_code', '', 'C', '255'],
        ['p_open_age_code', '', 'C', '4'],
        ['p_open_date', '', 'C', '255'],
        ['p_education_code', '', 'C', '255'],
        ['p_sex_code', '', 'C', '255'],
        ['p_nation_code', '', 'C', '255'],
        ['p_risk_level_code', '', 'C', '255'],
      ],

      // showTime: '2021.05.08 24:00:00',
      title: '流量看板',
      checkboxVal: true,
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getcumer()
  },
  //方法集合
  methods: {
    //请求开户人数
    getcumer() {
      openCountSum().then((res) => {
        if (res.data.ErrorCode == 0) {
          var obj = JSON.parse(res.data.Data)
          this.userdata = obj[0].root[0]
        } else {
          this.$message({
            message: res.data.Data,
            type: 'error',
          })
        }
      })
    },
    change() {
      console.log(this.checkboxVal)
      if (this.checkboxVal) {
        this.$message({
          message: '已开启',
          type: 'success',
        })

        this.querArr2[0][1] = '1'
      } else {
        this.$message({
          message: '已关闭！',
          type: 'success',
        })
        this.querArr2[0][1] = '2'
      }

      // 请求看板数据
      this.updateData()
    },
    //下拉框选择赋值
    sleData(sleData) {
      // console.log(this.qurselect)
      console.log(sleData, '父组件接收到----')
      this.qurselect = sleData

      let querArr = [
        ['p_canal_code', this.qurselect[0].value ? this.qurselect[0].value : '', 'C', '4'],
        ['p_org_code', this.qurselect[1].value ? this.qurselect[1].value : '', 'C', '4'],
        ['p_city_code', this.qurselect[2].value ? this.qurselect[2].value : '', 'C', '4'],
        ['p_city_level_code', this.qurselect[3].value ? this.qurselect[3].value : '', 'C', '4'],
        ['p_open_age_code', this.qurselect[4].value ? this.qurselect[4].value : '', 'C', '4'],
        ['p_open_date', this.qurselect[5].value ? this.qurselect[5].value : '', 'C', '4'],
        ['p_education_code', this.qurselect[6].value ? this.qurselect[6].value : '', 'C', '4'],
        ['p_sex_code', this.qurselect[7].value ? this.qurselect[7].value : '', 'C', '4'],
        ['p_nation_code', this.qurselect[8].value ? this.qurselect[8].value : '', 'C', '4'],
        ['p_risk_level_code', this.qurselect[9].value ? this.qurselect[9].value : '', 'C', '4'],
      ]
      console.log(querArr, '--------------------------')
      // 看板需要的数据
      this.querArr2.concat(querArr)

      this.querArr = querArr

      console.log(this.querArr2, '---------querArr2-----------------')

      this.querArr = querArr

      this.updateData()
    },
    // 右侧看板
    updateData() {
      this.getcumer()
      // 左侧数据
      this.$refs.RealTime.getData()
      this.$refs.Ranking.getData()

      // 右侧数据 querArr2

      this.$refs.Overalltrend.getData()
      this.$refs.overallTime.getData()
      this.$refs.sex.getData()
      this.$refs.city.getData()
      this.$refs.xueli.getData()
      this.$refs.level.getData()
      this.$refs.age.getData()
      this.$refs.qudao.getData()
      this.$refs.fenxian.getData()
      this.$refs.famous.getData()
    },
  },
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
    .el-switch__core {
      width: 36px !important;
    }
  }
}
</style>
