<template>
  <div id="son2Manager">
      <!-- <div class="searchDiv"> -->
        <!-- <el-menu default-active="1" mode="horizontal">
          <el-menu-item index="1">
            <router-link to="/merchartContral/Son2Manager/Son2Test" tag="div">未定制</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/merchartContral/Son2Manager/Son2_2Manager" tag="div">已定制</router-link>
          </el-menu-item>
        </el-menu> -->
      <!-- </div> -->
    <router-view />
  </div>
</template>

<script>
import PublicFoot from "../../components/publicFood.vue";
export default {
  name: "son2Manager",
  components: {
    PublicFoot
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son2Manager.scss";
</style>