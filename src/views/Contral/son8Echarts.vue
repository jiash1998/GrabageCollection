<template>
  <div id="son8Echarts">
    <div class="firstItem">
      <p class="p1">往年店铺资源分析</p>
      <div class="introduce">
        <p class="p2">2019 年各类型店铺的垃圾回收及分类情况</p>
        <p class="p3">从可回收垃圾、有害垃圾、干垃圾和湿垃圾四个方面，结合了街道两旁常见店铺类型及常见产生垃圾类型，制作以下分析图。</p>
      </div>
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