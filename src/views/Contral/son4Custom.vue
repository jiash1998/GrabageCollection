<template>
  <div class="map-area" :id="mapId"></div>
</template>
<script>
import loadBMap from "../../map";
export default {
  data() {
    return {
      mapId: "BMap-" + parseInt(Date.now() + Math.random()),
      myMap: null
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
          //地址解析
          var myGeo = new BMap.Geocoder();
          // 将地址解析结果显示在地图上,并调整地图视野
          myGeo.getPoint(
            "滁州市南谯区丰乐大道1497-20号么么时光花样小海鲜",
            function(point) {
              if (point) {
                map.centerAndZoom(point, 18);
                map.addOverlay(new BMap.Marker(point));
              } else {
                alert("您选择地址没有解析到结果!");
              }
            },
            "滁州市"
          );
        })
        .catch(err => {
          console.log("地图加载失败");
        });
    }
  }
};
</script>
<style scoped>
.map-area {
  width: 100%;
  height: 500px;
}
</style>