<template>
  <div id="notice">
    <div class="notice_main">
      <div class="notice_tabber">
        <el-menu default-active="0" @select="NoticeType" mode="horizontal">
          <el-menu-item index="0">全部公告</el-menu-item>
          <el-menu-item index="1">紧急公告</el-menu-item>
          <el-menu-item index="2">商户公告</el-menu-item>
        </el-menu>
      </div>

      <div class="notice_content">
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
          <img src="../assets/img/easyGS2.jpg" />
        </div>
      </div>
    </div>
    <public-food></public-food>
  </div>
</template>

<script>
import PublicFood from "../components/publicFood.vue";
//api
import getNoticeApi from "../api/getRequest.js";
export default {
  name: "notice",
  components: {
    PublicFood
  },
  data() {
    return {
      //三个公告类型
      noticeList: [],
      allList: [],
      emergencyList: [],
      storeList: [],
      type: 0
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    //点击展示不同类型
    NoticeType(key, keypath) {
      // console.log(key);
      switch (key) {
        case "0":
          this.noticeList = this.allList;
          break;
        case "1":
          this.noticeList = this.emergencyList;
          break;
        case "2":
          this.noticeList = this.storeList;
          break;
        default:
          this.noticeList = this.allList;
          break;
      }
      console.log(this.noticeList);
    },
    getInfo() {
      var _this = this;
      getNoticeApi
        .getNotice()
        .then(res => {
          //排序
          res.data.sort((a, b) => {
            return Date.parse(b.time) - Date.parse(a.time);
          });
          this.noticeList = res.data;
          this.allList = res.data;
          for (const i of res.data) {
            if (i.type == "紧急通知") {
              this.emergencyList.push(i);
            } else if (i.type == "商户通知") {
              this.storeList.push(i);
            } else {
              console.log("不处理");
            }
          }
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