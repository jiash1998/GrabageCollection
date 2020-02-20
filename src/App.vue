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
          <router-link tag="span" to="/contral">站长中心</router-link>
        </div>
        <div class="contralItems">
          <router-link tag="span" to="/merchartContral">商户中心</router-link>
        </div>
        <div class="contralItems">
          <router-link tag="span" to="/Account">账户中心</router-link>
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
      isDot: true,
      isShow: false
    };
  },
  created() {
    this.$store.commit("viewUsername", sessionStorage.getItem("userName"));
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
    console.log(this.isShow);
    //滚动条
    // window.addEventListener("scroll", this.windowScroll);
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
        this.$router.push("/signin");
        this.$store.commit("resertUserName");
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
