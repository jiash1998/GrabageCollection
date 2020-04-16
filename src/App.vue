<template>
  <div id="app">
    <!-- :xs="24" :sm="24" :md="24" :lg="24" :xl="24" -->
    <div class="head" id="head" :class="{'headFixed':headFix}">
      <div class="logo">
        <router-link to="/mainI">
          <img src="./assets/img/logo2.png" />
        </router-link>
      </div>
      <div class="head-center">
        <span>ResC</span>
      </div>
      <div class="head-contral">
        <!-- <div class="contralItems">
          <router-link tag="span" to="/mainI">首页</router-link>
        </div> -->
        <div class="contralItems">
          <router-link tag="span" to="/Notice">最新公告</router-link>
        </div>
        <div class="contralItems" v-if="identityApp == '管理员'?true:false">
          <router-link tag="span" to="/ContralNew">管理员中心</router-link>
        </div>
        <div class="contralItems" v-if="identityApp == '沿街商家'?true:false">
          <router-link tag="span" to="/merchartContral">商户中心</router-link>
        </div>
        <div class="contralItems">
          <router-link tag="span" to="/Account">账户中心</router-link>
        </div>
        <!-- <div class="contralItems">
          <router-link tag="span" to="/PaySuccess">测试</router-link>
        </div>-->
      </div>
      <div class="header_other">
        <div class="prompt">
          <el-dropdown>
            <el-badge :is-dot="isDot">
              <i class="el-icon-bell"></i>
            </el-badge>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/Notice" tag="span">新公告</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="contralItems">
          <el-dropdown @command="handleCommand">
            <!-- //三元运算符添加 -->
            <el-avatar :class="isShow === true?'otherBgc':''">{{$store.state.username}}</el-avatar>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/signin" tag="div" v-show="!isShow">登录/注册</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/Account" tag="div">编辑资料</router-link>
              </el-dropdown-item>
              <el-dropdown-item command="exit" v-show="isShow">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="test"></div>
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
      //提示
      isDot: false,
      isShow: false,
      identityApp: ""
    };
  },
  created() {
    this.$store.commit("viewUsername", sessionStorage.getItem("userName"));
    //
  },
  // async mounted() {
  //   window.addEventListener("scroll", this.listenerScroll);
  //   this.$nextTick(() => {
  //     //获取元素距顶部距离
  //     this.offsetTop = document.querySelector("#head").offsetTop;
  //   });
  // },
  mounted() {
    //退出键显示
    this.isShow = JSON.parse(sessionStorage.getItem("isExit"));
    //身份获取
    this.identityApp = sessionStorage.getItem("identity");
    //公告提示
    // if (this.identityApp && this.identityApp != "管理员") {
    //   this.isDot = JSON.parse(localStorage.getItem("isDot"));
    //   console.log(this.isDot);
    // }
    // var removeDot = setTimeout(() => {
    //   localStorage.removeItem("isDot");
    // }, 1000);
  },
  methods: {
    windowScroll() {
      // let scroll =
      //   window.scrollTop ||
      //   document.body.scrollTop ||
      //   document.documentElement.scrollTop;
      // console.log(scroll);
    },
    handleCommand(command) {
      if (command == "exit") {
        //退出
        sessionStorage.setItem("isExit", "false");
        sessionStorage.removeItem("isExit");
        sessionStorage.setItem("token", "false");
        sessionStorage.removeItem("userName");
        sessionStorage.removeItem("identity");
        this.$router.push("/signin");
        // this.$store.commit("resertUserName");
        //路由刷新页面，使得数据搭载
        this.$router.go(0);
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
