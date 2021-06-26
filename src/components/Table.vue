<template>
  <div class="dytable" id="">
    <el-table :data="tableData" style="width: 100%" :header-cell-class-name="tableStyle">
      <!-- 多选 -->
      <el-table-column type="selection" width="55" v-if="congigTable.checkbox"> </el-table-column>
      <!-- 文本 -->
      <template v-for="(item, index) in congigTable.columns">
        <!-- 判断是否插槽 -->
        <el-table-column
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :align="item.align"
          v-if="item.column == 'slot'"
        >
          <template slot-scope="scope">
            <slot :name="item.slotName" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <!-- 文本 -->
        <el-table-column
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :align="item.align"
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
    tableStyle({ row, column, rowIndex, columnIndex }) {
      console.log(row, column, rowIndex, columnIndex)
      return 'tableStyle'
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
    background-color: transparent;
  }
  /* 表格内背景颜色 */
  /deep/ .el-table th,
  /deep/ .el-table tr,
  /deep/ .el-table td {
    background-color: transparent;
  }
  /deep/ .el-table td,
  .el-table th.is-leaf {
    border-color: #052159;
  }

  /deep/ .el-table .tableStyle {
    // background: red !important;
    border-color: #052159;
    color: $ff05;
    font-weight: normal;
  }

  /deep/ .el-table__body tr:hover > td {
    color: $ff05;
    background-color: rgba(2, 51, 177, 0.1) !important;
  }
  /deep/ .el-table__body tr.current-row > td {
    color: $ff05;
    background-color: rgba(2, 51, 177, 0.1) !important;
  }
  /deep/ .el-table::before {
    height: 0px;
  }
}
</style>
