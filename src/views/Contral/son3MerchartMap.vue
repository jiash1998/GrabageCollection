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
      <bm-marker :position="map.merchartPoint1" :dragging="false" @click="infoWindowOpen">
        <bm-info-window :show="map.show" @close="infoWindowClose" @open="infoWindowOpen">我爱北京天安门</bm-info-window>
      </bm-marker>
      <bm-marker :position="map.merchartPoint2" :dragging="false" @click="infoWindowOpen">
        <bm-info-window :show="map.show" @close="infoWindowClose" @open="infoWindowOpen">我爱北京天安门</bm-info-window>
      </bm-marker>
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
export default {
  name: "son3MerchartMap",
  components: {
    BaiduMap,
    BmNavigation,
    BmLocalSearch,
    BmMarker,
    BmInfoWindow
  },
  data() {
    return {
      map: {
        center: {
          lng: 118.323509,
          lat: 32.282115
        },
        zoom: 20,
        show: false,
        merchartPoint1: { lng: 118.323617, lat: 32.282342 },
        merchartPoint2: { lng: 118.323757, lat: 32.282674 }
      }
    };
  },
  methods: {
    infoWindowClose() {
      this.map.show = false;
    },
    infoWindowOpen() {
      this.map.show = true;
      console.log(this.map.show);
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