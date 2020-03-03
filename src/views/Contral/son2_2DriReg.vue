<template>
  <div id="son2_2DriReg">
    <div class="body">
      <h4>驾驶员注册</h4>
      <div class="formDiv">
        <div class="introduce">
          <h5>须知</h5>
          <p>1.驾驶员身份由管理员进行注册</p>
          <p>2.工号由驾驶员姓名首字母缩写和入职年月日组成</p>
          <p>3.确保手机号能及时联系驾驶员</p>
        </div>
        <el-form
          :model="driver"
          ref="driver"
          label-position="left"
          label-width="100px"
          size="small"
        >
          <el-form-item label="工号">
            <el-input v-model="driver.username" placeholder="请输入工号"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="driver.password" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="负责路段">
            <el-radio-group v-model="driver.routeFlag">
              <el-radio-button label="苏宁广场-滁州学院"></el-radio-button>
              <el-radio-button label="滁州学院-99广场"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="邮箱（选填）">
            <el-input v-model="driver.email" placeholder="请输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="driver.phone" placeholder="请输入联系方式"></el-input>
          </el-form-item>
          <el-form-item label>
            <el-button type="primary" plain @click="regDriver">提交</el-button>
            <el-button type="success">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import addDriverApi from "../../api/postRequest.js";
export default {
  name: "son2_2DriReg",
  data() {
    return {
      driver: {
        username: "",
        password: "",
        email: "",
        phone: "",
        routeFlag: "",
        identity: "驾驶员"
      }
    };
  },
  mounted() {},
  methods: {
    regDriver() {
      var data = this.driver;
      console.log(data);

      addDriverApi
        .addDriver(data)
        .then(res => {
          console.log(res.data);
          this.$message({
            message: "注册成功",
            type: "success",
            duration: 1500
          });
        })
        .catch(err => {
          console.log(err);
          this.$message({
            message: "注册失败",
            type: "error",
            duration: 1500
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son2_2DriReg.scss";
</style>