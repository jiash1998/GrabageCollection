<template>
  <div id="notice">
    <div class="notice_main">
      <div class="notice_tabber">
        <el-menu default-active="0" @select="NoticeType" mode="horizontal">
          <el-menu-item index="0">全部公告</el-menu-item>
          <el-menu-item index="1">紧急公告</el-menu-item>
          <el-menu-item index="2">商户公告</el-menu-item>
          <el-menu-item index="3" v-if="noticeSelf">个人通知</el-menu-item>
        </el-menu>
      </div>
      <div class="notice_content">
        <div class="scroll">
          <div class="left" ref="leftDiv">
            <div v-if="index != '3'">
              <div class="content" v-for="(item,index) in noticeList" :key="index">
                <p id="p1">{{item.title}}&nbsp;-&nbsp;{{item.type}}</p>
                <p id="p2">{{item.content}}</p>
                <el-tag type="warning" v-if="item.type =='商户通知'">{{item.inputvalue}}</el-tag>
                <el-tag type="danger" v-else-if="item.type =='紧急通知'">{{item.inputvalue}}</el-tag>
                <el-tag type="success" v-else>{{item.inputvalue}}</el-tag>
                <span>&nbsp;&nbsp;{{item.time}}</span>
              </div>
            </div>
            <div v-else>
              <!-- 没消息时展示 -->
              <!-- <div class="conNull" v-if="!selfNull">
                <div class="contain">
                  <img src="../assets/img/info.png" />
                  <p>暂无消息</p>
                </div>
              </div>-->
              <div v-if="!selfNull">
                <public-info-null></public-info-null>
              </div>
              <div class="content" v-for="(item,index) in noticeList" :key="index" v-else>
                <p id="p1">{{item.title}}</p>
                <p id="p2">{{item.content}}</p>
                <el-tag type="primary">个人通知</el-tag>
              </div>
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
import PublicInfoNull from "../components/publicInfoNull.vue";
import getByPNoticeUsernameApi from "../api/postRequest.js";
//api
import getNoticeApi from "../api/getRequest.js";
export default {
  name: "notice",
  components: {
    PublicFood,
    PublicInfoNull
  },
  data() {
    return {
      //4 个公告类型
      noticeList: [],
      allList: [],
      emergencyList: [],
      storeList: [],
      selfList: [],
      //是否展示个人通知
      noticeSelf: false,
      //无信息时，展示图片
      emergencyNull: false,
      storeNull: false,
      selfNull: false,
      userName: "",
      index: "",
      type: 0
    };
  },
  mounted() {
    this.getInfo();
    if (
      sessionStorage.getItem("userName") &&
      sessionStorage.getItem("identity") != "管理员"
    ) {
      this.noticeSelf = true;
    }
    this.userName = sessionStorage.getItem("userName");
    this.getSelfNotice();
  },
  methods: {
    //点击展示不同类型
    NoticeType(key, keypath) {
      // console.log(key);
      this.index = key;
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
        case "3":
          this.noticeList = this.selfList;
          localStorage.removeItem("isDot");
          break;
        // default:
        //   this.noticeList = this.allList;
        //   break;
      }
      console.log(this.noticeList);
    },
    //判断信息是否为空
    infoIsNull(arr, bool) {
      if (Array.isArray(arr)) {
        if (arr.length !== 0) {
          return !bool;
        }
      }
      return bool;
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
              // console.log("不处理");
            }
          }
          this.emergencyNull = this.infoIsNull(
            this.emergencyList,
            this.emergencyNull
          );
          this.storeNull = this.infoIsNull(this.storeList, this.storeNull);
          // console.log(this.emergencyList);
          // console.log(this.storeList);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取个人通知
    getSelfNotice() {
      var data = { username: this.userName };
      // console.log(data);

      getByPNoticeUsernameApi
        .getByPNoticeUsername(data)
        .then(res => {
          this.selfNull = this.infoIsNull(res.data, this.selfNull);
          this.selfList = res.data;
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