<template>
  <div id="contral">
    <div class="contralBody">
      <div class="body_left">
        <el-menu default-active="1" background-color="#f7faff" active-text-color="#67c23a">
          <el-menu-item index="1">
            <i class="el-icon-edit"></i>
            <span slot="title"><router-link tag="span" to="/contral/Son1Manage">管理角色</router-link></span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-truck"></i>
            <span slot="title">车辆路径图</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">商户分布图</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">桶分布及状态</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-view"></i>
            <span slot="title">记录跟踪</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-document"></i>
            <span slot="title">发布公告</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-chat-line-round"></i>
            <span slot="title">用户反馈</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="body_right">
        <router-view/>
      </div>
    </div>
    <public-food></public-food>
  </div>
</template>

<script>
import PublicFood from "../components/publicFood.vue";
export default {
  name: "contral",
  components: {
    PublicFood
  }
};
</script>

<style lang="scss">
@import "../assets/css/contral.scss";
</style>