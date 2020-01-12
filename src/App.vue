<template>
  <div id="app">
    <!-- :xs="24" :sm="24" :md="24" :lg="24" :xl="24" -->
    <div class="head" id="head" :class="{'headFixed':headFix}">
      <div class="logo">
        <router-link to="/main">
          <img src="./assets/img/recycle.png" />
        </router-link>
      </div>
      <div class="head-center">
        <span>滁州市环保清洁公司</span>
      </div>
      <div class="head-contral">
        <div>
          <router-link to="/main">首页</router-link>
        </div>
        <div>
          <router-link to="/contral">控制台</router-link>
        </div>
        <div>
          <router-link to="/contral">控制台</router-link>
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
