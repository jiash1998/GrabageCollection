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
        <div class="contralItems">
          <router-link tag="span" to="/Custom">定制服务</router-link>
        </div>
        <div class="contralItems">
          <el-dropdown>
            <el-avatar>{{$store.state.username}}</el-avatar>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/signin" tag="span">登录/注册</router-link>
              </el-dropdown-item>
              <el-dropdown-item>编辑资料</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      headFix: false,
      offsetTop: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.listenerScroll);
    this.$nextTick(() => {
      //获取元素距顶部距离
      this.offsetTop = document.querySelector("#head").offsetTop;
    });
  },
  methods: {
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
