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
          <template v-slot:xh="slotdata">
            <div class="xh">
              {{ slotdata.data.$index + 1 }}
            </div>
          </template>
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
            :total="1000"
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
import Table from '@/components/Table.vue'
export default {
  components: {
    Table,
  },
  data() {
    return {
      selectArr: [],
      title: '客户存续列表',
      dclose: require('../../assets/kihu/dclose.png'),
      currentPage: 5,
      tableData: [
        {
          jlxh: '1',
          jgmc: '华龙证券华龙证券华龙证券华龙证券',
          name: '李伟诚',
          sex: '男',
          age: '20',
          mz: '汉族',
          city: '上海',
          fengx: '三级风险',
          tel: '178000999',
          send: 'sss',
        },
        {
          jlxh: '2',
          jgmc: '华龙证券',
          name: '李伟诚',
          sex: '男',
          age: '20',
          mz: '汉族',
          city: '上海',
          fengx: '三级风险',
          tel: '178000999',
          send: 'sss',
        },
        {
          jlxh: '2',
          jgmc: '华龙证券',
          name: '李伟诚',
          sex: '男',
          age: '20',
          mz: '汉族',
          city: '上海',
          fengx: '三级风险',
          tel: '178000999',
          send: 'sss',
        },
        {
          jlxh: '2',
          jgmc: '华龙证券',
          name: '李伟诚',
          sex: '男',
          age: '20',
          mz: '汉族',
          city: '上海',
          fengx: '三级风险',
          tel: '178000999',
          send: 'sss',
        },
        {
          jlxh: '2',
          jgmc: '华龙证券',
          name: '李伟诚',
          sex: '男',
          age: '20',
          mz: '汉族',
          city: '上海',
          fengx: '三级风险',
          tel: '178000999',
          send: 'sss',
        },
        {
          jlxh: '2',
          jgmc: '华龙证券',
          name: '李伟诚',
          sex: '男',
          age: '20',
          mz: '汉族',
          city: '上海',
          fengx: '三级风险',
          tel: '178000999',
          send: 'sss',
        },
        {
          jlxh: '2',
          jgmc: '华龙证券',
          name: '李伟诚',
          sex: '男',
          age: '20',
          mz: '汉族',
          city: '上海',
          fengx: '三级风险',
          tel: '178000999',
          send: 'sss',
        },
        {
          jlxh: '2',
          jgmc: '华龙证券',
          name: '李伟诚',
          sex: '男',
          age: '20',
          mz: '汉族',
          city: '上海',
          fengx: '三级风险',
          tel: '178000999',
          send: 'sss',
        },
        {
          jlxh: '2',
          jgmc: '华龙证券',
          name: '李伟诚',
          sex: '男',
          age: '20',
          mz: '汉族',
          city: '上海',
          fengx: '三级风险',
          tel: '178000999',
          send: 'sss',
        },
        {
          jlxh: '2',
          jgmc: '华龙证券',
          name: '李伟诚',
          sex: '男',
          age: '20',
          mz: '汉族',
          city: '上海',
          fengx: '三级风险',
          tel: '178000999',
          send: 'sss',
        },
      ],
      congigTable: {
        checkbox: true,
        xh: true,
        columns: [
          {
            label: '序号',
            width: '40',
            column: 'slot',
            slotName: 'xh',
            align: 'center',
          },
          {
            label: '开户机构名称',
            prop: 'jgmc',
            align: 'left',
            width: '100',
          },
          {
            label: '客户姓名',
            prop: 'name',
            align: 'center',
          },
          {
            label: '性别',
            prop: 'sex',
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
            label: '名族',
            prop: 'mz',
            width: '80',
            align: 'center',
          },
          {
            label: '所在城市',
            prop: 'city',
            align: 'center',
          },
          {
            label: '风险等级',
            prop: 'fengx',
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
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
