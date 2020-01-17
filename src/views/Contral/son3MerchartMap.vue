<template>
  <div id="son3MerchartMap.vue">
    <baidu-map class="bm-view" ak="faARwTpILZCsY9S5GUKe6LL2ILicSoDX" center="滁州市">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    </baidu-map>
  </div>
</template>

<script>
//引入百度地图
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
// import BmNavigation from 'vue-baidu-map/components/others'
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