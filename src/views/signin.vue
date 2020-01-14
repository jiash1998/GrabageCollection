<template>
  <div id="signin">
    <div class="signin_body">
      <div class="signin_body_main">
        <!-- 对齐方式label-position -->
        <el-form :model="signForm" ref="signForm" :label-position="labelposition" label-width="20%">
          <el-form-item label>
            <el-radio-group v-model="signForm.radio" style="padding:10px 0 0 15%;">
              <el-radio-button label="商户"></el-radio-button>
              <el-radio-button label="用户"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="signForm.name" style="width:80%;" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              v-model="signForm.password"
              show-password
              style="width:80%;"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label>
            <el-button v-model="signForm.submit" style="margin-left:15%;" type="success" plain>登录</el-button>
            <el-button v-model="signForm.register" type="success">
              <router-link to="/register" tag="span">注册</router-link>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <public-food></public-food>
  </div>
</template>

<script>
import PublicFood from "../components/publicFood.vue";
export default {
  name: "signin",
  components: {
    PublicFood
  },
  data() {
    return {
      labelposition: "",
      signForm: {
        radio: "",
        name: "",
        password: "",
        submit: "",
        register: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/signin.scss";
</style>