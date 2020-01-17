<template>
  <div id="signin">
    <div class="signin_body">
      <div class="signin_body_main">
        <!-- 对齐方式label-position -->
        <el-form
          :model="signForm"
          :rules="rules"
          ref="signForm"
          :label-position="labelposition"
          label-width="20%"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="signForm.username" style="width:80%;" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="signForm.password"
              show-password
              style="width:80%;"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label>
            <el-button
              v-model="signForm.submit"
              style="margin-left:5%;"
              type="success"
              plain
              @click="submitForm('signForm')"
            >登录</el-button>
            <el-button type="success">
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
import qs from "querystring";
import PublicFood from "../components/publicFood.vue";
export default {
  name: "signin",
  components: {
    PublicFood
  },
  data() {
    var validateUsername = (rule, value, callback) => {
      if (!value) {
        return new callback("请填写正确的用户名");
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (!value) {
        return new callback("请填写正确的密码");
      } else {
        callback();
      }
    };
    return {
      rules: {
        username: [{ validator: validateUsername, trigger: "change" }],
        password: [{ validator: validatePassword, trigger: "change" }]
      },
      labelposition: "left",
      signForm: {
        username: "",
        password: "",
        submit: ""
      }
    };
  },
  methods: {
    submitForm(formname) {
      this.$refs[formname].validate(val => {
        if (val) {
          var data = this.signForm;
          console.log(data);
          this.axios
            .post(
              "http://" + this.$store.state.path + ":8080/checkLogin",
              qs.stringify(data),
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              }
            )
            .then(res => {
              alert("post success");
            });
        } else {
          alert("error");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/signin.scss";
</style>