<template>
  <div class="tables" id="">
    <div class="top">
      <div class="title_e">
        {{ title }}
      </div>
      <div class="show_times">更新时间:{{ showTime }}</div>
    </div>
    <div class="tab_warp">
      <Table :tableData="tableData" :congigTable="congigTable">
        <!-- satuas  插槽自定义 -->
        <template v-slot:status="slotdata">
          <div class="dy_cont">{{ slotdata.data.row.cont }}</div>
        </template>
      </Table>
    </div>
  </div>
</template>
<script>
import Table from '@/components/Table.vue'
export default {
  name: 'TableHome',
  components: {
    Table,
  },
  data() {
    return {
      title: '实时分层流动数据',
      showTime: '2021.05.08 24:00:00',
      tableData: [
        {
          name: '开户层',
          time: '08:00',
          data: '121',
          other: '2',
          cont: '215',
        },
        {
          name: '入金层',
          time: '08:00',
          data: '111',
          other: '2',
          cont: '335',
        },
        {
          name: '交易层',
          time: '08:00',
          data: '171',
          other: '2',
          cont: '665',
        },
        {
          name: '存续层',
          time: '08:00',
          data: '191',
          other: '2',
          cont: '53',
        },
        {
          name: '失活层',
          time: '08:00',
          data: '161',
          other: '2',
          cont: '512',
        },
      ],
      congigTable: {
        checkbox: false,
        columns: [
          {
            id: '1',
            label: '时间点',
            prop: 'name',
            width: '80',
          },
          {
            label: '08:00',
            prop: 'data',
            align: 'center',
            width: '60',
          },
          {
            label: '09:00',
            prop: 'data',
            align: 'center',
            width: '60',
          },

          {
            label: '10:00',
            prop: 'data',
            align: 'center',
            width: '60',
          },
          {
            label: '11:00',
            prop: 'data',
            align: 'center',
            width: '60',
          },
          {
            label: '12:00',
            prop: 'data',
            align: 'center',
            width: '60',
          },
          {
            label: '13:00',
            prop: 'data',
            align: 'center',
            width: '60',
          },
          {
            label: '14:00',
            prop: 'data',
            align: 'center',
            width: '60',
          },
          {
            label: '15:00',
            prop: 'data',
            align: 'center',
            width: '60',
          },
          {
            label: '16:00',
            prop: 'data',
            align: 'center',
            width: '60',
          },
          {
            label: '17:00',
            prop: 'data',
            align: 'center',
            width: '60',
          },

          {
            label: '其他',
            prop: 'other',
            align: 'center',
            width: '60',
          },

          {
            label: '合计',
            prop: 'cont',
            align: 'center',
            column: 'slot',
            slotName: 'status',
            width: '60',
          },
        ],
      },
    }
  },
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.tables {
  width: 1120px;
  height: 460px;
  background: url('../../assets/home/tabls.png') no-repeat;
  @include backgroundSize;
  .top {
    display: flex;
    justify-content: space-between;
    width: 1120px;
    height: 60px;
    background: url('../../assets/home/title_right_2.png') no-repeat;
    @include backgroundSize;

    .title_e {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #f1f1f1;
      line-height: 65px;
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
  .tab_warp {
    width: 1120px;
    box-sizing: border-box;
    padding: 30px 40px;
  }

  .dy_cont {
    font-family: SourceHanSansCN-Regular;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 17px;
    letter-spacing: 0px;
    color: #2ff8ff;
    text-align: center;
  }
  /deep/ .el-table thead tr th {
    height: 58px;
  }

  /deep/ .dytable .el-table thead tr th:nth-last-child(2) {
    color: #2ff8ff !important;
  }
}
</style>
