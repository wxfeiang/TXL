<template>
  <div class="Ranking" id="Ranking">
    <div class="top">
      <div class="title_e">
        {{ title }}
      </div>
      <div class="show_times">更新时间 ：{{ showTime }}</div>
    </div>
    <div class="tab_warp">
      <Table :tableData="tableData" :congigTable="congigTable"> </Table>
    </div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Table from '@/components/base/Table.vue'
export default {
  name: 'Ranking',
  components: {
    Table,
  },
  data() {
    return {
      title: '排行榜',
      showTime: '2021.05.08 24:00:00',
      tableData: [
        {
          jlxh: '1',
          name: '上海徐汇广元西路营业部',
          num: '20',
          zb: '10%',
        },
        {
          jlxh: '2',
          name: '上海徐汇广元西路营业部',
          num: '20',
          zb: '10%',
        },
        {
          jlxh: '3',
          name: '上海徐汇',
          num: '20',
          zb: '10%',
        },
        {
          jlxh: '4',
          name: '上海徐汇广元西路营业部',
          num: '20',
          zb: '10%',
        },
        {
          jlxh: '5',
          name: '上海徐汇广元西路营业部',
          num: '20',
          zb: '10%',
        },
      ],
      congigTable: {
        checkbox: false,
        columns: [
          {
            id: '1',
            label: '序号',
            prop: 'jlxh',
            width: '30',
          },
          {
            label: '机构名称',
            prop: 'name',
            align: 'left',
          },
          {
            label: '开户层人数',
            prop: 'num',
            align: 'center',
          },
          {
            label: '占比',
            prop: 'zb',
            align: 'center',
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
.Ranking {
  width: 500px;
  height: 370px;
  background: url('../../assets/kihu/rankbg.png');
  @include backgroundSize;
  .top {
    height: 60px;
    background: url('../../assets/kihu/realtime_tit.png') no-repeat;
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

  .tab_warp {
    box-sizing: border-box;
    padding: 0 20px;
  }
}
</style>
