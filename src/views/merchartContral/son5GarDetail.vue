<template>
  <div id="gardetail">
    <div class="body">
      <div class="content">
        <div class="con_title">
          <h3>回收详情 💌</h3>
        </div>
        <div class="con_body">
          <div class="selYear">
            <p>年份 ✅</p>
            <el-radio-group v-model="years" @change="select" size="small">
              <el-radio label="2020" border></el-radio>
              <el-radio label="2019" border></el-radio>
            </el-radio-group>
          </div>
          <p>详情 ✅</p>
          <el-table :data="garbageYear" border size="small">
            <el-table-column label="年份" prop="yearNum"></el-table-column>
            <el-table-column label="月份" prop="monthNum"></el-table-column>
            <el-table-column label="服务内垃圾量(Kg)" prop="type"></el-table-column>
            <el-table-column label="实际垃圾量(Kg)" prop="production"></el-table-column>
            <el-table-column label="超出垃圾量(Kg)" prop="excess"></el-table-column>
            <el-table-column label="超出金额" prop="money"></el-table-column>
            <el-table-column label="前往支付">
              <template slot-scope="scope">
                <el-tag
                  :type="scope.row.payState == '前往支付' ? 'error':'success'"
                >{{scope.row.payState}}</el-tag>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="con_foot">
          <!-- <el-button type="primary" plain @click="getAllGarbage(12)">get</el-button> -->
          <router-link to="/merchartContral/Son2Manager/Son2_2ManageInner">
            <el-button type="primary" plain size="small">back</el-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getGarbageByIdApi from "../../api/getRequest";
export default {
  name: "gardetail",
  data() {
    return {
      storeId: 0,
      storeType: "",
      //年份对应表格
      years: "2019",
      garbageAll: [],
      garbageYear: []
    };
  },
  mounted() {
    this.storeId = this.$route.query.id;
    this.storeType = this.$route.query.type;
    this.getAllGarbage(this.storeId);
  },
  methods: {
    //获取单选按钮
    select(val) {
      console.log(val);
      this.garbageYear = [];
      for (const i of this.garbageAll) {
        if (i.yearNum == val) {
          this.garbageYear.push(i);
        }
      }
    },

    //获取店铺相关全部回收数据
    getAllGarbage(id) {
      getGarbageByIdApi
        .getByCustomId(id)
        .then(res => {
          console.log(res.data);
          this.garbageAll = res.data;
          for (const i of res.data) {
            if (i.yearNum == 2019 && i.payState != null) {
              i.payState = "前往支付";
              this.garbageYear.push(i);
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
@import "../../assets/css/son5GarDetail.scss";
</style>