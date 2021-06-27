<template>
  <div class="" id="">
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
            <span>当前条件</span>
            <SclectItem />
            <SclectItem />
          </div>
        </div>
      </div>
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
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import SclectItem from '@/components/SclectItem.vue'

import General from '@/components/home/General.vue'

import Account from '@/components/home/Account.vue'
import Fenceng from '@/components/home/Fenceng.vue'
import Zhuanhua from '@/components/home/Zhuanhua.vue'
import PeopleN from '@/components/home/PeopleN.vue'
import TableHome from '@/components/home/TableHome.vue'
export default {
  name: 'index',
  components: {
    SclectItem,
    Fenceng,
    Zhuanhua,
    PeopleN,
    TableHome,
    General,
    Account,
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.home_action {
  margin: 0px 0 20px;
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
    }
  }
}
.echarts_box {
  margin: 10px 0 0 0;
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
