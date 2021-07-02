<template>
  <div class="select_warp">
    <div class="select_box">
      <div class="lab_sban">
        <span>筛选条件</span>
        <SclectItem :options="qudao" title="渠道" />
        <SclectItem :options="jigou" title="组织机构" />
        <SclectItem :options="city" title="所在城市" />
        <SclectItem :options="cityjb" title="所在城市级别" />
        <SclectItem :options="age" title="开户年龄" />
        <SclectItem :options="agetime" title="开户时间" />
        <SclectItem :options="xueli" title="学历" />
        <SclectItem :options="sex" title="性别" />
        <SclectItem :options="mingzu" title="民族" />
        <SclectItem :options="dengji" title="风险等级" />
        <!-- <el-select v-model="value" filterable placeholder="请选择" size="mini">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select> -->
      </div>
    </div>
    <div class="select_box">
      <div class="lab_sban">
        <span>当前条件</span>
        <span class="showhtml">全部</span>
      </div>
    </div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import SclectItem from '@/components/base/SclectItem.vue'
export default {
  name: 'Action',
  components: {
    SclectItem,
  },
  data() {
    return {
      slectArr: [],
      qudao: [
        {
          value: '1',
          label: '员工',
        },
        {
          value: '经纪人',
          label: '经纪人',
        },
      ],
      jigou: [
        {
          value: '上海营业部',
          label: '上海营业部',
        },
        {
          value: '兰州营业部',
          label: '兰州营业部',
        },
      ],
      city: [
        {
          value: '上海',
          label: '上海',
        },
        {
          value: '杭州',
          label: '杭州',
        },
      ],
      cityjb: [
        {
          value: '一线城市',
          label: '一线城市',
        },
        {
          value: '二线城市',
          label: '二线城市',
        },
      ],
      age: [
        {
          value: '19',
          label: '19',
        },
        {
          value: '20',
          label: '20',
        },
      ],
      agetime: [
        {
          value: '2009',
          label: '2009',
        },
        {
          value: '2010',
          label: '2010',
        },
      ],
      xueli: [
        {
          value: '本科',
          label: '本科',
        },
        {
          value: '研究生',
          label: '研究生',
        },
      ],
      sex: [
        {
          value: '男',
          label: '男',
        },
        {
          value: '女',
          label: '女',
        },
      ],
      mingzu: [
        {
          value: '汉族',
          label: '汉族',
        },
        {
          value: '满族',
          label: '满族',
        },
      ],
      dengji: [
        {
          value: '一级风险',
          label: '一级风险',
        },
      ],
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      value: '',
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
    span {
      line-height: 40px;
    }
    .showhtml {
      margin-left: 20px;
    }
  }
}
/deep/ .el-select {
  background: none;
}
/deep/ .el-select .el-input__inner {
  background: none;
  border: none;
  color: #2ff8ff;
}
//自定义el-input框的一些自定义样式
/deep/ .selsectbox .el-input--small .el-input__inner {
  background-color: #e6f0ff;
  padding-left: 40px;
  height: 50px;
  border-radius: 5px;
  color: #1890ff;
  font-size: 18px;
  border: 1px solid #1890ff;
  font-weight: 600;
}
//自定义右边图标
.selsectbox /deep/.el-input__inner {
  background: url('../../assets/login/logo.png') no-repeat center center; //引入icon
  background-size: 17px 19px; //这个是图片的大小，在这里不能直接设置width  height,设置宽高其实是select的宽高，图片可能会失真只设置宽度  高度auto也行
  background-position: 12px 14px; //在input中定位置  可以调整自定义icon的左右上下位置
  padding: 0 0 0 26px; //需要设置padding 把placeholder向右移
  box-sizing: border-box;
  font-size: 14px;
}
</style>
