<template>
  <div class="uses_box" id="">
    <div class="user_body">
      <div class="top">
        <div class="title_e">
          {{ title }}
        </div>
        <div class="titi_buts">
          <el-button @click="qunfa()">群发消息</el-button>
          <el-button>语音呼叫</el-button>
        </div>
      </div>
      <div class="tab_warp">
        <Table :tableData="tableData" :congigTable="congigTable" @select="selection">
          <!-- satuas  插槽自定义 -->

          <!-- satuas  插槽自定义 -->
          <!-- <template v-slot:xh="slotdata">
            <div class="xh">
              {{ slotdata.data.$index + 1 }}
            </div>
          </template> -->
          <!-- satuas  插槽自定义 -->
          <template v-slot:action="slotdata">
            <!-- {{ slotdata.data.cont }} -->
            <div class="send">
              <el-button @click="send(slotdata.data.$index)">发消息</el-button>
            </div>
          </template>
        </Table>
        <div class="page">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="100"
            layout="total,prev, pager, next, jumper"
            :total="total"
          >
          </el-pagination>
        </div>
      </div>
    </div>

    <div class="btns">
      <img :src="dclose" @click="close()" />
    </div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Table from '@/components/base/Table.vue'
import { propTalbe } from '@/api/subsist'
export default {
  components: {
    Table,
  },
  props: {
    msg: String,
    querArr: Array,
  },
  data() {
    return {
      selectArr: [],
      title: '客户存续列表',
      dclose: require('../../assets/kihu/dclose.png'),
      currentPage: 1,
      limt: 10,
      tableData: [],
      congigTable: {
        checkbox: true,
        xh: true,
        columns: [
          {
            label: '序号',
            width: '40',
            prop: 'jlxh',
            // column: 'slot',
            // slotName: 'xh',
            align: 'center',
          },
          {
            label: '开户机构名称',
            prop: 'org_name',
            align: 'left',
            width: '100',
          },
          {
            label: '客户姓名',
            prop: 'cust_name',
            align: 'center',
          },
          {
            label: '性别',
            prop: 'sex_code_zh',
            width: '40',
            align: 'center',
          },
          {
            label: '年龄',
            prop: 'age',
            width: '40',
            align: 'center',
          },
          {
            label: '民族',
            prop: 'nation_zh',
            width: '80',
            align: 'center',
          },
          {
            label: '所在城市',
            prop: 'city_code_zh',
            align: 'center',
          },
          {
            label: '风险等级',
            prop: 'risk_level_code_zh',
            align: 'center',
          },
          {
            label: '联系电话',
            prop: 'tel',
            align: 'center',
            width: '80',
          },
          {
            label: '发送消息',
            prop: 'send',
            align: 'center',
            column: 'slot',
            slotName: 'action',
          },
        ],
      },
      total: '',
    }
  },
  //方法集合
  methods: {
    close() {
      console.log('关闭')
      this.$emit('close')
    },
    qunfa() {
      if (this.selectArr.length == 0) {
        this.$message({
          message: '请至少选择一条!',
          type: 'error',
        })
      } else {
        this.$message({
          message: '发送成功!',
          type: 'success',
        })
      }
    },
    selection(data) {
      console.log(data)
      this.selectArr = data
    },
    send(data) {
      console.log(data)
      this.$message({
        message: '发送成功!',
        type: 'success',
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
      this.getTable()
    },
    // 弹框
    getTable() {
      let curArr = [
        ['p_start', this.currentPage, 'C', '255'],
        ['p_limit', this.limt, 'C', '255'],
      ]
      let pramArr = this.querArr.concat(curArr)
      console.log(pramArr)
      propTalbe(pramArr).then((res) => {
        if (res.data.ErrorCode == 0) {
          var resObj = JSON.parse(res.data.Data)[0]
          this.tableData = resObj.root
          this.total = resObj.totalProperty

          console.log(resObj, '--------baige ')
        } else {
          console.log(res.data.Data)
        }
      })
    },
  },
  created() {
    this.getTable()
  },
}
</script>
<style lang="scss" scoped>
.uses_box {
  width: 1000px;
  margin: 0 auto;
  .user_body {
    background: url('../../assets/kihu/screnbg.png');
    @include backgroundSize;
    .top {
      height: 60px;
      background: url('../../assets/kihu/usertitle.png') no-repeat;
      @include backgroundSize;
      display: flex;
      justify-content: space-between;
      position: relative;
      .title_e {
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #f1f1f1;
        line-height: 70px;
        padding-left: 60px;
      }
      .titi_buts {
        position: absolute;
        top: 40px;
        right: 20px;
      }
    }
    .tab_warp {
      padding: 0px 30px 30px 40px;

      /deep/ .el-table thead tr th:last-child {
        color: #2ff8ff;
      }
      /deep/ .el-table thead tr th {
        height: 58px;
      }
    }
  }
  .el-button {
    background: none;
    color: rgba(47, 248, 255, 1);
    width: 70px;
    height: 24px;
    border: 1px solid #2ff8ff;
    border-radius: 4px;
    text-align: center;
    padding: 0;
    &:hover {
      background: #2ff8ff;
      color: #fff;
    }
  }
  .btns {
    margin-top: 30px;
    text-align: center;
    img {
      width: 45px;
      height: 45px;
      cursor: pointer;
    }
  }
  /deep/ .el-table thead tr th {
    color: #2ff8ff;
  }
  /deep/ .el-table .tableStyle {
    color: #2ff8ff;
  }
  /deep/ .el-table .tableStyle:last-child {
    color: red;
  }
  /deep/ .el-table thead tr th {
    height: 40px;
  }
  /deep/ .el-checkbox__inner {
    background: transparent;
    border-color: rgba(47, 248, 255, 0.5);
  }
  /deep/ .is-checked .el-checkbox__inner {
    background: rgba(47, 248, 255, 0.5);
    color: #fff;
  }
  .page {
    margin: 10px 0 0 0;
    text-align: right;
    .el-pagination {
      color: $ff05;

      /deep/ .el-pagination__total {
        color: $ff05;
      }
      /deep/ span {
        color: $ff05;
      }

      /deep/ button {
        background: none !important;
        color: $ff05;
        border: 1px solid rgba(2, 51, 177, 1);
      }
      /deep/ .el-input__inner {
        background: none;
        border: 1px solid $ff05;
        color: $ff05;
      }
    }

    /deep/.el-pager li {
      background: none !important;
      border: 1px solid rgba(2, 51, 177, 1);
      border-left: none;
    }
    /deep/.el-pager .el-icon {
      background: none !important;
      color: $ff05;
    }
  }
}
</style>
