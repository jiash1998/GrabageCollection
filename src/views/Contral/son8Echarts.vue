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
import getAllCustomApi from "../../api/getRequest.js";

export default {
  name: "son8Echarts",
  data() {
    return {
      source2: [
        [
          "months",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12"
        ]
      ],
      series: [
        {
          type: "pie",
          id: "pie",
          radius: "25%",
          roseType: "radius",
          center: ["50%", "30%"],
          label: {
            formatter: "{b}: {@1}({d}%)"
          },
          encode: {
            itemName: "months",
            value: "1",
            tooltip: "1"
          }
        }
      ],
      insertLine: { type: "line", smooth: true, seriesLayoutBy: "row" },
      arr: []
    };
  },
  mounted() {
    this.getInfo();
    this.draw();
  },
  methods: {
    async getInfo() {
      await getAllCustomApi
        .getAllCustom()
        .then(res => {
          this.storeInfo = res.data;
          //添加店铺信息
          for (const i of res.data) {
            for (let j = 0; j < 12; j++) {
              this.arr.push((Math.random() * 100).toFixed(2));
            }
            let insert = [i.name].concat(this.arr);
            this.source2.push(insert);
            this.arr = [];
          }
          // console.log(this.source2);
          //增加折线
          for (let i = 0; i < res.data.length; i++) {
            this.series.unshift(this.insertLine);
          }
          this.draw2();
        })
        .catch(err => {
          console.log(err);
        });
    },

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
          source: this.source2
        },
        xAxis: { type: "category", name: "月份" },
        yAxis: { gridIndex: 0, name: "垃圾生产量(kg)" },
        grid: { top: "60%" },
        series: this.series
      };

      myCharts2.on("updateAxisPointer", function(event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          var dimension = xAxisInfo.value + 1;
          myCharts2.setOption({
            series: {
              id: "pie",
              label: {
                // formatter: "{b}: {@[" + dimension + "]}"
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