<template>
  <div id="son3MerchartMap">
    <!-- zoom必须设置 -->
    <div class="mapDiv">
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
      </baidu-map>
      <div class="pointContent">
        店名，地址，定制缩略表，联系人，手机，经营范围
      </div>
    </div>
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
        zoom: 17,
        show: true,
        merchartPoint1: [
          //苏宁到滁州学院
          { lng: 118.323617, lat: 32.282342, content: "都可茶饮" },
          { lng: 118.323757, lat: 32.282674, content: "华莱士汉堡店" },
          { lng: 118.324318, lat: 32.282672, content: "流连忘返骨汤麻辣烫" },
          { lng: 118.324556, lat: 32.282474, content: "西北拉面" },
          { lng: 118.324273, lat: 32.282279, content: "527烧烤" },
          { lng: 118.323563, lat: 32.281852, content: "苏果超市（滁院店）"},
          { lng: 118.323581, lat: 32.281703, content: "西西里猫咖.清吧" },
          { lng: 118.325313, lat: 32.29024, content: "滁州南苑快捷宾馆" },
          { lng: 118.324594, lat: 32.29108, content: "滁香园燕子私房菜" },
          { lng: 118.323894, lat: 32.292896, content: "战地网咖" },
          { lng: 118.31942, lat: 32.297825, content: "可心涮网烤肉" },
          { lng: 118.317767, lat: 32.30103, content: "诗情花艺" },
          { lng: 118.31633, lat: 32.3028, content: "丰泽园土菜馆" },
          { lng: 118.315827, lat: 32.305592, content: "三里亭人家" },
          { lng: 118.316438, lat: 32.30621, content: "南木网咖" },
          //滁州学院到99
          { lng: 118.32304, lat: 32.280778, content: "晓宇花店" },
          { lng: 118.323444, lat: 32.27887, content: "德顺楼饭庄" },
          { lng: 118.321989, lat: 32.278023, content: "华昕小厨" },
          { lng: 118.322591, lat: 32.277488, content: "名城酒店" },
          { lng: 118.321863, lat: 32.277061, content: "我家厨房" },
          { lng: 118.321297, lat: 32.275313, content: "滁州园丁阁大酒店" },
          { lng: 118.320579, lat: 32.275619, content: "百年面道" },
          { lng: 118.320246, lat: 32.274977, content: "天地网咖" },
          { lng: 118.319923, lat: 32.274207, content: "羊府.木炭羊肉" },
          { lng: 118.319707, lat: 32.273772, content: "夜宴烧烤" },
          { lng: 118.319438, lat: 32.271573, content: "荣锦盛饰装饰" },
          { lng: 118.315503, lat: 32.26383, content: "富达集团" },
          { lng: 118.316527, lat: 32.261097, content: "RAIN酒吧" },
          { lng: 118.316527, lat: 32.260624, content: "滁州金鹏广场酒店" }
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
@import "../../assets/css/son3MerchartMap.scss";
</style>