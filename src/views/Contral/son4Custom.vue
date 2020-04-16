<template>
  <div id="son4Custom">
    <div class="body">
      <div class="operate">
        <el-form :model="findStore" ref="findStore" inline>
          <el-form-item>
            <el-input v-model="findStore.name" placeholder="请输入店铺名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="btn" type="success" @click="selStore(vm)" plain>查询</el-button>
            <el-button type="primary" @click="exportEx">
              <i class="el-icon-download"></i>
            </el-button>
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
                  <el-form-item label="服务时长（月）：">{{props.row.sustainMonth}}</el-form-item>
                  <el-form-item label="服务状态：">{{props.row.isCus}}</el-form-item>
                </div>
                <div class="right">
                  <el-form-item label="订单金额：">{{props.row.money}}</el-form-item>
                  <el-form-item label="支付方式：">{{props.row.payType}}</el-form-item>
                  <el-form-item label="服务开始时间：">{{props.row.tradeTimeEnd}}</el-form-item>
                  <!-- <el-form-item label="服务截至时间：">{{props.row.tradeTimeEnd}}</el-form-item> -->
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
import qs from "querystring";
import getAllCustomApi from "../../api/getRequest.js";
import exPortCustAllApi from "../../api/getRequest.js";
import getCustomByNameApi from "../../api/postRequest.js";
import { debounce } from "../../util/debounce.js";

export default {
  name: "son4Custom",
  data() {
    return {
      storeInfo: [],
      //搜索商铺表单
      findStore: {
        name: ""
      },
      vm: this
    };
  },
  async mounted() {
    await this.getInfo();
  },
  methods: {
    //导出excel
    exportEx() {
      exPortCustAllApi
        .exPortCustAll()
        .then(res => {
          console.log(res.data);
          let b = new Blob([res.data], { type: "application/vnd.ms-excel" });
          let url = URL.createObjectURL(b);
          let link = document.createElement("a");
          link.download = "注册店铺细则.xlsx";
          link.href = url;
          link.click();
          window.URL.revokeObjectURL(url);
        })
        .catch(err => {
          console.log(err);
        });
    },
    selStore: debounce(
      vm => {
        var data = vm.findStore;

        getCustomByNameApi
          .getCustomByName(data)
          .then(res => {
            // console.log(res.data);
            vm.storeInfo = res.data;
          })
          .catch(err => {
            console.log(err);
          });
      },
      2000,
      true
    ),
    getInfo() {
      getAllCustomApi
        .getAllCustom()
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