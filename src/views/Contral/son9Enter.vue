<template>
  <div id="son9Enter">
    <div class="body">
      <div class="select">
        <el-card shadow="hover">
          <div class="storeType">
            <span>店铺类型：</span>
            <el-radio-group v-model="radio1" size="small" @change="getData">
              <el-radio v-for="(item, index) in storeType" :key="index" :label="item.label" border></el-radio>
            </el-radio-group>
          </div>
          <div class="years">
            <span>年份：</span>
            <el-radio-group v-model="radio2" size="small" @change="getData">
              <el-radio label="2019" border></el-radio>
              <el-radio label="2020" border></el-radio>
            </el-radio-group>
          </div>
          <!-- <div class="month">
            <span>月份：</span>
            <el-radio-group v-model="radio3" size="small" @change="getData">
              <el-radio v-for="(item, index) in month" :key="index" :label="item.month" border></el-radio>
            </el-radio-group>
          </div> -->
          <div class="operate">
            <el-button type="primary" size="small" plain>查询</el-button>
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
            <el-table :data="store">
              <el-table-column label="店铺名称" prop="name"></el-table-column>
              <el-table-column label="店铺类型" prop="type"></el-table-column>
              <el-table-column label="负责人" prop="header"></el-table-column>
              <el-table-column label="联系方式" prop="phone"></el-table-column>
              <el-table-column label="月份"></el-table-column>
              <el-table-column label="年份"></el-table-column>
              <el-table-column label="垃圾产生量"></el-table-column>
              <el-table-column label="操作">
                <el-button type="primary" size="mini" plain>录入</el-button>
                <el-button type="success" size="mini">编辑</el-button>
              </el-table-column>
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
      radio1: "全部",
      radio2: "2019",
      radio3: 1,
      select: "",
      dataPicker: "",
      allStore: [],
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
      month: [
        { month: 1 },
        { month: 2 },
        { month: 3 },
        { month: 4 },
        { month: 5 },
        { month: 6 },
        { month: 7 },
        { month: 8 },
        { month: 9 },
        { month: 10 },
        { month: 11 },
        { month: 12 }
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
  mounted() {
    this.getCustom();
    this.getInfo();
    this.getAll();
    // var date = new Date();
    // console.log(date.getFullYear());
  },
  methods: {
    //单选选择
    getData() {
      this.store = [];
      if (this.radio1 === "全部") {
        this.store = this.allStore;
      }
      for (const i of this.allStore) {
        if (i.type == this.radio1) {
          this.store.push(i);
        }
      }
    },
    getCustom() {
      getAllCustomApi.getAllCustom().then(res => {
        this.allStore = res.data;
        // for (const i of res.data) {

        // }
        this.store = res.data;
      });
    },

    //切换显示
    changeView1() {
      this.view = true;
    },
    changeView2() {
      this.view = false;
    },

    //动态获取
    getAll(){
      getAllStoreGarbageApi.getAllStoreGarbage().then(res=>{
        console.log(res.data);
        
      })
    },
    //获取渲染图
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
    //echarts
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

<style lang="scss" scoped>
@import "../../assets/css/son9Enter.scss";
</style>