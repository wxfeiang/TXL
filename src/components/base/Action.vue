<template>
  <div class="select_warp">
    <div class="select_box">
      <div class="lab_sban">
        <span>筛选条件</span>
        <SclectItem :options="qudao" :index="0" title="渠道" @select="select" />
        <SclectItem :options="jigou" :index="1" title="组织机构" @select="select" />
        <SclectItem :options="city" :index="2" flog="1" title="所在城市" @select="select" />
        <SclectItem :options="cityjb" :index="3" title="所在城市级别" @select="select" />
        <SclectItem :options="age" :index="4" title="开户年龄" @select="select" />
        <SclectItem :options="agetime" :index="5" title="开户时间" @select="select" />
        <SclectItem :options="xueli" :index="6" title="学历" @select="select" />
        <SclectItem :options="sex" :index="7" title="性别" @select="select" />
        <SclectItem :options="mingzu" :index="8" title="民族" @select="select" />
        <SclectItem :options="dengji" :index="9" title="风险等级" @select="select" />
      </div>
    </div>
    <div class="select_box">
      <div class="lab_sban">
        <span class="lable"> 当前条件</span>
        <template v-if="sclescurrArr.length == 0">
          <span class="showhtml">全部 </span>
        </template>

        <template v-else>
          <span class="showhtml" v-for="(item, index) in sclescurrArr" :key="index"
            >{{ item }}
            <i class="el-icon-circle-close" v-if="item" @click="delecurr(index)"></i>
          </span>
        </template>

        <span class="showhtml rest" v-if="removeEmptyArrayEle(sclescurrArr).length > 5" @click="rest()">重置</span>
      </div>
    </div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import SclectItem from '@/components/base/SclectItem.vue'

import { ldziselect, ldziselectJG, ldziselectCY } from '@/api/home'
export default {
  name: 'Action',
  components: {
    SclectItem,
  },
  data() {
    return {
      slectArr: [],
      qudao: [],
      jigou: [],
      city: [],
      cityjb: [],
      age: [],
      agetime: [],
      xueli: [],
      sex: [],
      mingzu: [],
      dengji: [],
      selectArr: [],
      sclescurrArr: [],
    }
  },
  created: function() {
    this.getaction()
    this.qurselectData()

    this.getagetime()
  },
  //方法集合
  methods: {
    qurselectData() {
      for (var i = 0; i < 10; i++) {
        this.selectArr.push([])
      }
    },
    removeEmptyArrayEle(arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == undefined) {
          arr.splice(i, 1)
          i = i - 1 // i - 1 ,因为空元素在数组下标 2 位置，删除空之后，后面的元素要向前补位，
          // 这样才能真正去掉空元素,觉得这句可以删掉的连续为空试试，然后思考其中逻辑
        }
      }
      return arr
    },
    //  删除当前选择
    delecurr(index) {
      console.log('当前下标', index, this.selectArr)

      this.selectArr[index] = {
        label: '',
        value: '',
      }
      this.sclescurrArr.splice(index, 1) //  删除一个
      // this.sclescurrArr[selctData.index] = selctData.label
      console.log(this.selectArr)
      //  传递到父组件
      this.$emit('sleData', this.selectArr)
      this.$forceUpdate()
    },
    // 重置
    rest() {
      this.selectArr.forEach((item) => {
        item = {
          label: '',
          value: '',
        }
      })

      this.sclescurrArr = [] //  删除一个
      console.log(this.selectArr)
      //  传递到父组件
      this.$emit('sleData', this.selectArr)
      this.$forceUpdate()
    },

    select(selctData) {
      console.log(selctData, '选中 val nane') // 选中 val nane
      this.selectArr[selctData.index] = {
        label: selctData.label,
        value: selctData.value,
      }
      this.sclescurrArr[selctData.index] = selctData.label
      console.log(this.sclescurrArr, 'sclescurrArr')
      //  传递到父组件
      this.$emit('sleData', this.selectArr)
      this.$forceUpdate()
    },
    //数据格式化
    dataAC(arr) {
      let nArr = []
      arr.forEach((item) => {
        nArr.push({
          value: item.subitem_code,
          label: item.subitem_name,
        })
      })
      return nArr
    },
    dataMonge(arr) {
      let nArr = []
      arr.forEach((item) => {
        nArr.push({
          value: item.org_code,
          label: item.org_name,
        })
      })
      return nArr
    },
    datacity(arr) {
      let shenfen = []

      // 先处理身份
      arr.forEach((item) => {
        if (item.region_code.substring(2, 4) == '00') {
          shenfen.push({
            value: item.region_code,
            label: item.region_name,
            children: [],
          })
        }
      })
      // 省份对应 市
      //  if(item.region_code.substring(0, 2) ==   ){

      //   }
      arr.forEach((item) => {
        shenfen.forEach((ery) => {
          // && item.region_code.substring(2, 4) != ery.value.substring(2, 4)
          if (item.region_code.substring(0, 2) == ery.value.substring(0, 2)) {
            ery.children.push({
              value: item.region_code,
              label: item.region_name,
            })
          }
        })
      })
      console.log(shenfen, '----------shenfen')

      return shenfen
    },

    //  开户时间
    getagetime() {
      let arr = []
      //  获取当年
      var date = new Date()

      date.getFullYear() //获取完整的年份(4位)

      for (var i = date.getFullYear(); i > 1900; i--) {
        arr.push({
          value: i,
          label: i,
        })
      }
      this.agetime = arr
    },

    getaction() {
      // 渠道
      ldziselect('99990002').then((res) => {
        if (res.data.ErrorCode == 0) {
          var obj = JSON.parse(res.data.Data)
          this.qudao = this.dataAC(obj[0].root)
        } else {
          this.$message({
            message: res.data.Data,
            type: 'error',
          })
        }
      })
      //  城市等级
      ldziselect('99990033').then((res) => {
        if (res.data.ErrorCode == 0) {
          var obj = JSON.parse(res.data.Data)

          this.cityjb = this.dataAC(obj[0].root)
        } else {
          this.$message({
            message: res.data.Data,
            type: 'error',
          })
        }
      })
      // 组织机构
      ldziselectJG().then((res) => {
        if (res.data.ErrorCode == 0) {
          var obj = JSON.parse(res.data.Data)
          this.jigou = this.dataMonge(obj[0].root)
        } else {
          this.$message({
            message: res.data.Data,
            type: 'error',
          })
        }
      })
      //所在城市
      ldziselectCY().then((res) => {
        if (res.data.ErrorCode == 0) {
          var obj = JSON.parse(res.data.Data)
          console.log('城市联动fanhizhi', obj)
          this.city = this.datacity(obj[0].root)
        } else {
          this.$message({
            message: res.data.Data,
            type: 'error',
          })
        }
      })
      //年龄区间
      ldziselect('99990036').then((res) => {
        if (res.data.ErrorCode == 0) {
          var obj = JSON.parse(res.data.Data)
          this.age = this.dataAC(obj[0].root)
        } else {
          this.$message({
            message: res.data.Data,
            type: 'error',
          })
        }
      })
      //学历
      ldziselect('99990004').then((res) => {
        if (res.data.ErrorCode == 0) {
          var obj = JSON.parse(res.data.Data)
          this.xueli = this.dataAC(obj[0].root)
        } else {
          this.$message({
            message: res.data.Data,
            type: 'error',
          })
        }
      })
      //性别
      ldziselect('99990006').then((res) => {
        if (res.data.ErrorCode == 0) {
          var obj = JSON.parse(res.data.Data)
          this.sex = this.dataAC(obj[0].root)
        } else {
          this.$message({
            message: res.data.Data,
            type: 'error',
          })
        }
      })
      //民族
      ldziselect('99990034').then((res) => {
        if (res.data.ErrorCode == 0) {
          var obj = JSON.parse(res.data.Data)
          this.mingzu = this.dataAC(obj[0].root)
        } else {
          this.$message({
            message: res.data.Data,
            type: 'error',
          })
        }
      })
      // 等级
      ldziselect('99990031').then((res) => {
        if (res.data.ErrorCode == 0) {
          var obj = JSON.parse(res.data.Data)
          this.dengji = this.dataAC(obj[0].root)
        } else {
          this.$message({
            message: res.data.Data,
            type: 'error',
          })
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
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
    .lable {
      margin-right: 20px;
    }
    span {
      line-height: 40px;
    }
    .showhtml {
      margin-right: 20px;
      i {
        color: #2ff8ff;
        cursor: pointer;
      }
    }
    .rest {
      cursor: pointer;
    }
  }
}
/deep/ .el-select {
  background: none;
}
.select_item {
  max-width: 100px;
}
</style>
