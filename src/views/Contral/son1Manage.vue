<template>
  <div id="son1Manage">
    <el-button type="success" plain>
      <i class="el-icon-refresh"></i>刷新
    </el-button>
    <!-- 分开写，从数据库读 -->
    <el-divider content-position="left">沿街商户</el-divider>
    <div id="elcard_Manage">
      <el-card v-for="(item,index) in merchart" :key="index">
        <div slot="header">
          <span>{{item.username}}</span>
        </div>
        <div style="font-size:.87em;margin-bottom:5px;">
          <i class="el-icon-message"></i>
          {{item.email}}
        </div>
        <div style="font-size:.87em;">
          <i class="el-icon-mobile-phone"></i>
          {{item.phone}}
        </div>
      </el-card>
    </div>
    <el-divider content-position="left">普通用户</el-divider>
    <div id="elcard_Manage">
      <el-card v-for="(item,index) in common" :key="index">
        <div slot="header">
          <span>{{item.username}}</span>
        </div>
        <div style="font-size:.87em;margin-bottom:5px;">
          <i class="el-icon-message"></i>
          {{item.email}}
        </div>
        <div style="font-size:.87em;">
          <i class="el-icon-mobile-phone"></i>
          {{item.phone}}
        </div>
      </el-card>
    </div>
    <el-divider content-position="left">回收车驾驶员</el-divider>
    <div id="elcard_Manage">
      <el-card v-for="(item,index) in testCard" :key="index">
        <div slot="header">
          <span>角色名称</span>
        </div>
        <div>{{item.con}}</div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "son1Manage",
  data() {
    return {
      list: [],
      identity1: "沿街商家",
      identity2: "普通用户",
      //存放商户和普通用户数组
      merchart: [],
      common: [],
      testCard: [
        {
          con: "1"
        },
        {
          con: "2"
        },
        {
          con: "3"
        }
      ]
    };
  },
  mounted() {
    this.getAllUser();
  },
  methods: {
    getAllUser() {
      this.axios
        .get("http://" + this.$store.state.path + ":8080/getAllUser")
        .then(res => {
          console.log(res.data);
          for (const i of res.data) {
            console.log(i.identity);
            if (i.identity == this.identity1) {
              this.merchart.push(i);
            } else if (i.identity == this.identity2) {
              this.common.push(i);
            } else {
              console.log(this.merchart);
              console.log("this is admin");
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    postData() {
      this.axios
        .post(
          "http://" +
            self.$store.state.path +
            ":8080/sourcecontroller/selectsourcefromsourcedrugid",
          qs.stringify(data),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          //数据二次转格式
          self.purchaseForm = JSON.parse(JSON.stringify(self.purchaseForm));
          console.log(this.$store.state.purchaseDrugInfo.data[0].sourcedrugspe);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son1Manage.scss";
</style>