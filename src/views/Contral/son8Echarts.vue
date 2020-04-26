<template>
  <div id="son8Echarts">
    <div class="firstItem">
      <p class="p1">资源分析</p>
      <div class="introduce">
        <p class="p2">各类型店铺垃圾回收及分类情况。</p>
        <p class="p3">从可回收垃圾、有害垃圾、干垃圾和湿垃圾四个方面，结合了街道两旁常见店铺类型及常见产生垃圾类型，制作以下分析图。</p>
      </div>
      <el-card shadow="hover">
        <div id="mycharts" ref="mycharts"></div>
      </el-card>
    </div>
    <div class="secondItem">
      <p class="p1">资源回收</p>
      <div class="cover" :class="'cover' + i"></div>
      <div class="outer">
        <div
          class="garbage1"
          v-for="(item, index) in garbage"
          :key="index"
          :class="index == i ? 'border' + i :''"
          @mouseenter="active(index)"
          @mouseleave="outter"
        >
          <p :class="'test' + index">{{item.name}}</p>
          <p>回收方法：{{item.method}}</p>
          <p>回收方：{{item.cycle}}</p>
          <p>联系方式：{{item.phone}}</p>
        </div>
      </div>
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
      garbage: [
        {
          name: "可回收垃圾",
          method: "分类回收、堆肥",
          cycle: "滁州市超越废弃物处理中心",
          phone: "0550-2142076"
        },
        {
          name: "干垃圾",
          method: "焚烧发电、残渣制作建筑材料",
          cycle: " 滁州市皖能环保电力有限公司",
          phone: "0550-3315039"
        },
        {
          name: "湿垃圾",
          method: "厌氧发酵处理、高温好氧堆肥",
          cycle: "滁州市环能生活垃圾处理有限公司",
          phone: "0550-3069721"
        },
        {
          name: "有害垃圾",
          method: "填埋法、焚烧发电",
          cycle: "滁城东北14公里处的琅琊区扬子办雷桥村",
          phone: "0550-7583756"
        }
      ],
      i:""
    };
  },
  computed: {
    classObj() {
      return {
        test1: true
      };
    }
  },
  mounted() {
    this.draw();
  },
  methods: {
    outter(){
     this.i = "";
    },
    active(index) {
      // console.log(index);
      this.i = index;
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
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/css/son8Echarts.scss";
</style>