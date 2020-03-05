<template>
  <div id="son2_1Driver">
    <div class="body">
      <div class="map" :id="mapId"></div>
      <div class="search">
        <el-form
          :model="driver"
          :inline="true"
          ref="driver"
          size="small"
          label-position="left"
          label-width="100px"
          :rules="rules1"
        >
          <el-form-item label="驾驶员工号" prop="username">
            <el-input v-model="driver.username" placeholder="输入工号查询位置/通知"></el-input>
          </el-form-item>
          <el-form-item label>
            <el-button type="primary" plain @click="getLocation('driver')">查询</el-button>
            <el-button type="success" @click="openDialog('driver')">发消息</el-button>
            <el-button type="success" native-type="reset">清空</el-button>
            <!-- //弹框 -->
            <el-dialog title="发送通知" :visible.sync="showDialog">
              <el-form :model="notice" size="small">
                <el-form-item label="标题">
                  <el-input v-model="notice.title" placeholder="输入通知标题"></el-input>
                </el-form-item>
                <el-form-item label="内容">
                  <el-input type="textarea" v-model="notice.content" placeholder="输入通知内容"></el-input>
                </el-form-item>
                <el-form-item label>
                  <el-button type="primary" plain @click="postNotice">发送</el-button>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="showDialog = false">取 消</el-button>
                <el-button type="primary" @click="showDialog = false">确 定</el-button>
              </div>
            </el-dialog>
          </el-form-item>
        </el-form>
        <div class="showInfo">
          <el-table :data="NoticeData">
            <el-table-column label="发送方" prop="sender"></el-table-column>
            <el-table-column label="接收方" prop="receiver"></el-table-column>
            <el-table-column label="发送标题" prop="title"></el-table-column>
            <el-table-column label="发送内容" prop="content"></el-table-column>
            <el-table-column label="发送时间" prop="time"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loadBMap from "../../map";
import getLatandlogByDriverApi from "@/api/postRequest.js";
import sendDriverNoticeToDriverApi from "@/api/postRequest.js";
import getDriverNoticeByReceiveTodayApi from "@/api/postRequest.js";
import getDriverNoticeBySendTodayApi from "@/api/postRequest.js";

export default {
  name: "son2_1Driver",
  data() {
    var validateUsername = (rule, value, callback) => {
      if (!value) {
        return new callback("请填写驾驶员工号");
      } else {
        callback();
      }
    };
    return {
      mapId: "BMap-" + parseInt(Date.now() + Math.random()),
      polygon1: {},
      polygon2: {},
      marker: {},
      driver: {
        username: ""
      },
      showDialog: false,
      //发送通知给驾驶员
      notice: {
        title: "",
        content: "",
        receiver: ""
      },
      //rules
      rules1: {
        username: [{ validator: validateUsername, trigger: "change" }]
      },
      //渲染数组通知
      NoticeData: [],
      //存放经纬度
      location: []
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    //给驾驶员发送通知
    openDialog(formName) {
      this.$refs[formName].validate(val => {
        if (val) {
          this.showDialog = true;
          this.notice.receiver = this.driver.username;
        } else {
          return false;
        }
      });
    },
    postNotice() {
      var data = this.notice;
      sendDriverNoticeToDriverApi
        .sendDriverNoticeToDriver(data)
        .then(res => {
          console.log(res.data);
          if (res.data == "ok") {
            this.$message({
              message: "发送成功",
              type: "success",
              duration: 1500
            });
          } else {
            this.$message({
              message: "发送失败",
              type: "error",
              duration: 1800
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取位置和通知
    getLocation(formName) {
      this.$refs[formName].validate(val => {
        if (val) {
          //拿驾驶员接收的通知 位置
          var data = { driver: this.driver.username };
          var data1 = { receiver: this.driver.username };
          var data2 = { sender: this.driver.username };

          getDriverNoticeByReceiveTodayApi
            .getDriverNoticeByReceiveToday(data1)
            .then(res => {
              for (const i of res.data) {
                this.NoticeData.push(i);
              }
              // this.NoticeData.push(res.data);
            })
            .catch(err => {
              console.log(err);
            });
          getDriverNoticeBySendTodayApi
            .getDriverNoticeBySendToday(data2)
            .then(res => {
              for (const i of res.data) {
                this.NoticeData.push(i);
              }
              // this.NoticeData.push(res.data);
            })
            .catch(err => {
              console.log(err);
            });
          getLatandlogByDriverApi
            .getLatandlogByDriver(data)
            .then(res => {
              for (const i of res.data.latandlogList) {
                // this.location.push(i);
                this.location.push({ lng: i.lon, lat: i.lat });
              }
              // this.location = res.data.latandlogList;
              console.log(this.location);
              this.initMap();
            })
            .catch(err => {
              console.log(err);
            });
          // setTimeout(() => {
          //   console.log(this.NoticeData);
          // }, 2000);
        } else {
          return false;
        }
      });
    },
    test() {
      var test = [];
      for (const i of this.location) {
        this.test.push({ lng: i.lon, lat: i, lat });
      }
    },
    initMap() {
      loadBMap("faARwTpILZCsY9S5GUKe6LL2ILicSoDX")
        .then(() => {
          // 百度地图API功能
          var map = new BMap.Map(this.mapId);
          var point = new BMap.Point(118.321981, 32.286653);
          map.centerAndZoom(point, 13);
          map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
          //添加多边形覆盖物
          this.polygon1 = new BMap.Polygon(
            [
              new BMap.Point(118.321137, 32.284165),
              new BMap.Point(118.327784, 32.28328),
              new BMap.Point(118.323868, 32.271496),
              new BMap.Point(118.320957, 32.260017),
              new BMap.Point(118.311795, 32.260047),
              new BMap.Point(118.315819, 32.272626)
            ],
            { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }
          );
          map.addOverlay(this.polygon1);
          this.polygon2 = new BMap.Polygon(
            [
              new BMap.Point(118.328323, 32.29143),
              new BMap.Point(118.322898, 32.289599),
              new BMap.Point(118.317616, 32.297016),
              new BMap.Point(118.313987, 32.307758),
              new BMap.Point(118.319197, 32.309376),
              new BMap.Point(118.322323, 32.298969)
            ],
            { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }
          );
          map.addOverlay(this.polygon2);
          //添加驾驶员位置
          if (this.location.length > 0) {
            for (const i of this.location) {
              this.marker = new BMap.Marker(new BMap.Point(i.lng, i.lat));
              map.addOverlay(this.marker);
            }
          } else {
            console.log("没位置");
          }
        })
        .catch(err => {
          console.log("地图加载失败");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son2_1Driver.scss";
</style>