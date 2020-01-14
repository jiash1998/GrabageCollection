<template>
  <div id="signin">
    <div class="signin_body">
      <div class="signin_body_main">
        <el-form :model="signForm" ref="signForm">
          <el-form-item label>
            <el-radio-group v-model="signForm.radio" style="margin-left:30%;">
              <el-radio-button label="商户"></el-radio-button>
              <el-radio-button label="用户"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="姓名" style="margin-left:15%;">
              <el-input v-model="signForm.name" style="width:60%;" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="密码">
              <el-input v-model="signForm.password" show-password style="width:60%;" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="">
              <el-button v-model="signForm.submit" type="success" plain>登录</el-button>
              <el-button v-model="signForm.register" type="success">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "signin",
  data() {
      return {
          signForm:{
              radio:'',
              name:'',
              password:'',
              submit:'',
              register:''
          }
      }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/signin.scss";
</style>