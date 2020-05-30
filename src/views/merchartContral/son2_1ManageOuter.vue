<template>
  <div id="son2Test">
    <div class="allBody">
      <div class="gap"></div>
      <div class="body">
        <div class="viewDiv">
          <p id="p1">定制细则</p>
          <!-- 骨架屏 -->
          <div class="skeleton" v-if="skl == true">
            <skeleton-screen></skeleton-screen>
          </div>
          <!-- 店铺展示 -->
          <div class="storeDiv" v-else>
            <div class="store" @click="choose(index)" v-for="(item,index) in custom" :key="index">
              <div class="storeImg">
                <img :src="item.url" />
              </div>
              <div class="storeCon">
                <p id="p2">{{item.name}}</p>
                <p id="p3">{{item.socialCreditCode}}</p>
                <p id="p4">
                  <span :class="item.isCus == '已付款'?'finished':'unfinished'"></span>
                  {{item.isCus}}
                </p>
              </div>
            </div>
            <div class="fillDiv"></div>
          </div>
          <!-- <div class="tip">暂无店铺</div> -->
        </div>
        <div class="other">
          <h4>Easy Garbage Sort</h4>
          <p>让日常垃圾分类更简单</p>
          <img src="../../assets/img/easyGS2.jpg" />
        </div>
      </div>
      <div class="gap"></div>
      <div class="extend">
        <div class="content">
          <p id="p1">订单细则</p>
          <div class="settlement">
            <div id="s1">
              <p id="settle_p1">历史结算(元)</p>
              <span>{{historyPrice}}</span>
            </div>
            <div id="s2">
              <p id="settle_p1">历史未结算(元)</p>
              <p>0.00</p>
            </div>
            <div id="s3">
              <p id="settle_p1">下月续费(元)</p>
              <p>0.00</p>
            </div>
          </div>
          <div class="choose">
            <el-form :model="querySettle" ref="querySettle" :inline="true" size="small">
              <el-form-item label="订单日期:">
                <el-date-picker
                  v-model="querySettle.tradeTime"
                  @change="manageTradeTime"
                  type="month"
                  placeholder="选择月份"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="状态:">
                <el-select v-model="querySettle.isCus" @change="manageTrade" placeholder="选择状态">
                  <el-option label="全部" value="all"></el-option>
                  <!-- <el-option label="已付款" value="yes"></el-option> -->
                </el-select>
              </el-form-item>
            </el-form>
          </div>
          <div class="order">
            <el-table :data="trade">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form label-position="left">
                    <el-form-item label="店铺">
                      <span>{{ props.row.name }}</span>
                    </el-form-item>
                    <el-form-item label="社会信用代码">
                      <span>{{ props.row.socialCreditCode}}</span>
                    </el-form-item>
                    <el-form-item label="负责人">
                      <span>{{ props.row.header }}</span>
                    </el-form-item>
                    <el-form-item label="回收频率">
                      <span>{{ props.row.cycleDate }}</span>
                    </el-form-item>
                    <el-form-item label="回收时间">
                      <span>{{ props.row.cycleTimes }}</span>
                    </el-form-item>
                    <el-form-item label="支付方式">
                      <span>{{ props.row.payType }}</span>
                    </el-form-item>
                    <el-form-item label="订单编号">
                      <span>{{ props.row.tradeNo }}</span>
                    </el-form-item>
                    <el-form-item label="付款金额">
                      <span>{{props.row.money}}</span>
                    </el-form-item>
                    <el-form-item label="交易时间">
                      <span>{{ props.row.tradeTime }}</span>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column label="店铺" prop="name" width="220"></el-table-column>
              <el-table-column label="负责人" prop="header"></el-table-column>
              <el-table-column label="应付金额" prop="money"></el-table-column>
              <el-table-column label="实付金额" prop="money"></el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <public-foot-mini></public-foot-mini>
  </div>
</template>

<script>
import publicFootMini from "../../components/publicFootMini.vue";
import getAllCustomApi from "../../api/getRequest.js";
import SkeletonScreen from "../../components/skeletonScreen.vue";

export default {
  name: "son2Test",
  components: {
    publicFootMini,
    SkeletonScreen
  },
  data() {
    return {
      //定制表
      custom: [],
      //骨架屏
      skl: true,
      //全部帐单,未付款帐单，已付款帐单
      trade: [],
      tradeAll: [],
      tradeYes: [],
      //获取金额
      historyPrice: 0,
      //按照时间帐单
      tradeTimes: [],
      querySettle: {
        payType: "",
        isCus: "",
        tradeTime: ""
      }
    };
  },
  mounted() {
    this.getData();
    console.log(this.tradeYes);
    sessionStorage.setItem("index", "2");
    sessionStorage.removeItem("index");
    // this.manageTrade();
  },
  created() {
    // console.log(localStorage.getItem("userName"));
    // console.log(localStorage.getItem("identity"));
  },
  methods: {
    async getData() {
      await getAllCustomApi
        .getAllCustom()
        .then(res => {
          for (const i of res.data) {
            //获取用户全部定制
            if (i.user == sessionStorage.getItem("userName")) {
              this.custom.push(i);
            }

            //获取除未定制以外的订单
            if (
              i.user == sessionStorage.getItem("userName") &&
              i.isCus != "未定制"
            ) {
              this.trade.push(i);
              console.log(this.trade);
              this.tradeAll.push(i);
            }
            //获取已付款的订单
            if (
              i.user == sessionStorage.getItem("userName") &&
              i.isCus == "已付款"
            ) {
              this.tradeYes.push(i);
            }
          }
          this.getHistoryPrice(this.tradeYes);
          this.custom.length > 0 ? (this.skl = !this.skl) : this.skl;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取历史金额
    getHistoryPrice(arr) {
      let num = 0;
      console.log(arr);

      if (arr.length === 0) {
        this.historyPrice.toFixed(2);
      } else {
        for (const i of arr) {
          num += parseInt(i.money);
        }
        console.log(num);
        
        this.historyPrice = parseFloat(num).toFixed(2);
        console.log(this.historyPrice);
      }
    },
    //进入各店铺
    choose(index) {
      console.log(this.custom[index]);
      //sessionStorage如何存放数组
      var customObj = JSON.stringify(this.custom[index]);
      sessionStorage.customObj = customObj;
      this.$router.push("/merchartContral/Son2Manager/Son2_2ManageInner");
      this.$router.go(0);
    },
    //时间获取
    manageTradeTime(value) {
      //data转成 字符串 再转成 数字
      var date = JSON.stringify(value)
        .substring(1, 8)
        .split("-");

      if (date[1] == 12) {
        date[0] = parseInt(date[0]) + 1;
        date[1] = 1;
      } else {
        date[1] = parseInt(date[1]) + 1;
      }

      this.trade = [];
      for (const i of this.tradeAll) {
        let j = i.tradeTime.substring(0, 7).split("-");
        if (j[1] <= 9) {
          j[1] = parseInt(j[1]);
        }
        if (j.join("-") == date.join("-")) {
          this.trade.push(i);
        }
      }
    },
    //帐单状态获取
    manageTrade(value) {
      switch (value) {
        case "all":
          this.trade = this.tradeAll;
          break;
        case "no":
          this.trade = this.tradeNo;
          break;
        case "yes":
          this.trade = this.tradeYes;
          break;
        default:
          this.trade = this.tradeAll;
          break;
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/css/son2_1ManageOuter.scss";
</style>