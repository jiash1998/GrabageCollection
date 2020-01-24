<template>
  <div id="merchartContral">
    <div class="contralBody">
      <el-menu default-active="1" mode="horizontal">
        <el-menu-item index="1">定制管理</el-menu-item>
        <el-menu-item index="2">反馈信息</el-menu-item>
      </el-menu>
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