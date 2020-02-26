<template>
  <div id="register">
    <div class="register_main">
      <div class="reg_body">
        <el-form :model="register" :rules="rules" ref="register">
          <el-form-item label="用户类型" prop="identity">
            <el-radio-group v-model="register.identity">
              <el-radio-button label="沿街商家"></el-radio-button>
              <el-radio-button label="普通用户"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="用户名称" prop="username">
            <el-input v-model="register.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="register.password" type="password" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="passwordCheck">
            <el-input
              v-model="register.passwordCheck"
              type="password"
              show-password
              placeholder="请输入确认密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="邮箱（选填）" prop="email">
            <el-input v-model="register.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="register.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" style="margin-right:10%" @click="submitCheck('register')">提交</el-button>
            <el-button type="primary" @click="toSign" plain>返回</el-button>
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
  name: "register",
  components: {
    PublicFood
  },
  data() {
    var validateIdentity = (rule, value, callback) => {
      if (!value) {
        return new callback("请选择注册用户类型");
      } else {
        callback();
      }
    };
    var validateName = (rule, value, callback) => {
      if (!value) {
        return new callback("请填写用户名");
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (!value) {
        return new callback("请填写密码");
      } else {
        callback();
      }
    };
    var validatePassCheck = (rule, value, callback) => {
      if (!value) {
        return new callback("请填写确认密码");
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if (!value) {
        // return new callback("邮箱选填");
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if (!value) {
        return new callback("请填写手机号");
      } else {
        callback();
      }
    };
    return {
      rules: {
        identity: [{ validator: validateIdentity, trigger: "change" }],
        username: [{ validator: validateName, trigger: "change" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        passwordCheck: [{ validator: validatePassCheck, trigger: "blur" }],
        // email: [{ validator: validateEmail, trigger: "change" }],
        phone: [{ validator: validatePhone, trigger: "change" }]
      },
      register: {
        identity: "",
        username: "",
        password: "",
        passwordCheck: "",
        email: "",
        phone: ""
      }
    };
  },
  methods: {
    //判断整个注册表是否能通过
    submitCheck(formName) {
      this.$refs[formName].validate(val => {
        console.log(val);
        if (val) {
          var data = this.register;
          console.log(data);
          this.axios
            .post(
              "http://" + this.$store.state.path + ":8080/insertUser",
              qs.stringify(data),
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              }
            )
            .then(res => {
              this.$message({
                message: "注册成功",
                type: "success",
                duration: 1500
              });
            });
        } else {
          this.$message({
            message: "请完整填写信息",
            type: "error",
            duration: 1500
          });
          return false;
        }
      });
    },
    toSign() {
      this.$router.replace("/signin");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/register.scss";
</style>