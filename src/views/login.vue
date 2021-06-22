<template>
  <div class="login">
    <div class="login_from">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        password: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    }
  },
}
</script>

<style>
.login {
  /* width: 192px;
  height: 80px; */
  background: pink;
}
h3 {
  font-size: 80px;
}
</style>
