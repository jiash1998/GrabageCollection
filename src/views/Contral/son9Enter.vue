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
              <el-table-column label="月份" width="80px">
                <template slot-scope="scope">{{scope.row.monthNum}}</template>
              </el-table-column>
              <el-table-column label="年份" width="80px">
                <template slot-scope="scope">{{scope.row.yearNum}}</template>
              </el-table-column>
              <el-table-column label="垃圾量" width="80px">
                <template slot-scope="scope">
                  <el-form-item style="margin:0;" v-if="!scope.row.production">
                    <el-input v-model="scope.row.production" placeholder></el-input>
                  </el-form-item>
                  {{scope.row.production}}
                </template>
              </el-table-column>
              <el-table-column
                :filters="[{ text: '已录', value: '已录' }, { text: '未录', value: '未录' }]"
                :filter-method="filterTag"
                label="标记"
                width="100px"
              >
                <template slot-scope="scope">
                  <el-tag type="primary" disable-transitions>{{scope.row.tag}}</el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="100px">
                <el-button type="success" size="mini" @click="insert(storeForm)" plain>插入</el-button>
              </el-table-column>
            </el-table>
          </el-form>
        </el-card>
        <div class="operate">
          <el-button type="success" @click="insert(storeForm)" plain>批量插入</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getAllCustomApi from "../../api/getRequest";
import getAllStoreGarbageApi from "../../api/getRequest";

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
      radio3: 1,
      store: [],
      selectAll: { type: "", years: "" },
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
      ]
    };
  },
  mounted() {
    this.getAllCustomInfo();
    this.getAllStoreGarbage();
    this.selectAll.type = this.radio1;
    this.selectAll.years = this.radio2;
    this.selectAll.month = this.radio3;
  },
  methods: {
    insert(form) {
      // this.$refs[form].validate(val =>{
      //   if(val){

      //   }
      // })
      console.log(this.storeForm);
    },
    //表格筛选
    filterTag(value, row) {
      return row.tag === value;
    },
    //店铺类型筛选
    selecType(value1) {
      console.log(value1);
      this.selectAll.type = value1;
    },
    selectYear(value2) {
      console.log(value2);
      this.selectAll.years = value2;
    },
    selectMonth(value3) {
      console.log(value3);
      this.selectAll.month = value3;
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
    },
    //获取全部店铺
    async getAllCustomInfo() {
      await getAllCustomApi
        .getAllCustom()
        .then(res => {
          for (const i of res.data) {
            let obj = {
              name: i.name,
              type: i.type,
              header: i.header,
              phone: i.phone,
              tag: "已录",
              monthNum: 1,
              yearNum: "2020"
            };
            // this.storeForm.data.push(obj);
          }
          // console.log(this.storeForm.data);
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
            if (this.radio2 == i.yearNum && this.radio3 == i.monthNum) {
              if (i.production) {
                i.tag = "已录";
                this.storeForm.data.push(i);
              } else {
                i.tag = "未录";
                this.storeForm.data.push(i);
              }
            }
          }
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