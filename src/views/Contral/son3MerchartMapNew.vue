<template>
  <div id="son3MerchartMapNew">
    <div class="body">
      <div class="map" :id="mapId"></div>
      <div>
        <!-- <el-button type="primary" @click="initMap(118.319736,32.299206)">隐藏区域覆盖</el-button>
        <el-button type="primary" @click="initMap(118.323509,32.282115)">显示区域覆盖</el-button>-->
      </div>
    </div>
  </div>
</template>

<script>
import loadBMap from "../../map";
import getAllCustomApi from "../../api/getRequest.js";
export default {
  name: "son3MerchartMapNew",
  data() {
    return {
      mapId: "BMap-" + parseInt(Date.now() + Math.random()),
      address: [],
      //设置覆盖物
      polygon1: {},
      polygon2: {},
      x: 118.323509,
      y: 32.282115
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      loadBMap("faARwTpILZCsY9S5GUKe6LL2ILicSoDX")
        .then(() => {
          // 百度地图API功能
          var map = new BMap.Map(this.mapId);
          //118.321478 32.288485
          // var point = new BMap.Point(118.323509, 32.282115);
          var point = new BMap.Point(118.321981, 32.286653);
          map.centerAndZoom(point, 15);
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
          //地址解析
          var myGeo = new BMap.Geocoder();
          // this.axios
          //   .get("http://" + this.$store.state.path + ":8080/getAllCustom")
          getAllCustomApi
            .getAllCustom()
            .then(res => {
              //获取全部定制相关信息，并以对象形式赋值
              for (const i of res.data) {
                this.address.push({
                  name: i.name,
                  address: i.address + i.addressDetail,
                  header: i.header,
                  phone: i.phone
                });
              }
              //循环添加店铺
              // console.log(this.address);
              for (const i of this.address) {
                myGeo.getPoint(
                  i.address,
                  function(point) {
                    if (point) {
                      console.log(point);
                      // map.centerAndZoom(point, 18);
                      var marker = new BMap.Marker(point);
                      //添加标注
                      map.addOverlay(marker);
                      var opts = {
                        width: 200,
                        height: 230,
                        title:
                          "<h5 style='line-height:1px;'>" + i.name + "</h5>"
                      };
                      var infoWindow = new BMap.InfoWindow(
                        "<div style='font-size:.85em;'><p>地址：</p>" +
                          i.address +
                          "<p>负责人：" +
                          i.header +
                          "</p>" +
                          "<p>电话：" +
                          i.phone +
                          "</p></div>",
                        opts
                      );
                      // 创建信息窗口对象
                      marker.addEventListener("click", function() {
                        map.openInfoWindow(infoWindow, point); //开启信息窗口
                      });
                    } else {
                      alert("您选择地址没有解析到结果!");
                    }
                  },
                  "滁州市"
                );
              }
            })
            .catch(err => {
              console.log(err);
            });
          // 将地址解析结果显示在地图上,并调整地图视野
          console.log(this.address);
        })
        .catch(err => {
          console.log("地图加载失败");
        });
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/css/son3MerchartMapNew.scss";
</style>