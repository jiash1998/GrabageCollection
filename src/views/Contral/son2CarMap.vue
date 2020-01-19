<template>
  <div id="carMap">
    <div class="carMap_content">
      <!-- zoom必须设置 -->
      <baidu-map class="bm-view" :ak="map.ak" :center="map.center" :zoom="map.zoom">
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <bm-driving :start="map.start" :end="map.end" :auto-viewport="true" :panel="false"></bm-driving>
      </baidu-map>
      <div>
        <el-button type="primary" @click="switchPath">切换路线</el-button>
      </div>
    </div>
  </div>
</template>

<script>
//引入百度地图
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
//路径规划
import BmDriving from "vue-baidu-map/components/search/Driving";
//比例尺
import BmNavigation from "vue-baidu-map/components/controls/Navigation";
var map;
export default {
  name: "carMap",
  components: {
    BaiduMap,
    BmNavigation,
    BmDriving
  },
  data() {
    return {
      map: {
        ak: "faARwTpILZCsY9S5GUKe6LL2ILicSoDX",
        center: {
          lng: 118.323509,
          lat: 32.282115
        },
        zoom: 20,
        start: "滁州市琅琊区南谯北路苏宁广场",
        end: "金鹏99广场"
        //  start: "滁州市琅琊区南谯北路苏宁广场",
        // end: "滁州学院"
      },
      path: [
        {
          start: "滁州市琅琊区南谯北路苏宁广场",
          end: "滁州学院"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    switchPath() {
      
    }
  }
};
</script>

<style lang="scss" scoped>
.carMap_content {
  width: 100%;
  height: 600px;
  overflow: auto;
  .bm-view {
    width: 100%;
    height: 400px;
    // margin-left: 3%;
  }
}
</style>