<template>
  <div id="son4Custom">
    <div class="body">
      <div class="operate">
        <el-form :model="findStore" ref="findStore" inline>
          <el-form-item>
            <el-input v-model="findStore.name" placeholder="请输入店铺名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="selStore" plain>查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="table">
        <el-table :data="storeInfo">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left">
                <div class="left">
                  <el-form-item label="回收时间：">{{props.row.cycleTimes}}</el-form-item>
                  <el-form-item label="回收频率：">{{props.row.cycleDate}}</el-form-item>
                  <el-form-item label="包月服务：">{{props.row.sustainMonth}}</el-form-item>
                  <el-form-item label="服务状态：">{{props.row.isCus}}</el-form-item>
                </div>
                <div class="right">
                  <el-form-item label="订单金额：">{{props.row.money}}</el-form-item>
                  <el-form-item label="订单编号：">{{props.row.tradeNo}}</el-form-item>
                  <el-form-item label="支付方式：">{{props.row.payType}}</el-form-item>
                </div>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="店铺"></el-table-column>
          <el-table-column prop="header" width="120" label="负责人"></el-table-column>
          <el-table-column prop="phone" width="120" label="联系方式"></el-table-column>
          <el-table-column prop="socialCreditCode" width="180" label="社会信用代码"></el-table-column>
          <el-table-column label="地址">
            <el-table-column prop="address" label="省市区"></el-table-column>
            <el-table-column prop="addressDetail" label="详细地址"></el-table-column>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import qs from 'querystring';
export default {
  name: "son4Custom",
  data() {
    return {
      storeInfo: [],
      //搜索商铺表单
      findStore: {
        name: ""
      }
    };
  },
  async mounted() {
    await this.getInfo();
  },
  methods: {
    selStore() {
      var data = this.findStore;
      
      this.axios
        .post(
          "http://" + this.$store.state.path + ":8080/getCustomByName",
          qs.stringify(data),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          this.storeInfo = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getInfo() {
      this.axios
        .get("http://" + this.$store.state.path + ":8080/getAllCustom")
        .then(res => {
          console.log(res.data);
          this.storeInfo = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss">
@import "../../assets/css/son4Custom.scss";
</style>