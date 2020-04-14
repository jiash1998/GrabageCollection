<template>
  <div id="son8Echarts">
    <div class="firstItem">
      <p>常见店铺垃圾分析</p>
      <el-card shadow="hover">
        <div id="mycharts" ref="mycharts"></div>
      </el-card>
    </div>
    <!-- <div class="secondItem"></div> -->
  </div>
</template>

<script>
import echarts from "../../util/echarts";
import garbageJson from "../../util/garbage.json";
import getAllCustomApi from "../../api/getRequest.js";

export default {
  name: "son8Echarts",
  data() {
    return {};
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      var mycharts = echarts.init(this.$refs.mycharts);
      mycharts.setOption({
        series: {
          type: "sankey",
          layout: "none",
          focusNodeAdjacency: "allEdges",
          data: garbageJson.node,
          links: garbageJson.data,
          focusNodeAdjacency: true,
          levels: [
            {
              depth: 0,
              itemStyle: {
                color: "#7ed6df"
              },
              lineStyle: {
                color: "source",
                opacity: 0.6
              }
            },
            {
              depth: 1,
              itemStyle: {
                color: "#b3cde3"
              },
              lineStyle: {
                color: "source",
                opacity: 0.6
              }
            },
            {
              depth: 2,
              itemStyle: {
                color: "#ccebc5"
              },
              lineStyle: {
                color: "source",
                opacity: 0.6
              }
            }
          ]
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/css/son8Echarts.scss";
</style>