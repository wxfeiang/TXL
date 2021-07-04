<template>
  <div class="select_warp">
    <div class="select_box">
      <div class="lab_sban">
        <span>筛选条件</span>
        <SclectItem :options="qudao" :index="0" title="渠道" @select="select" />
        <SclectItem :options="jigou" :index="1" title="组织机构" @select="select" />
        <SclectItem :options="city" :index="2" title="所在城市" @select="select" />
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
        <span class="showhtml" v-if="selectArr.length == 0">全部</span>
        <span class="showhtml" v-else v-for="item in selectArr" :key="item">{{ item }}</span>
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
          value: '1111',
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
      selectArr: [],
    }
  },
  //方法集合
  methods: {
    select(selctData) {
      console.log(selctData)

      this.selectArr[selctData.index] = selctData.label

      console.log(this.selectArr)
      this.$forceUpdate()
    },
  },
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
    .lable {
      margin-right: 20px;
    }
    span {
      line-height: 40px;
    }
    .showhtml {
      margin-right: 20px;
      // min-width: 60px;
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
