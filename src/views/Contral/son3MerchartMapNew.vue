<template>
  <div id="son3MerchartMapNew">
    <div class="body">
      <div class="map" :id="mapId"></div>
      <div>
        <el-button type="primary" @click="polygon.hide();">隐藏区域覆盖</el-button>
        <el-button type="primary" @click="polygon.show();">显示区域覆盖</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import loadBMap from "../../map";
export default {
  name: "son3MerchartMapNew",
  data() {
    return {
      mapId: "BMap-" + parseInt(Date.now() + Math.random()),
      address: [],
      //设置覆盖物
      polygon: {},
      circle: {}
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
          var point = new BMap.Point(118.323509, 32.282115);
          map.centerAndZoom(point, 18);
          map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
          //添加多边形覆盖物
          this.polygon = new BMap.Polygon(
            [
              new BMap.Point(118.32455, 32.28246),
              new BMap.Point(118.323763, 32.282665),
              new BMap.Point(118.323622, 32.282344),
              new BMap.Point(118.324242, 32.282074),
              new BMap.Point(118.324271, 32.282284)
            ],
            { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }
          ); //创建多边形
          map.addOverlay(this.polygon); //增加多边形
          // 创建圆 118.324086 32.2823695
          var pointC = new BMap.Point(118.324086, 32.2823695);
          this.circle = new BMap.Circle(pointC, 100, {
            strokeColor: "blue",
            strokeWeight: 2,
            strokeOpacity: 0.5
          });
          map.addOverlay(this.circle);
          //地址解析
          var myGeo = new BMap.Geocoder();
          this.axios
            .get("http://" + this.$store.state.path + ":8080/getAllCustom")
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

                      map.centerAndZoom(point, 18);
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