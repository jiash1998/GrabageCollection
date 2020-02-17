<template>
  <div id="merchartContral">
    <div class="contralHead">
      <el-menu default-active="1" mode="horizontal">
        <el-menu-item index="1">
          <router-link to="/merchartContral/Son1Custom" tag="div">定制服务</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/merchartContral/Son2Manager" tag="div">定制管理</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/merchartContral/Son3Feedback" tag="div">反馈信息</router-link>
        </el-menu-item>
      </el-menu>
    </div>
    <div>
      <router-view />  
    </div>
  </div>
</template>

<script>
export default {
  name: "merchartContral"
};
</script>

<style lang="scss" scoped>
@import "../assets/css/merchartContral.scss";
</style>