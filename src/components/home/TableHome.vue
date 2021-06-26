<template>
  <div class="tables" id="">
    <div class="top">
      <div class="title_e">
        {{ title }}
      </div>
      <div class="show_times">截至时间:{{ showTime }}</div>
    </div>
    <div class="tab_warp">
      <Table :tableData="tableData" :congigTable="congigTable">
        <!-- satuas  插槽自定义 -->
        <template v-slot:status="slotdata">
          <div class="dy_cont">{{ slotdata.data.cont }}</div>
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
      title: '实时分层数据',
      showTime: '2021.05.08 24:00:00',
      tableData: [
        {
          name: '失火层',
          time: '08:00',
          data: '11',
          other: '2',
          cont: '5',
        },
        {
          name: '失火层',
          time: '08:00',
          data: '11',
          other: '2',
          cont: '5',
        },
        {
          name: '失火层',
          time: '08:00',
          data: '11',
          other: '2',
          cont: '5',
        },
        {
          name: '失火层',
          time: '08:00',
          data: '11',
          other: '2',
          cont: '5',
        },
        {
          name: '失火层',
          time: '08:00',
          data: '11',
          other: '2',
          cont: '5',
        },
      ],
      congigTable: {
        checkbox: false,
        columns: [
          {
            id: '1',
            label: '时间点',
            prop: 'name',
            width: '100',
          },
          {
            label: '08:00',
            prop: 'data',
            align: 'center',
          },
          {
            label: '10:00',
            prop: 'data',
            align: 'center',
          },
          {
            label: '12:00',
            prop: 'data',
            align: 'center',
          },
          {
            label: '其他',
            prop: 'other',
            align: 'center',
          },
          {
            label: '合计',
            prop: 'cont',
            align: 'center',
            column: 'slot',
            slotName: 'status',
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
  height: 424px;
  background: url('../../assets/home/tabls.png') no-repeat;
  @include backgroundSize;
  .top {
    display: flex;
    justify-content: space-between;
    width: 1120px;
    height: 60px;

    background: url('../../assets/home/title_right_bg.png') no-repeat;
    @include backgroundSize;

    .title_e {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #f1f1f1;
      line-height: 50px;
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
}
</style>
