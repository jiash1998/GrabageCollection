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
            <el-button type="primary" :disabled="!view" size="small" @click="selectData" plain>查询</el-button>
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
            <el-table :data="GarbageAll" border>
              <el-table-column label="店铺名称" prop="name"></el-table-column>
              <el-table-column label="店铺类型" prop="type"></el-table-column>
              <el-table-column label="负责人" prop="header" width="140px"></el-table-column>
              <el-table-column label="联系方式" prop="phone"></el-table-column>
              <el-table-column label="年份" prop="yearNum" width="100px"></el-table-column>
              <el-table-column label="垃圾产生量(kg)" prop="production" width="130px"></el-table-column>
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
      //存放表格 全年数据
      GarbageAll: [],
      //存放店铺id数组
      storeId: [],
      storeId2: [],
      //存放店铺对应垃圾
      storeGarMon: [],
      select: "",
      dataPicker: "",
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
            formatter: "{b}: {@1}" + "kg" + "({d}%)"
            // formatter: "{b}: {@[" + dimension + "]}" + "kg"
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
  },
  methods: {
    //单选选择
    selectData() {
      this.getAll();
    },
    //获取全部店铺custom表
    getCustom() {
      getAllCustomApi.getAllCustom().then(res => {
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
      });
    },

    //切换显示
    changeView1() {
      this.view = true;
    },
    changeView2() {
      this.view = false;
    },
    //渲染表格
    viewTable(res) {
      console.log(this.GarbageAll);
    },
    //获取总垃圾年
    test(data) {
      let num = 0;
      for (const i of data) {
        num += i.production;
      }
      let obj = {
        name: data[0].name,
        type: data[0].type,
        header: data[0].header,
        phone: data[0].phone,
        yearNum: data[0].yearNum,
        production: num
      };
      return obj;
    },

    //动态获取并渲染
    getAll() {
      getAllStoreGarbageApi.getAllStoreGarbage().then(res => {
        this.firstSort(res);
      });
    },
    //第一步 分离数据
    firstSort(res) {
      this.clean();
      let timeId = [];
      //First 取出选择的年份-对应的所有数据放入 arr1
      let arr1 = [];
      if (this.radioAll.radio1 == "全部") {
        for (const i of res.data) {
          if (i.yearNum == this.radioAll.radio2) {
            arr1.push(i);
          }
        }
        timeId = this.storeId;
      } else {
        for (const i of res.data) {
          if (
            i.yearNum == this.radioAll.radio2 &&
            i.type == this.radioAll.radio1
          ) {
            arr1.push(i);
          }
        }
        for (const i of this.storeId) {
          if (i.type == this.radioAll.radio1) {
            timeId.push({ customId: i.customId });
          }
        }
      }
      // console.log(arr1);
      this.secondSort(timeId, arr1);
    },
    //第二步 分离
    secondSort(timeId, arr1) {
      this.GarbageAll = [];
      //Second 按照店铺 id  把相同店铺 同一年的数据 放入暂存数组 arr2
      let arr2 = [];
      for (let i of timeId) {
        arr2 = [];
        for (let j of arr1) {
          if (i.customId == j.customId) {
            arr2.push(j);
          }
        }
        console.log(arr2);
        if (arr2.length === 0) {
          // return "none";
          console.log("none");
        } else {
          //填充表格数据
          this.GarbageAll.push(this.test(arr2));
          //Third 将 店铺名 和 每个月的数据取出，放入数组 rest
          let rest = [arr2[0].name];
          for (const m of arr2) {
            rest.push(m.production);
          }
          // console.log(rest);
          this.storeGarMon.push(rest);
          rest = [];
        }
      }
      // console.log(this.storeGarMon);
      //Fourth 最后和 scoure2 数组结合
      for (let i = 0; i < this.storeGarMon.length; i++) {
        this.source2.push(this.storeGarMon[i]);
      }
      //增加折线并绘制
      for (let i = 0; i < this.storeId.length; i++) {
        this.series.unshift(this.insertLine);
      }
      if (this.source2.length == 1) {
        this.$message({
          message: "暂无数据",
          type: "warning",
          duration: 1600
        });
      }
      // console.log(this.source2);
      //绘制
      this.draw2(this.source2, this.series);
      this.storeGarMon = [];
    },
    //获取渲染图
    async getInfo() {
      await getAllCustomApi
        .getAllCustom()
        .then(res => {
          this.storeInfo = res.data;
          this.viewTable(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //echarts
    draw2(source2, series) {
      echarts.init(this.$refs.mycharts2).dispose();
      var myCharts2 = echarts.init(this.$refs.mycharts2);

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
                formatter: "{b}: {@[" + dimension + "]}" + "kg"
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