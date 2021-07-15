<template>
  <div class="dytable" id="">
    <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-class-name="tableStyle"
      :cell-style="cellStyle"
      ref="tables"
      @selection-change="selection"
    >
      <!-- 多选 -->
      <el-table-column type="selection" min-width="30" v-if="congigTable.checkbox" align="center"> </el-table-column>

      <!-- 文本 -->
      <template v-for="(item, index) in congigTable.columns">
        <!-- 判断是否插槽 -->
        <el-table-column
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :min-width="item.width ? item.width : '60'"
          :align="item.align"
          v-if="item.column == 'slot'"
        >
          <template slot-scope="scope">
            <slot :name="item.slotName" :data="scope"></slot>
          </template>
        </el-table-column>
        <!-- 文本 -->
        <el-table-column
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :min-width="item.width ? item.width : '60'"
          :align="item.align"
          :show-overflow-tooltip="true"
          v-else
        >
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'Table',
  props: {
    tableData: Array,
    congigTable: Object,
  },
  data() {
    return {}
  },
  //方法集合
  methods: {
    tableStyle() {
      //{ row, column, rowIndex, columnIndex }
      // console.log(row, column, rowIndex, columnIndex)
      return 'tableStyle'
    },
    selection(selection) {
      this.$emit('select', selection)
    },
    cellStyle(row, column, rowIndex, columnIndex) {
      //根据报警级别显示颜色
      // console.log(row);
      // console.log(row.column);
      // if(row.column.label==="告警级别"&& row.row.alarmLevel==="紧急告警"){
      //   return 'color:red'
      // }else if(row.column.label==="告警级别"&& row.row.alarmLevel==="一般告警" ){
      //   return 'color:yellow'
      // }
      return 'color:#333'
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
}
</script>
<style lang="scss" scoped>
.dytable {
  width: 100%;
  /*最外层透明*/
  /deep/ .el-table,
  /deep/ .el-table__expanded-cell {
  }
  /* 表格内背景颜色 */
  /deep/ .el-table th,
  /deep/ .el-table tr,
  /deep/ .el-table td {
  }
  /deep/ .el-table td,
  .el-table th.is-leaf {
    // height: 22px;
    // padding: 2px 0;
  }

  /deep/ .el-table .tableStyle {
    // background: red !important;
    // border-color: #052159;
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #333333;
  }

  /deep/ .el-table__body tr:hover > td {
    // color: $ff05;
    // background-color: rgba(2, 51, 177, 0.1) !important;
  }
  /deep/ .el-table__body tr.current-row > td {
    // color: $ff05;
    // background-color: rgba(2, 51, 177, 0.1) !important;
  }
  /deep/ .el-table::before {
    height: 0px;
  }
  /deep/.el-table--scrollable-y ::-webkit-scrollbar {
    display: none;
  }
}
</style>
