<template>
  <div id="BucketStatus">
    <div id="map1"></div>
  </div>
</template>
<script type="text/javascript" src="//api.map.baidu.com/api?v=2.0&ak=faARwTpILZCsY9S5GUKe6LL2ILicSoDX"></script>
<script>
import { MP } from "../../map";
export default {
  name: "BucketStatus",
  data() {
    return {
      ak: "faARwTpILZCsY9S5GUKe6LL2ILicSoDX"
    };
  },
  mounted() {
    this.initMap();
    // this.$nextTick(function() {
    //   var _this = this;
    //   MP(_this.ak).then(BMap => {
    //     var map = new BMap.Map("map1"); // 创建Map实例
    //     var point = new BMap.Point(116.404, 39.915); // 创建点坐标
    //     map.centerAndZoom(point, 15);
    //     map.enableScrollWheelZoom();
    //   });
    // });
  },
  methods: {
    initMap() {
    //   MP("faARwTpILZCsY9S5GUKe6LL2ILicSoDX")
    //     .then(() => {
          var map = new BMap.Map("map1"); // 创建Map实例
          var point = new BMap.Point(116.404, 39.915); // 创建点坐标
          map.centerAndZoom(point, 15);
          map.enableScrollWheelZoom();
        // })
        // .catch(err => {
        //   console.log("加载失败");
        // });
    }
  }
};
</script>

<style lang="scss" scoped>
#map {
  height: 100%;
  width: 500px;
}
</style>