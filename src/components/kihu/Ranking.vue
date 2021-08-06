<template>
  <div class="Ranking" id="Ranking">
    <div class="top">
      <div class="title_e">
        {{ title }}
      </div>
      <div class="show_times">更新时间 ：{{ showTime }}</div>
    </div>
    <div class="tab_warp">
      <Table :tableData="tableData" :congigTable="congigTable">
        <template v-slot:zb="slotdata">
          <div class="zb">{{ slotdata.data.row.layer_rate }} %</div>
        </template>
      </Table>
    </div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Table from '@/components/base/Table.vue'
import { layerRank } from '@/api/openaccount'
export default {
  name: 'Ranking',
  components: {
    Table,
  },
  props: {
    msg: String,
    querArr: Array,
  },
  data() {
    return {
      title: '排行榜',
      showTime: '',
      tableData: [],
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
            prop: 'org_name',
            align: 'left',
          },
          {
            label: '开户层人数',
            prop: 'layer_count',
            align: 'center',
          },
          {
            label: '占比',
            prop: 'layer_rate',
            align: 'center',
            column: 'slot',
            slotName: 'zb',
          },
        ],
      },
    }
  },
  //方法集合
  methods: {
    // 请求排行榜
    getData() {
      layerRank(this.querArr).then((res) => {
        if (res.data.ErrorCode == 0) {
          var obj = JSON.parse(res.data.Data)[0].root
          console.log(JSON.parse(res.data.Data), 'JSON.parse(res.data.Data)')
          this.tableData = obj.length > 5 ? obj.splice(0, 5) : obj
          this.showTime = obj.lenth > 0 ? obj[0].update_time : '未知'
        }
      })
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getData()
  },
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
