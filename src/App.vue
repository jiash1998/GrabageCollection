<template>
  <div id="app">
    <!-- :xs="24" :sm="24" :md="24" :lg="24" :xl="24" -->
    <div class="head" id="head" :class="{'headFixed':headFix}">
      <div class="logo">
        <router-link to="/main">
          <img src="./assets/img/logo2.png" />
        </router-link>
      </div>
      <div class="head-center">
        <span>CHZU</span>
      </div>
      <div class="head-contral">
        <div class="contralItems">
          <router-link tag="span" to="/main">首页</router-link>
        </div>
        <div class="contralItems">
          <router-link tag="span" to="/Notice">最新公告</router-link>
        </div>
        <div class="contralItems">
          <router-link tag="span" to="/contral">站长控制</router-link>
        </div>
        <div class="contralItems">
          <router-link tag="span" to="/merchartContral">商户控制</router-link>
        </div>
      </div>
      <div class="header_other">
        <div class="prompt">
          <el-badge :is-dot="isDot">
            <i class="el-icon-bell"></i>
          </el-badge>
        </div>
        <div class="contralItems">
          <el-dropdown @command="handleCommand">
            <el-avatar>{{$store.state.username}}</el-avatar>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/signin" tag="div">登录/注册</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/Editor" tag="div">编辑资料</router-link>
              </el-dropdown-item>
              <el-dropdown-item command="exit">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import { MP } from "./map";
export default {
  name: "app",
  data() {
    return {
      headFix: false,
      offsetTop: 0,
      isDot:true
    };
  },
  created() {
    console.log(sessionStorage.getItem("userName"));
    this.$store.commit("viewUsername", sessionStorage.getItem("userName"));
  },
  // async mounted() {
  //   window.addEventListener("scroll", this.listenerScroll);
  //   this.$nextTick(() => {
  //     //获取元素距顶部距离
  //     this.offsetTop = document.querySelector("#head").offsetTop;
  //   });
  // },
  methods: {
    handleCommand(command) {
      if (command == "exit") {
        sessionStorage.setItem("token", "false");
        sessionStorage.removeItem("userName");
        this.$router.push("/signin");
        this.$store.commit("resertUserName");
      }
    },
    listenerScroll() {
      var scroll =
        window.pageYOffset ||
        document.body.scrollTop ||
        document.documentElement.scrollTop;
      this.headFix = scroll > this.offsetTop ? true : false;
    }
  }
};
</script>
<style lang="scss">
@import "./assets/css/app.scss";
</style>
