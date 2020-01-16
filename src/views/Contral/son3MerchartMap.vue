<template>
  <div id="son3MerchartMap.vue">
    <baidu-map class="bm-view" ak="faARwTpILZCsY9S5GUKe6LL2ILicSoDX" center="滁州"></baidu-map>
  </div>
</template>

<script>
//引入charts
// let echarts = require("echarts/lib/echarts");
// require("echarts/lib/chart/pie");
// require("echarts/lib/component/tooltip");
//引入百度地图
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
export default {
  name: "son3MerchartMap",
  components: {
    BaiduMap
  }
};
</script>

<style lang="scss" scoped>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>