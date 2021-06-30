<template>
  <div class="select_warp">
    <div class="select_box">
      <div class="lab_sban">
        <span>筛选条件</span>
        <SclectItem :options="qudao" />
        <SclectItem :options="jigou" />
        <SclectItem :options="city" />
        <SclectItem :options="cityjb" />
        <SclectItem :options="age" />
        <SclectItem :options="agetime" />
        <SclectItem :options="xueli" />
        <SclectItem :options="sex" />
        <SclectItem :options="mingzu" />
        <SclectItem :options="dengji" />
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
      qudao: [
        {
          value: '渠道',
          label: '渠道',
        },
        {
          value: '渠道2',
          label: '渠道2',
        },
      ],
      jigou: [
        {
          value: '组织机构',
          label: '组织机构',
        },
        {
          value: '组织机构2',
          label: '组织机构2',
        },
      ],
      city: [
        {
          value: '所在城市',
          label: '所在城市',
        },
        {
          value: '所在城市2',
          label: '所在城市2',
        },
      ],
      cityjb: [
        {
          value: '所在城市级别',
          label: '所在城市级别',
        },
        {
          value: '所在城市级别2',
          label: '所在城市级别2',
        },
      ],
      age: [
        {
          value: '开户年龄',
          label: '开户年龄',
        },
        {
          value: '开户年龄',
          label: '开户年龄',
        },
      ],
      agetime: [
        {
          value: '开户时间',
          label: '开户时间',
        },
        {
          value: '开户时间',
          label: '开户时间',
        },
      ],
      xueli: [
        {
          value: '学历',
          label: '学历',
        },
      ],
      sex: [
        {
          value: '性别',
          label: '性别',
        },
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
          value: '民族',
          label: '民族',
        },
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
          value: '风险测评等级',
          label: '风险测评等级',
        },
        {
          value: '一级风险',
          label: '一级风险',
        },
      ],
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
</style>
