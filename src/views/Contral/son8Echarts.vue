<template>
  <div id="son8Echarts">
    <div class="firstItem">
      <p>常见店铺垃圾分析</p>
      <el-card shadow="hover">
        <div id="mycharts" ref="mycharts"></div>
      </el-card>
    </div>
    <div class="secondItem">
      <p>已定制店铺分析</p>
      <el-card shadow="hover">
        <div id="mycharts2" ref="mycharts2"></div>
      </el-card>
    </div>
  </div>
</template>

<script>
import echarts from "../../util/echarts";
import garbageJson from "../../util/garbage.json";
export default {
  name: "son8Echarts",
  mounted() {
    this.draw();
    this.draw2();
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
    },

    draw2() {
      var myCharts2 = echarts.init(this.$refs.mycharts2);

      var option = {
        legend: {},
        tooltip: {
          trigger: "axis",
          showContent: false
        },
        dataset: {
          source: [
            ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
            ["Matcha Latte", 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
            ["Milk Tea", 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
            ["Cheese Cocoa", 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
            ["Walnut Brownie", 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
          ]
        },
        xAxis: { type: "category" },
        yAxis: { gridIndex: 0 },
        grid: { top: "60%" },
        series: [
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          {
            type: "pie",
            id: "pie",
            radius: "25%",
            center: ["50%", "30%"],
            label: {
              formatter: "{b}: {@2012} ({d}%)"
            },
            encode: {
              itemName: "product",
              value: "2012",
              tooltip: "2012"
            }
          }
        ]
      };

      myCharts2.on("updateAxisPointer", function(event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          var dimension = xAxisInfo.value + 1;
          myCharts2.setOption({
            series: {
              id: "pie",
              label: {
                formatter: "{b}: {@[" + dimension + "]} ({d}%)"
              },
              encode: {
                value: dimension,
                tooltip: dimension
              }
            }
          });
        }
      });

      myCharts2.setOption(option);
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/css/son8Echarts.scss";
</style>