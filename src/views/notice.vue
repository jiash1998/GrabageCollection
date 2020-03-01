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
        <div class="scroll">
          <div class="left" ref="leftDiv">
            <div class="content" v-for="(item,index) in noticeList" :key="index">
              <p id="p1">{{item.title}}&nbsp;-&nbsp;{{item.type}}</p>
              <p id="p2">{{item.content}}</p>
              <el-tag type="success">{{item.inputvalue}}</el-tag>
              <span>&nbsp;&nbsp;{{item.time}}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <h4>Easy Garbage Sort</h4>
          <p>让日常垃圾分类更简单</p>
          <img src="../assets/img/easyGS2.jpg"/>
        </div>
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
    //滚动条
    // window.addEventListener("scroll", this.windowScroll, true);
    // this.$refs.leftDiv.removeEventListener("scroll", this.DivScroll,true);
  },
  methods: {
    // windowScroll() {
    //   let scroll =
    //     window.scrollTop ||
    //     document.body.scrollTop ||
    //     document.documentElement.scrollTop;
    //   console.log(scroll + "win");
    //   if (scroll >= 120) {
    //     console.log("到了");
    //     this.DivScroll();
    //   }
    // },
    // DivScroll() {
    //   let DivScroll = this.$refs.leftDiv.scrollHeight;
    //   console.log(DivScroll + "div");
    // },
    getNotice() {
      this.axios
        // .get("http://" + this.$store.state.path + ":8080/getAllNotice")
        .get("/getAllNotice")
        .then(res => {
          //排序
          res.data.sort((a,b)=> {
            return Date.parse(b.time) - Date.parse(a.time);
          });
          this.noticeList = res.data;
          console.log(res.data);
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