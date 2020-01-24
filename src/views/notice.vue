<template>
  <div id="notice">
    <div class="notice_main">
      <div class="notice_tabber">
        <el-menu default-active="1" mode="horizontal">
          <el-menu-item index="1">全部公告</el-menu-item>
          <el-menu-item index="2">紧急公告</el-menu-item>
          <el-menu-item index="3">商户公告</el-menu-item>
          <el-menu-item index="4">用户公告</el-menu-item>
        </el-menu>
      </div>
      <div class="notice_content">
        <!-- <el-button type="primary" @click="getNotice">测试</el-button> -->
        <div class="left">
          <div class="content" v-for="(item,index) in noticeList" :key="index">
            <p id="p1">{{item.title}}&nbsp;-&nbsp;{{item.type}}</p>
            <p id="p2">{{item.content}}</p>
            <el-tag type="success">{{item.inputvalue}}</el-tag>
            <span>123</span>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </div>
    <public-food></public-food>
  </div>
</template>

<script>
import PublicFood from "../components/publicFood.vue";
export default {
  name: "notice",
  components: {
    PublicFood
  },
  data() {
    return {
      noticeList: []
    };
  },
  mounted() {
    this.getNotice();
  },
  methods: {
    getNotice() {
      this.axios
        .get("http://" + this.$store.state.path + ":8080/getAllNotice")
        .then(res => {
          var data = res.data;
          this.noticeList = res.data;
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/notice.scss";
</style>