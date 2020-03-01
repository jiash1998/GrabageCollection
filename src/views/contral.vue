<template>
  <div id="contral">
    <div class="contralBody">
      <div class="body_left">
        <!-- background-color="#f7faff" -->
        <!-- active-text-color="#67c23a" -->
        <el-menu default-active="1">
          <el-menu-item index="1">
            <router-link tag="div" to="/contral/Son1ManageNew">
              <i class="el-icon-edit"></i>角色管理
            </router-link>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-truck"></i>回收管理
            </template>
            <el-menu-item index="2-1">
              <router-link tag="div" to="/contral/Son2CarMap">回收路线</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link tag="div" to="/contral/Son2_1Driver">驾驶员位置</router-link>
            </el-menu-item>
            <el-menu-item index="2-3">
              <router-link tag="div" to="/contral/Son2_2DriReg">驾驶员注册</router-link>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="3">
            <span slot="title">
              <router-link tag="div" to="/contral/Son3MerchartMapNew">
                <i class="el-icon-menu"></i>商户分布图
              </router-link>
            </span>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link tag="div" to="/contral/Son4Custom">
              <i class="el-icon-star-off"></i>商铺定制
            </router-link>
          </el-menu-item>
          <el-menu-item index="5">
            <router-link tag="div" to="/contral/Son5Record">
              <i class="el-icon-view"></i>记录跟踪
            </router-link>
          </el-menu-item>
          <el-menu-item index="6">
            <router-link tag="div" to="/contral/Son6Notice">
              <i class="el-icon-document"></i>发布公告
            </router-link>
          </el-menu-item>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-chat-line-round"></i>用户反馈
            </template>
            <el-menu-item index="7-1">
              <router-link tag="div" to="/contral/Son7Feedback">待处理</router-link>
            </el-menu-item>
            <el-menu-item index="7-2">
              <router-link tag="div" to="/contral/Son7_1Replay">已处理</router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="body_right">
        <router-view />
        <public-foot-mini></public-foot-mini>
      </div>
    </div>
  </div>
</template>

<script>
import publicFootMini from "../components/publicFootMini.vue";
export default {
  name: "contral",
  components: {
    publicFootMini
  }
};
</script>

<style lang="scss">
@import "../assets/css/contral.scss";
</style>