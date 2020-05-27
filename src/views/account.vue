<template>
  <div id="account">
    <div class="body">
      <!-- <div class="left"></div> -->
      <div class="top">
        <p>基础资料</p>
      </div>
      <div class="right">
        <div class="info" :class="{displayCha:isCha}">
          <p>
            <span>用户名：</span>
            {{userArr.username}}
            <span
              class="editor"
              :class="{displayCha:isCha}"
              @click="changeDis"
            >编辑</span>
          </p>
          <p>
            <span>类型：</span>
            {{userArr.identity}}
          </p>
          <p>
            <span>密码：</span>
            {{userArr.password}}
          </p>
          <p>
            <span>邮箱：</span>
            {{userArr.email}}
          </p>
          <p>
            <span>手机号：</span>
            {{userArr.phone}}
          </p>
        </div>
        <div class="form" :class="{displayCha:!isCha}">
          <el-form :model="user" ref="user" label-width="120px" label-position="left" size="small">
            <el-form-item label="用户名">
              <el-input v-model="user.username"></el-input>
            </el-form-item>
            <el-form-item label="类型">
              <el-radio-group v-model="user.identity" disabled>
                <el-radio-button label="沿街商家"></el-radio-button>
                <el-radio-button label="普通用户"></el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="user.password" type="password" show-password></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="user.email"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input v-model="user.phone"></el-input>
            </el-form-item>
            <el-form-item label>
              <el-button type="primary" @click="changeUser(vm)" plain>保存</el-button>
              <el-button type="success" @click="changeDis">关闭</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <public-foot-mini></public-foot-mini>
  </div>
</template>

<script>
import publicFootMini from "../components/publicFootMini.vue";
import qs from "querystring";
import getUserByUsernameApi from "../api/postRequest.js";
import updateUserByNameApi from "../api/postRequest.js";
import { debounce } from "../util/debounce.js";

export default {
  name: "account",
  components: {
    publicFootMini
  },
  data() {
    return {
      user: {
        username: "",
        password: "",
        email: "",
        phone: "",
        identity: ""
      },
      vm: this,
      userArr: {},
      //状态改变
      isCha: false
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      var data = { username: sessionStorage.getItem("userName") };
      getUserByUsernameApi
        .getUserByUsername(data)
        .then(res => {
          // console.log(res.data);
          this.user = res.data;
          this.userArr = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    changeUser: debounce(
      vm => {
        var data = vm.user;
        updateUserByNameApi
          .updateUserByName(data)
          .then(res => {
            console.log(res.data);
            vm.$message({
              message: "保存成功",
              type: "success",
              duration: 1500
            });
          })
          .catch(err => {
            vm.$message({
              message: "保存失败",
              type: "error",
              duration: 1500
            });
            console.log(err);
          });
      },
      3000,
      true
    ),
    changeDis() {
      this.isCha = !this.isCha;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/account.scss";
</style>