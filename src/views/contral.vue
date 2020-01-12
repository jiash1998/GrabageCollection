<template>
  <div id="contral">
    <div class="contralBody">
      <div class="body_left">
        <el-menu
          default-active="2"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>管理角色</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">垃圾回收车辆</el-menu-item>
              <el-menu-item index="1-2">车辆驾驶员</el-menu-item>
              <el-menu-item index="1-3">普通用户</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">地图</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">路径图</el-menu-item>
              <el-menu-item index="2-2">商户图</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">发布公告</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">查看桶状态</span>
          </el-menu-item>
           <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">用户反馈</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="body_right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contral"
};
</script>

<style lang="scss">
@import "../assets/css/contral.scss";
</style>