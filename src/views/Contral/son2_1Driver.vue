<template>
  <div id="son2_1Driver">
    <div class="body">
      <div class="map" :id="mapId"></div>
      <div class="search">
        <el-form :model="driver" :inline="true" size="samll" label-position="left" label-width="100px">
          <el-form-item label="驾驶员工号">
            <el-input v-model="driver.username" placeholder="请输入驾驶员工号"></el-input>
          </el-form-item>
          <el-form-item label>
            <el-button type="primary" plain>查询</el-button>
            <el-button type="success">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import loadBMap from "../../map";

export default {
  name: "son2_1Driver",
  data() {
    return {
      mapId: "BMap-" + parseInt(Date.now() + Math.random()),
      polygon1:{},
      polygon2:{},
      driver:{
        username:""
      }
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
          var point = new BMap.Point(118.321981, 32.286653);
          map.centerAndZoom(point, 14);
          map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
           //添加多边形覆盖物
          this.polygon1 = new BMap.Polygon(
            [
              new BMap.Point(118.321137, 32.284165),
              new BMap.Point(118.327784, 32.28328),
              new BMap.Point(118.323868, 32.271496),
              new BMap.Point(118.320957, 32.260017),
              new BMap.Point(118.311795, 32.260047),
              new BMap.Point(118.315819, 32.272626)
            ],
            { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }
          );
          map.addOverlay(this.polygon1);
          this.polygon2 = new BMap.Polygon(
            [
              new BMap.Point(118.328323, 32.29143),
              new BMap.Point(118.322898, 32.289599),
              new BMap.Point(118.317616, 32.297016),
              new BMap.Point(118.313987, 32.307758),
              new BMap.Point(118.319197, 32.309376),
              new BMap.Point(118.322323, 32.298969),
            ],
            { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 }
          );
          map.addOverlay(this.polygon2);
        })
        .catch(err => {
          console.log("地图加载失败");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son2_1Driver.scss";
</style>