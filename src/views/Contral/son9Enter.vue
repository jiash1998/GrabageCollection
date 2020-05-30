<template>
  <div id="son9Enter">
    <div class="body">
      <div class="select">
        <el-card shadow="hover">
          <div class="storeType">
            <span>店铺类型：</span>
            <el-radio-group v-model="radio1" @change="selecType" size="small">
              <el-radio v-for="(item, index) in storeType" :key="index" :label="item.label" border></el-radio>
            </el-radio-group>
          </div>
          <div class="years">
            <span>年份：</span>
            <el-radio-group v-model="radio2" @change="selectYear" size="small">
              <el-radio label="2020" border></el-radio>
              <el-radio label="2019" border></el-radio>
            </el-radio-group>
          </div>
          <div class="month">
            <span>月份：</span>
            <el-radio-group v-model="radio3" size="small" @change="selectMonth">
              <el-radio v-for="(item, index) in month" :key="index" :label="item.month" border></el-radio>
            </el-radio-group>
          </div>
          <div class="operate">
            <el-button type="primary" size="small" @click="start" plain>查询</el-button>
            <el-button type="success" size="small" @click="insertNew(storeForm)" plain>插入店铺</el-button>
          </div>
        </el-card>
      </div>
      <div class="insertDiv">
        <el-card shadow="hover">
          <el-form :model="storeForm" ref="storeForm" :rules="rules" size="mini">
            <el-table :data="storeForm.data" border>
              <el-table-column label="店铺">
                <template slot-scope="scope">{{scope.row.name}}</template>
              </el-table-column>
              <el-table-column label="类型">
                <template slot-scope="scope">{{scope.row.type}}</template>
              </el-table-column>
              <el-table-column label="负责人">
                <template slot-scope="scope">{{scope.row.header}}</template>
              </el-table-column>
              <el-table-column label="联系方式">
                <template slot-scope="scope">{{scope.row.phone}}</template>
              </el-table-column>
              <el-table-column label="月份" width="100px">
                <template slot-scope="scope">{{scope.row.monthNum}}</template>
              </el-table-column>
              <el-table-column label="年份" width="100px">
                <template slot-scope="scope">{{scope.row.yearNum}}</template>
              </el-table-column>
              <el-table-column label="参考值" width="100px">
                <template slot-scope="scope">{{scope.row.reference}}</template>
              </el-table-column>
              <el-table-column label="垃圾量(kg)" width="100px">
                <template slot-scope="scope">
                  <el-form-item style="margin:0;" v-if="scope.row.tag == '未录'">
                    <el-input v-model="scope.row.production" placeholder></el-input>
                  </el-form-item>
                  <span v-else>{{scope.row.production}}</span>
                </template>
              </el-table-column>
              <el-table-column
                :filters="[{ text: '已录', value: '已录' }, { text: '未录', value: '未录' }]"
                :filter-method="filterTag"
                label="标记"
                width="100px"
              >
                <template slot-scope="scope">
                  <el-tag
                    :type="scope.row.tag =='未录' ? 'warning':'primary'"
                    disable-transitions
                  >{{scope.row.tag}}</el-tag>
                </template>
              </el-table-column>
              <!-- <el-table-column label="操作" width="100px">
                <el-button type="success" size="mini" @click="insert(storeForm)" plain>录入数据</el-button>
              </el-table-column>-->
            </el-table>
          </el-form>
        </el-card>
        <div class="insertOpr">
          <el-button
            type="success"
            :disabled="insertBtn"
            size
            @click="insertBef(storeForm)"
            plain
          >录入数据</el-button>
          <el-button type="primary" @click="test">
            <i class="el-icon-download"></i>
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getAllCustomApi from "../../api/getRequest";
import getAllStoreGarbageApi from "../../api/getRequest";
import exPortAllApi from "../../api/getRequest";
import insertGarbageBatchApi from "../../api/postRequest";
import insertGarbageApi from "../../api/postRequest";
import dealWithExcess from "../../util/dealExcess";

export default {
  name: "son9Enter",
  data() {
    var validateContent = (rule, value, callback) => {
      if (!value) {
        return new callback("请输入内容");
      } else {
        callback();
      }
    };
    return {
      rules: {
        content: [{ validator: validateContent, trigger: "change" }]
      },
      radio1: "全部",
      radio2: "2020",
      radio3: "1",
      store: [],
      //录入数据按钮
      insertBtn: true,
      selectAll: { type: "", years: "" },
      //暂存数据
      stage: [],
      stageAllStore: [],
      //表单中表格数据
      storeForm: {
        data: []
      },
      storeGar: [],
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
          label: "超市"
        },
        {
          label: "其他类型"
        }
      ],
      month: []
    };
  },
  mounted() {
    this.getAllCustomInfo();
    this.getAllStoreGarbage();
    this.selectAll = {
      type: this.radio1,
      years: this.radio2,
      month: this.radio3
    };
    this.initRadio();
  },
  methods: {
    //excel导出
    test() {
      exPortAllApi
        .exPortAll()
        .then(res => {
          console.log(res.data);
          let b = new Blob([res.data], { type: "application/vnd.ms-excel" });
          let url = URL.createObjectURL(b);
          let link = document.createElement("a");
          link.download = "全年店铺资源回收情况.xlsx";
          link.href = url;
          link.click();
          window.URL.revokeObjectURL(url);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //店铺类型筛选
    selecType(value1) {
      this.selectAll.type = value1;
    },
    selectYear(value2) {
      this.selectAll.years = value2;
      if (this.selectAll.years == new Date().getUTCFullYear()) {
        this.month = [];
        for (let i = 0; i < new Date().getUTCMonth() + 2; i++) {
          this.month.push({ month: i + 1 + "" });
        }
      } else {
        this.month = [];
        for (let i = 0; i < 12; i++) {
          this.month.push({ month: i + 1 + "" });
        }
      }
    },
    selectMonth(value3) {
      this.selectAll.month = value3;
    },
    //准备单选数据
    initRadio() {
      if (this.selectAll.years == new Date().getUTCFullYear()) {
        this.month = [];
        for (let i = 0; i < new Date().getUTCMonth() + 2; i++) {
          this.month.push({ month: i + 1 + "" });
        }
      }
    },
    //按照选择类型批量插入下月店铺
    insertNew() {
      var radioGroup = this.selectAll;
      var arr = [];
      //全部插入
      if (radioGroup.type == "全部") {
        for (const i of this.stageAllStore) {
          let obj = {
            customId: i.customId,
            monthNum: radioGroup.month,
            excess: null,
            money: null,
            production: "",
            yearNum: radioGroup.years
          };
          arr.push(obj);
        }
        // console.log(arr);
      }
      //按选择类型插入
      else {
        for (const i of this.stageAllStore) {
          if (i.type == radioGroup.type) {
            let obj = {
              customId: i.customId,
              monthNum: radioGroup.month,
              excess: null,
              money: null,
              production: "",
              yearNum: radioGroup.years
            };
            arr.push(obj);
          }
        }
      }
      // console.log(this.stageAllStore);
      // console.log(this.storeForm.data);
      if (this.storeForm.data.length === this.stageAllStore.length) {
        console.log("all");
        this.$message({
          type: "warning",
          message: "已插入全部店铺数据",
          duration: 1800
        });
      } else {
        var postData = {
          productions: arr
        };
        console.log(postData);

        insertGarbageBatchApi
          .insertGarbageBatch(postData)
          .then(res => {
            console.log(res);

            if (res.data.code === 200) {
              this.$message({
                type: "success",
                message: "插入店铺数据成功",
                duration: 1500
              });
              this.getAllStoreGarbage();
            } else {
              this.$message({
                type: "warning",
                message: "暂无店铺可插入",
                duration: 1500
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    //录入前处理
    insertBef(form) {
      this.stage = [];
      //计算超出量
      for (const i of form.data) {
        if (i.tag === "未录" && i.reference != null && i.production != null) {
          // this.stage.push(i);
          let item = dealWithExcess.calcAll(i);
          i.excessGar = item.excessGar;
          i.excessMoney = item.excessMoney;
          this.stage.push(i);
        }
      }
      let res = this.stage.every(item => {
        return item.reference == "暂无";
      });
      if (res) {
        this.$message({
          type: "error",
          message: "暂无参考量，无法录入",
          duration: 1600
        });
        return;
      } else {
        this.insert(this.stage);
      }
    },
    //店铺垃圾量录入
    insert(val) {
      // this.stage = [];
      // console.log(this.storeForm.data);
      //计算超出量
      // for (const i of form.data) {
      //   if (i.tag === "未录" && i.reference != null && i.production != null) {
      //     // this.stage.push(i);
      //     let item = dealWithExcess.calcAll(i);
      //     i.excessGar = item.excessGar;
      //     i.excessMoney = item.excessMoney;
      //     this.stage.push(i);
      //   }
      //   if (i.reference == null) {
      //     this.$message({
      //       type: "error",
      //       message: "暂无参考量，无法录入",
      //       duration: 1600
      //     });
      //   }
      // }

      var data = val;
      var productions = [];
      // console.log(data);

      for (const i of data) {
        let obj = {
          customId: i.customId,
          excess: i.excessGar,
          money: i.excessMoney,
          monthNum: i.monthNum,
          production: i.production,
          yearNum: i.yearNum
        };
        productions.push(obj);
      }
      // console.log(productions);
      //检查页面是否有要录入的内容
      var postData = {
        productions: productions
      };
      if (productions.length > 0) {
        insertGarbageBatchApi
          .insertGarbageBatch(postData)
          .then(res => {
            console.log(res.data);
            if (res.data.code == 400) {
              this.$message({
                type: "error",
                message: "录入异常",
                duration: 1600
              });
            } else {
              this.getAllStoreGarbage();
              this.$message({
                type: "success",
                message: "录入店铺数据成功",
                duration: 1500
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$message({
          type: "warning",
          message: "无可录入内容",
          duration: 1500
        });
      }
    },
    //表格筛选
    filterTag(value, row) {
      return row.tag === value;
    },
    //开始查询
    start() {
      if (this.selectAll.type === "全部") {
        this.storeForm.data = [];
        for (const i of this.storeGar) {
          if (
            this.selectAll.years == i.yearNum &&
            this.selectAll.month == i.monthNum
          ) {
            this.storeForm.data.push(i);
          }
        }
      } else {
        this.storeForm.data = [];
        for (const i of this.storeGar) {
          if (
            this.selectAll.type == i.type &&
            this.selectAll.years == i.yearNum &&
            this.selectAll.month == i.monthNum
          ) {
            this.storeForm.data.push(i);
          }
        }
      }
      // console.log(this.storeForm.data);
      if (this.storeForm.data.length === 0) {
        this.insertBtn = true;
        this.$message({
          type: "error",
          message: "暂无任何店铺信息，可选择插入",
          duration: 1800
        });
      } else {
        this.insertBtn = false;
      }
    },
    //获取全部店铺
    async getAllCustomInfo() {
      await getAllCustomApi
        .getAllCustom()
        .then(res => {
          for (const i of res.data) {
            let obj = {
              customId: i.id,
              name: i.name,
              type: i.type,
              header: i.header,
              phone: i.phone
            };
            if (i.isCus === "已付款") {
              this.stageAllStore.push(obj);
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取垃圾产生表
    async getAllStoreGarbage() {
      await getAllStoreGarbageApi
        .getAllStoreGarbage()
        .then(res => {
          this.storeGar = res.data;
          for (const i of this.storeGar) {
            if (i.production != null) {
              i.tag = "已录";
            } else {
              i.tag = "未录";
            }

            if (i.reference === null) {
              i.reference = "暂无";
            }
          }
          console.log(this.storeGar);
          this.start();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son9Enter.scss";
</style>