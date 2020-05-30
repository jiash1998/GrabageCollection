<template>
  <div id="gardetail">
    <div class="body">
      <div class="content">
        <div class="con_title">
          <h3>回收详情</h3>
        </div>
        <div class="con_body">
          <div class="explain">
            <p>解释 🌠</p>
            <div class="exp_div">
              <p>
                1. 服务内回收量会根据店铺类型和服务费的不同而有所差别。
                <router-link to="/Son4ServiceDet">详情点击查看↩</router-link>
              </p>
              <p>2. 店铺每月的回收情况会在次月月初展示，如果有需要支付的超出金额，请及时支付。</p>
              <p>3. 如果对回收情况有异议，可以致电联系人：王先生，电话：17845042312。</p>
            </div>
          </div>
          <div class="selYear">
            <p>年份 ⏰</p>
            <el-radio-group v-model="years" @change="select" size="small">
              <el-radio label="2020" border></el-radio>
              <el-radio label="2019" border></el-radio>
            </el-radio-group>
          </div>
          <p>详情 💌</p>
          <el-table :data="garbageYear" border size="small">
            <el-table-column label="年份" prop="yearNum"></el-table-column>
            <el-table-column label="月份" prop="monthNum"></el-table-column>
            <el-table-column label="服务内垃圾量(Kg)" prop="defGar"></el-table-column>
            <el-table-column label="实际垃圾量(Kg)" prop="production"></el-table-column>
            <el-table-column label="超出垃圾量(Kg)" prop="excess"></el-table-column>
            <el-table-column label="超出金额" prop="money"></el-table-column>
            <el-table-column label="前往支付">
              <template slot-scope="scope">
                <el-button
                  type="warning"
                  plain
                  size="mini"
                  @click="goPayAli(scope.row)"
                  v-if="scope.row.payState === 'goPay'"
                >支付➜</el-button>
                <span v-else-if="scope.row.payState === 'dontNeed'">🚧</span>
                <span v-else>✅</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="con_foot">
          <!-- <el-button type="primary" plain @click="getAllGarbage(12)">get</el-button> -->
          <router-link to="/merchartContral/Son2Manager/Son2_2ManageInner">
            <el-button type="primary" plain size="small">返回</el-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getGarbageByIdApi from "../../api/getRequest";
import payForExcessApi from "../../api/postRequest";
import defaultGar from "../../util/defaultGar";

export default {
  name: "gardetail",
  data() {
    return {
      storeId: 0,
      storeType: "",
      storeDefGar: 0,
      //年份对应表格
      years: "2019",
      garbageAll: [],
      garbageYear: []
    };
  },
  mounted() {
    this.storeId = this.$route.query.id;
    this.storeType = this.$route.query.type;
    this.years = new Date().getFullYear() + "";
    this.getAllGarbage(this.storeId, this.years);
    this.storeDefGar = defaultGar.backGar(this.storeType);
  },
  methods: {
    //支付
    goPayAli(ind) {
      let data = { id: ind.id, money: ind.money };
      // console.log(data);

      payForExcessApi
        .payForExcess(data)
        .then(res => {
          console.log(res);
          let routerData = this.$router.resolve({
            path: "/Pay2",
            query: { htmls: res.data }
          });
          this.htmls = res.data;
          //打开新页面(地址，空白的)
          // window.open(routerData.href, "_ blank");
          //创造一个节点，并写入返回的html代码
          const div = document.createElement("div");
          div.innerHTML = this.htmls;
          document.body.appendChild(div);
          document.forms[0].submit();
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取单选按钮
    select(val) {
      this.garbageYear = [];
      this.garbageAll = [];
      this.getAllGarbage(this.storeId, val);
    },

    //获取店铺相关全部回收数据
    getAllGarbage(id, val) {
      getGarbageByIdApi
        .getByCustomId(id)
        .then(res => {

          for (const i of res.data) {
            i.defGar = this.storeDefGar;
            //选出没超出的 无需支付的
            if (i.excess == 0 && i.money == 0) {
              i.payState = "dontNeed";
            }
            if (i.payState == "无需支付") {
              i.payState = "dontNeed";
              i.excess = "暂无";
              i.money = "暂无";
            }
            if (i.production == null) {
              i.production = "暂无";
            }
            //选出没支付
            if (i.payState === null || i.payState == "待支付") {
              i.payState = "goPay";
              this.garbageAll.push(i);
            } else {
              this.garbageAll.push(i);
            }
          }
          console.log(this.garbageAll, val);
          //选出当年
          for (const i of this.garbageAll) {
            if (i.yearNum == val) {
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