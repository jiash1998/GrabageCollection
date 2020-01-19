<template>
  <div id="son3MerchartMap">
    <!-- zoom必须设置 -->
    <baidu-map
      class="bm-view"
      ak="faARwTpILZCsY9S5GUKe6LL2ILicSoDX"
      :center="map.center"
      :zoom="map.zoom"
    >
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <div v-for="(item,index) in map.merchartPoint1" :key="index">
        <bm-marker
          :position="{lng:item.lng,lat:item.lat}"
          :dragging="false"
          @click="infoWindowOpen(item)"
        ></bm-marker>
      </div>
      <!-- <bm-local-search :keyword="addressKeyword" :auto-viewport="true" style="display: none"></bm-local-search> -->
    </baidu-map>
  </div>
</template>

<script>
//引入百度地图
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
//比例尺
import BmNavigation from "vue-baidu-map/components/controls/Navigation";
import BmLocalSearch from "vue-baidu-map/components/search/LocalSearch.vue";
import BmMarker from "vue-baidu-map/components/overlays/Marker";
import BmInfoWindow from "vue-baidu-map/components/overlays/InfoWindow";
import BmMarkerClusterer from "vue-baidu-map/components/extra/MarkerClusterer";
export default {
  name: "son3MerchartMap",
  components: {
    BaiduMap,
    BmNavigation,
    BmLocalSearch,
    BmMarker,
    BmInfoWindow,
    BmMarkerClusterer
  },
  data() {
    return {
      map: {
        center: {
          lng: 118.323509,
          lat: 32.282115
        },
        zoom: 20,
        show: true,
        merchartPoint1: [
          { lng: 118.323617, lat: 32.282342, content: "北京市" },
          { lng: 118.323757, lat: 32.282674, content: "滁州市" }
        ]
      }
    };
  },
  methods: {
    infoWindowClose() {
      this.map.show = false;
    },
    infoWindowOpen(item) {
      // this.map.show = true;
      console.log(item);
    }
  }
};
</script>

<style lang="scss" scoped>
.bm-view {
  width: 100%;
  height: 400px;
  margin-left: 3%;
}
</style>