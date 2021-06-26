<template>
  <div class="home">
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
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Leftmenu from '@/components/Leftmenu.vue'
import SclectItem from '@/components/SclectItem.vue'

import General from '@/components/home/General.vue'

import Account from '@/components/home/Account.vue'
import Fenceng from '@/components/home/Fenceng.vue'
import Zhuanhua from '@/components/home/Zhuanhua.vue'
import PeopleN from '@/components/home/PeopleN.vue'
import TableHome from '@/components/home/TableHome.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Leftmenu,
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
.home {
  padding: 14px 16px 0;
  height: 100%;
  // height: 1080px;
  // // overflow: hidden;
  background: #2ff8ff url('../assets/home/bg_n.jpg') no-repeat;
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
}
.echarts_box {
  display: flex;
  .Left_3 {
  }
  .right_6 {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
}
</style>
