<template>
  <div id="son2Test">
    <div class="gap"></div>
    <div class="body">
      <div class="viewDiv">
        <p id="p1">我的店铺</p>
        <div class="storeDiv">
          <div class="store" @click="choose(index)" v-for="(item,index) in custom" :key="index">
            <div class="storeImg">
              <img :src="item.url" />
            </div>
            <div class="storeCon">
              <p id="p2">{{item.name}}</p>
              <p id="p3">{{item.socialCreditCode}}</p>
              <p id="p4">
                <span></span>
                {{item.isCus}}
              </p>
            </div>
          </div>
          <!-- 为了奇数块时，单个能左对齐 -->
          <div class="test"></div>
        </div>
      </div>
      <div class="other"></div>
    </div>
    <div class="gap"></div>
    <div class="extend">
      <div class="content">
        <p id="p1">订单细则</p>
        <div class="settlement">
          <div id="s1">
            <p id="settle_p1">历史结算(元)</p>
            <p>100.00</p>
          </div>
          <div id="s2">
            <p id="settle_p1">历史未结算(元)</p>
            <p>0.00</p>
          </div>
          <div id="s3">
            <p id="settle_p1">下月续费(元)</p>
            <p>1000.00</p>
          </div>
        </div>
        <div class="choose">
          <el-form
            :model="querySettle"
            ref="querySettle"
            :rules="rules"
            :inline="true"
            size="small"
          >
            <el-form-item label="支付方式:">
              <el-radio-group v-model="querySettle.payType">
                <el-radio-button label="支付宝"></el-radio-button>
                <el-radio-button label="微信"></el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="订单日期:">
              <el-date-picker v-model="querySettle.tradeTime" type="month" placeholder="选择月份"></el-date-picker>
            </el-form-item>
            <el-form-item label="状态:">
              <el-select v-model="querySettle.isCus" placeholder="选择状态">
                <el-option label="全部" value="all"></el-option>
                <el-option label="未结算" value="no"></el-option>
                <el-option label="已结算" value="yes"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div class="order">
          <el-table :data="custom">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left">
                  <el-form-item label="店铺">
                    <span>{{ props.name }}</span>
                  </el-form-item>
                  <el-form-item label="社会信用代码">
                    <span>{{ props.socialCreditCode}}</span>
                  </el-form-item>
                  <el-form-item label="负责人">
                    <span>{{ props.header }}</span>
                  </el-form-item>
                  <el-form-item label="支付方式">
                    <span>{{ props.payType }}</span>
                  </el-form-item>
                   <el-form-item label="订单编号">
                    <span>{{ props.tradeNo }}</span>
                  </el-form-item>
                   <el-form-item label="应付金额">
                    <span></span>
                  </el-form-item>
                   <el-form-item label="实付金额">
                    <span></span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="店铺" prop="name" width="220"></el-table-column>
            <!-- <el-table-column label="社会信用代码" prop="socialCreditCode"></el-table-column> -->
            <el-table-column label="负责人" prop="header"></el-table-column>
            <!-- <el-table-column label="支付方式" prop="payType"></el-table-column> -->
            <!-- <el-table-column label="订单编号" prop="tradeNo"></el-table-column> -->
            <el-table-column label="应付金额" prop></el-table-column>
            <el-table-column label="实付金额" prop></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="foot">
      <p>Copyright © 2020 CHZU（滁州）资源回收有限公司 ｜ ICP证皖B2-20160559</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "son2Test",
  data() {
    return {
      custom: [],
      querySettle: {
        payType: "",
        isCus: "",
        tradeTime: ""
      }
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      await this.axios
        .get("http://" + this.$store.state.path + ":8080/getAllCustom")
        .then(res => {
          console.log(res.data);
          for (const i of res.data) {
            if (i.user == sessionStorage.getItem("userName")) {
              this.custom.push(i);
            }
          }
          // for (const key of this.custom) {
          //   if (
          //     key.cycleDate != "" &&
          //     key.cycleTimes != "" &&
          //     key.payType != "" &&
          //     key.payType
          //   ) {
          //     console.log(key);

          //     this.isTrue = "待付款";
          //   }
          // }
        })
        .catch(err => {
          console.log(err);
        });
    },
    choose(index) {
      console.log(this.custom[index]);
      //sessionStorage如何存放数组
      var customObj = JSON.stringify(this.custom[index]);
      sessionStorage.customObj = customObj;
      this.$router.push("/merchartContral/Son2Manager/Son2_2Manager");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son2Test.scss";
</style>