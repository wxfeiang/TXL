<template>
  <div class="" id="">
    <div class="home_action">
      <Action @sleData="sleData" />
      <PeopleN :openUdata="userdata" />
    </div>
    <!-- echartsbox -->
    <div class="echarts_box">
      <div class="Left_3">
        <General ref="Generals" :querArr="querArr" />
      </div>
      <div class="right_6">
        <Fenceng ref="fenceng" :querArr="querArr" />
        <Zhuanhua ref="zhuanhua" :querArr="querArr" />
      </div>
    </div>
    <div class="echarts_box">
      <div class="Left_3">
        <TableHome ref="tableHome" :querArr="querArr" />
      </div>
      <div class="right_6">
        <Account ref="account" :querArr="querArr" />
      </div>
    </div>
  </div>
</template>
<script>
import Action from '@/components/base/Action.vue'
import PeopleN from '@/components/base/PeopleN.vue'
import General from '@/components/home/General.vue'

import Account from '@/components/home/Account.vue'
import Fenceng from '@/components/home/Fenceng.vue'
import Zhuanhua from '@/components/home/Zhuanhua.vue'
import TableHome from '@/components/home/TableHome.vue'
import { openCountSum } from '@/api/home'

import mixinTime from '@/api/mixinTime'

export default {
  name: 'index',
  components: {
    Action,
    Fenceng,
    Zhuanhua,
    PeopleN,
    TableHome,
    General,
    Account,
  },
  mixins: [mixinTime],
  data() {
    return {
      ceshi: 'ceshi ',
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
    }
  },
  created: function() {
    this.getcumer()
    // this.getfencegn()
  },
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

      this.querArr = querArr
      this.updateData()
    },
    updateData() {
      this.getcumer()

      this.$refs.Generals.getData(this.querArr)
      this.$refs.fenceng.getData(this.querArr)
      this.$refs.zhuanhua.getData(this.querArr)
      this.$refs.account.getData(this.querArr)
      this.$refs.tableHome.getData(this.querArr)
    },
  },
}
</script>
<style lang="scss" scoped>
.home_action {
  // margin: 0px 0 20px;
  padding: 0 0 10px 20px;
  display: flex;
  justify-content: space-between;
  .select_warp {
    width: 60%;
  }
}
.echarts_box {
  display: flex;
  justify-content: center;

  .Left_3 {
  }
  .right_6 {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
}
</style>
