<template>
  <div class="tableof boot_20">
    <div class="top">
      <div class="title">
        {{ title }}
      </div>
      <ul class="tab-tilte">
        <li @click="cur = 0" :class="{ active: cur == 0 }">正式公告</li>
        <li @click="cur = 1" :class="{ active: cur == 1 }">预告</li>
      </ul>
      <div class="more">
        更多>>
      </div>
    </div>
    <div class="tab-content">
      <div v-show="cur == 0">
        <Table :tableData="tableData" :congigTable="congigTable">
          <template v-slot:xmbh="slotdata">
            <div class="xmbh">{{ slotdata.data.row.xmbh }}</div>
          </template>
          <template v-slot:xmmc="slotdata">
            <div class="xmmc" @click="linkdesc">{{ slotdata.data.row.xmmc }}</div>
          </template>
          <template v-slot:zrdj="slotdata">
            <div class="zrdj">{{ slotdata.data.row.zrdj }}</div>
          </template>

          <!-- satuas  插槽自定义 -->
          <template v-slot:action="slotdata">
            <div class="btn" v-if="slotdata.data.row.status === '报名中'" @click="go_bao">
              {{ slotdata.data.row.status }}
            </div>
            <div class="btn2" v-if="slotdata.data.row.status === '已成交'">{{ slotdata.data.row.status }}</div>
            <div class="btn2" v-if="slotdata.data.row.status === '报名截止'">{{ slotdata.data.row.status }}</div>
          </template>
        </Table>
      </div>
      <div v-show="cur == 1">
        <Table :tableData="tableData" :congigTable="congigTable">
          <template v-slot:xmbh="slotdata">
            <div class="xmbh">{{ slotdata.data.row.xmbh }}</div>
          </template>
          <template v-slot:xmmc="slotdata">
            <div class="xmmc" @click="linkdesc">{{ slotdata.data.row.xmmc }}</div>
          </template>
          <template v-slot:zrdj="slotdata">
            <div class="zrdj">{{ slotdata.data.row.zrdj }}</div>
          </template>

          <!-- satuas  插槽自定义 -->
          <template v-slot:action="slotdata">
            <div class="btn" v-if="slotdata.data.row.status === '报名中'" @click="go_bao">
              {{ slotdata.data.row.status }}
            </div>
            <div class="btn2" v-if="slotdata.data.row.status === '已成交'">{{ slotdata.data.row.status }}</div>
            <div class="btn2" v-if="slotdata.data.row.status === '报名截止'">{{ slotdata.data.row.status }}</div>
          </template>
        </Table>
      </div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/base/Table.vue'
export default {
  components: {
    Table,
  },
  props: {
    title: String,
  },
  data() {
    return {
      cur: 0, //默认选中第一个tab

      tableData: [
        {
          jlxh: '1',
          xmbh: 'WL2021CQ027',
          xmmc: '甘肃昌茂房地产开发有限公司100%股权转让公告',
          syhy: '房地产开发',
          zrdj: '2000',
          rq: '2021-07-30',
          status: '报名中',
        },
        {
          jlxh: '1',
          xmbh: 'WL2021CQ027',
          xmmc: '甘肃矿区正信劳务有限公司100%股权转让公告',
          syhy: '预制厂',
          zrdj: '2000',
          rq: '2021-07-30',
          status: '报名中',
        },
        {
          jlxh: '1',
          xmbh: 'WL2021CQ027',
          xmmc: '白银市铜城热力有限责任公司9.43%股权（第三次）转让公告',
          syhy: '零售业',
          zrdj: '2000',
          rq: '2021-07-30',
          status: '报名中',
        },
        {
          jlxh: '1',
          xmbh: 'WL2021CQ027',
          xmmc: '甘肃建科技术试验检测有限责任公司18%股权转让公告',
          syhy: '器材制造业',
          zrdj: '2000',
          rq: '2021-07-30',
          status: '已成交',
        },
        {
          jlxh: '1',
          xmbh: 'WL2021CQ027',
          xmmc: '白银市铜城热力有限责任公司5.66%股权转让公告（第三次）',
          syhy: '零售业',
          zrdj: '2000',
          rq: '2021-07-30',
          status: '报名截止',
        },
      ],
      congigTable: {
        checkbox: false,
        columns: [
          {
            label: '项目编号',
            prop: 'xmbh',
            align: 'left',
            column: 'slot',
            slotName: 'xmbh',
          },

          {
            label: '项目名称',
            prop: 'xmmc',
            align: 'left',
            width: '200',
            column: 'slot',
            slotName: 'xmmc',
          },
          {
            label: '所属行业',
            prop: 'syhy',
            align: 'left',
          },
          {
            label: '转让底价（万元）',
            prop: 'zrdj',
            align: 'center',
            column: 'slot',
            slotName: 'zrdj',
          },
          {
            label: '挂牌截止日期',
            prop: 'rq',
            align: 'center',
          },
          {
            label: '项目状态',
            prop: 'staus',
            align: 'center',
            column: 'slot',
            slotName: 'action',
          },
        ],
      },
    }
  },
  methods: {
    go_bao() {
      alert('报名中......')
    },
    linkdesc() {
      this.$router.push({ name: 'desc' })
      console.log('desc')
    },
  },
}
</script>

<style lang="scss" scoped>
.tableof {
  padding: 20px;
  background: #fff;
}
.top {
  display: flex;
  border-top: 1px solid #b5975f;

  .title {
    width: 122px;
    font-size: 18px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #ffffff;
    line-height: 42px;
    background: url('../assets/homeIndex/bg.png') no-repeat;
    // text-align: center;
    padding: 0 0 0 20px;
  }
  .tab-tilte {
    display: flex;

    li {
      margin-top: 10px;
      padding: 0 20px;
      font-size: 14px;
      background: #ffffff;
      border: 1px solid #b5975f;
      cursor: pointer;
      line-height: 26px;
      height: 26px;
      margin-left: 20px;
    }
    .active {
      background: #b5975f;
      border: 1px solid #b5975f;
      color: #fff;
    }
  }
  .more {
    margin-top: 10px;
    line-height: 26px;
    height: 26px;
    flex: 1;
    text-align: right;
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #333333;
    cursor: pointer;
  }
}
.tab-content {
  .xmbh {
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #999999;
  }
  .zrdj {
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #f10000;
  }
  .xmmc {
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #333;
  }
  .xmmc:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  .btn {
    width: 56px;
    height: 26px;
    background: #b5975f;
    border: 1px solid #b5975f;
    margin: 0 auto;
    cursor: pointer;
    color: #fff;
  }
  .btn2 {
    width: 56px;
    height: 26px;
    margin: 0 auto;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #999999;
  }
}
</style>
