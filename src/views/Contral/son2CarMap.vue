<template>
  <div id="son2CarMap">
    <div class="body">
      <!-- zoom必须设置 -->
      <baidu-map class="bm-view" :ak="map.ak" :center="map.center" :zoom="map.zoom">
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <bm-driving
          :start="$store.state.mapStart"
          :end="$store.state.mapEnd"
          :auto-viewport="true"
          :panel="false"
        ></bm-driving>
      </baidu-map>
      <div class="operate">
        <el-button type="primary" @click="switchPath1">苏宁广场--滁州学院线</el-button>
        <el-button type="primary" @click="switchPath2">滁州学院--金鹏99广场线</el-button>
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
  name: "son2CarMap",
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
        // zoom: 16
      },
      path: [
        {
          start: "滁州市琅琊区南谯北路苏宁广场",
          end: "安徽省滁州市丰乐大道1528号"
        },
        {
          start: "安徽省滁州市丰乐大道1528号",
          end: "金鹏99广场"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    switchPath1() {
      var data = this.path[0];
      console.log(data);
      this.$store.commit("modifyPathStart", data);
      this.$store.commit("modifyPathEnd", data);
    },
    switchPath2() {
      var data = this.path[1];
      console.log(data);
      this.$store.commit("modifyPathStart", data);
      this.$store.commit("modifyPathEnd", data);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son2CarMap.scss";
</style>