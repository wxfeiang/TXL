<template>
  <div class="" id="">
    <div class="home_action">
      <Action />
      <PeopleN />
    </div>
    <!-- echartsbox -->
    <div class="echarts_box">
      <div class="Left_3">
        <General />
      </div>
      <div class="right_6">
        <Fenceng />
        <Zhuanhua />
      </div>
    </div>
    <div class="echarts_box">
      <div class="Left_3">
        <Account />
      </div>
      <div class="right_6">
        <TableHome />
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
  data() {
    return {
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
