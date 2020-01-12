<template>
  <div id="app">
    <el-row>
      <!-- :xs="24" :sm="24" :md="24" :lg="24" :xl="24" -->
      <el-col :span="2">
        <div class="logo">
          <img src="./assets/img/recycle.png" />
        </div>
      </el-col>
      <el-col :span="16">
        <div class="head-center"></div>
      </el-col>
      <el-col :span="6">
        <div class="head-contral"></div>
      </el-col>
    </el-row>
    <!-- <router-link to="/main">home</router-link> -->
    <!-- <router-view /> -->
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  cursor: pointer;

  .logo {
    width: 100%;
    height: 80px;
    background-color: aquamarine;
    // flex实现垂直水平居中
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      height: 50px;
      width: 50px;
    }
  }

  .head-center {
    background-color: pink;
    width: 100%;
    height: 51px;
  }

  .head-contral {
    // background-color: #F7FAFF;
    background-color: bisque;
    width: 100%;
    height: 51px;
  }
}
</style>
