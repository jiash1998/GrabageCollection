<template>
  <div id="son9Enter">
    <div class="body">
      <div class="select">
        <el-card shadow="hover">
          <div class="storeType">
            <span>店铺类型：</span>
            <el-radio-group v-model="radioAll.radio1" size="small">
              <el-radio v-for="(item, index) in storeType" :key="index" :label="item.label" border></el-radio>
            </el-radio-group>
          </div>
          <div class="years">
            <span>年份：</span>
            <el-radio-group v-model="radioAll.radio2" size="small">
              <el-radio label="2020" border></el-radio>
              <el-radio label="2019" border></el-radio>
            </el-radio-group>
          </div>
          <div class="operate">
            <el-button type="primary" size="small" @click="selectData" plain>查询</el-button>
          </div>
        </el-card>
      </div>
      <div class="switchDemo">
        <div class="imgBorder">
          <img
            src="../../assets/img/chart.png"
            :class="view ? 'fil' : ''"
            @click="changeView1"
            title="图形视图"
          />
          <img
            src="../../assets/img/excel.png"
            :class="view ? '' : 'fil'"
            @click="changeView2"
            title="表格视图"
          />
        </div>
      </div>
      <div class="viewData">
        <div class="view1" :class="view ? 'change' : 'change2'">
          <el-card shadow="hover">
            <div id="mycharts2" ref="mycharts2"></div>
          </el-card>
        </div>
        <div class="view2" :class="view ? 'change2' : 'change'">
          <el-card shadow="hover">
            <el-table :data="store" border>
              <el-table-column label="店铺名称" prop="name"></el-table-column>
              <el-table-column label="店铺类型" prop="type"></el-table-column>
              <el-table-column label="负责人" prop="header" width="140px"></el-table-column>
              <el-table-column label="联系方式" prop="phone"></el-table-column>
              <!-- <el-table-column label="月份"></el-table-column> -->
              <el-table-column label="年份" width="100px"></el-table-column>
              <el-table-column label="垃圾产生量(t)" width="130px"></el-table-column>
              <!-- <el-table-column label="操作">
                <el-button type="primary" size="mini" plain>录入</el-button>
                <el-button type="success" size="mini">编辑</el-button>
              </el-table-column>-->
            </el-table>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "../../util/echarts";
import getAllCustomApi from "../../api/getRequest";
import getAllStoreGarbageApi from "../../api/getRequest";

export default {
  name: "son9Enter",
  data() {
    return {
      radioAll: {
        radio1: "全部",
        radio2: ""
      },
      index: 0,
      //暂存 年份
      timeYear: "",
      chart: {},
      //存放店铺id数组
      storeId: [],
      storeId2: [],
      //存放店铺对应垃圾
      storeGarMon: [],
      select: "",
      dataPicker: "",
      // allStore: [],
      store: [],
      //view 显示
      view: true,
      storeType: [
        {
          label: "全部"
        },
        {
          label: "中小型饭店"
        },
        {
          label: "快餐汉堡店"
        },
        {
          label: "烧烤店"
        },
        {
          label: "奶茶店"
        },
        {
          label: "办公楼"
        },
        {
          label: "火锅店"
        },
        {
          label: "理发店"
        },
        {
          label: "药店"
        },
        {
          label: "宾馆"
        },
        {
          label: "其他类型"
        }
      ],
      //echarts
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
  created() {
    this.getCustom();
    // this.getInfo();
    this.getAll();
    this.radioAll.radio2 = new Date().getUTCFullYear() - 1 + "";
    // this.radioAll.radio2 = new Date().getUTCFullYear() + "";
  },
  methods: {
    //单选选择
    selectData() {
      // this.store = [];
      // if (this.radio1 === "全部") {
      //   this.store = this.allStore;
      // }
      // for (const i of this.allStore) {
      //   if (i.type == this.radio1) {
      //     this.store.push(i);
      //   }
      // }
      // console.log(this.radioAll);
      // if(this.radioAll.typ){

      // }
      // console.log(this.timeYear);
      // if (this.timeYear == this.radioAll.radio2) {
      //   console.log("no");
      // } else {
      //   // this.getAll();
      // }
      // this.draw2(this.source2, this.series);
      // this.chart.dispose();
      this.getAll();
    },
    //获取全部店铺custom表
    getCustom() {
      getAllCustomApi.getAllCustom().then(res => {
        // this.allStore = res.data;
        // this.store = res.data;
        var storeId2 = [];
        for (const i of res.data) {
          let obj = {
            customId: i.id,
            name: i.name,
            type: i.type
          };
          this.storeId.push(obj);
          this.storeId2[i.id] = obj;
        }
        // console.log(this.storeId2);
        // this.storeId2 = storeId2;
      });
      // console.log(this.storeId2);
    },

    //切换显示
    changeView1() {
      this.view = true;
    },
    changeView2() {
      this.view = false;
    },

    //动态获取并渲染
    getAll() {
      getAllStoreGarbageApi.getAllStoreGarbage().then(res => {
        this.timeYear = this.test(res);
      });
    },
    //测试
    test(res) {
      this.index += 1;
      //First 取出选择的年份-对应的所有数据放入 arr1
      let arr1 = [];
      if (this.radioAll.radio1 == "全部") {
        for (const i of res.data) {
          if (i.yearNum == this.radioAll.radio2) {
            arr1.push(i);
          }
        }
      } else {
        for (const i of res.data) {
          if (
            i.yearNum == this.radioAll.radio2 &&
            i.type == this.radioAll.radio1
          ) {
            arr1.push(i);
          }
        }
      }
      // console.log(arr1);
      //Second 按照店铺id  把相同店铺 同一年的数据 放入暂存数组 arr2
      let arr2 = [];
      for (const i of this.storeId) {
        arr2 = [];
        for (const j of arr1) {
          if (i.customId == j.customId) {
            arr2.push(j);
          }
        }
        // console.log(arr2);
        //Third 将 店铺名 和 每个月的数据取出，放入数组 rest
        let rest = [arr2[0].name];
        for (const m of arr2) {
          rest.push(m.production);
        }
        // console.log(rest);
        this.storeGarMon.push(rest);
        rest = [];
      }
      //Fourth 最后和 scoure2 数组结合
      for (let i = 0; i < this.storeGarMon.length; i++) {
        this.source2.push(this.storeGarMon[i]);
      }
      // console.log(this.source2);
      //增加折线并绘制
      for (let i = 0; i < this.storeId.length; i++) {
        this.series.unshift(this.insertLine);
      }
      console.log("first", this.source2);
      this.draw2(this.source2, this.series);

      console.log("Second", this.source2);
      return this.radioAll.radio2;
    },
    //获取渲染图
    async getInfo() {
      await getAllCustomApi
        .getAllCustom()
        .then(res => {
          this.storeInfo = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //echarts
    draw2(source2, series) {
      var myCharts2 = echarts.init(this.$refs.mycharts2);
      this.chart = myCharts2;
      this.clean();
      // var myCharts2 = echarts.init(this.$refs.mycharts2);
      // echarts.init(this.$refs.mycharts2).dispose();
      var option = {
        legend: {},
        tooltip: {
          trigger: "axis",
          showContent: false
        },
        dataset: {
          source: source2
        },
        xAxis: { type: "category", name: "月份" },
        yAxis: { name: "垃圾生产量(kg)" },
        grid: { top: "60%" },
        series: series
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
      console.log("结束：", this.source2);
    },
    clean() {
      console.log("clean");
      this.source2 = [
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
      ];
      this.series = [
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
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son10Detail.scss";
</style>