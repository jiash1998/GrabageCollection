<template>
  <div id="contralNew">
    <div class="body">
      <div class="top">
        <el-menu :default-active="setIndex" @select="getIndex" mode="horizontal">
          <el-menu-item index="1">
            <router-link tag="div" to="/ContralNew/Son1ManageNew">
              <i class="el-icon-edit"></i>角色管理
            </router-link>
          </el-menu-item>
          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-chat-line-round"></i>用户反馈
            </template>
            <el-menu-item index="8-1">
              <router-link tag="div" to="/ContralNew/Son7Feedback">待处理</router-link>
            </el-menu-item>
            <el-menu-item index="8-2">
              <router-link tag="div" to="/ContralNew/Son7_1Replay">已处理</router-link>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="7">
            <router-link tag="div" to="/ContralNew/Son6Notice">
              <i class="el-icon-document"></i>发布公告
            </router-link>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-truck"></i>回收管理
            </template>
            <el-menu-item index="2-1">
              <router-link tag="div" to="/ContralNew/Son2CarMap">回收路线</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link tag="div" to="/ContralNew/Son2_1Driver">回收员位置</router-link>
            </el-menu-item>
            <el-menu-item index="2-3">
              <router-link tag="div" to="/ContralNew/Son2_2DriReg">回收员注册</router-link>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="3">
            <span slot="title">
              <router-link tag="div" to="/ContralNew/Son3MerchartMapNew">
                <i class="el-icon-menu"></i>商户分布图
              </router-link>
            </span>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-office-building"></i>店铺管理
            </template>
            <el-menu-item index="4-1">
              <router-link tag="div" to="/ContralNew/Son4Custom">商铺信息</router-link>
            </el-menu-item>
            <el-menu-item index="4-2">
              <router-link tag="div" to="/ContralNew/Son9Enter">资源回收录入</router-link>
            </el-menu-item>
            <el-menu-item index="4-3">
              <router-link tag="div" to="/ContralNew/Son10Detail">资源回收详情</router-link>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="5">
            <router-link tag="div" to="/ContralNew/Son8Echarts">
              <i class="el-icon-data-line"></i>资源分析及回收
            </router-link>
          </el-menu-item>
          <el-menu-item index="6">
            <router-link tag="div" to="/ContralNew/Son5Record">
              <i class="el-icon-view"></i>记录跟踪
            </router-link>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="bottom">
        <router-view />
        <public-foot-mini></public-foot-mini>
      </div>
    </div>
  </div>
</template>

<script>
import publicFootMini from "../components/publicFootMini.vue";

export default {
  name: "contralNew",
  data() {
    return {
      setIndex: sessionStorage.getItem("indexAdmin")
    };
  },
  components: {
    publicFootMini
  },
  methods: {
    getIndex(key) {
      sessionStorage.setItem("indexAdmin", key);
    }
  },
  destroyed() {
    sessionStorage.removeItem("indexAdmin");
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/contralNew.scss";
</style>