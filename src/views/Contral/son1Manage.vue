<template>
  <div id="son1Manage">
    <el-button type="success" plain><i class="el-icon-refresh"></i>刷新</el-button>
    <!-- 分开写，从数据库读 -->
    <el-divider content-position="left">沿街商户</el-divider>
    <div id="elcard_Manage">
      <el-card v-for="(item,index) in testCard" :key="index">
        <div slot="header">
          <span>角色名称</span>
        </div>
        <div>{{item.con}}</div>
      </el-card>
    </div>
    <el-divider content-position="left">住宅区用户</el-divider>
    <div id="elcard_Manage">
      <el-card v-for="(item,index) in testCard" :key="index">
        <div slot="header">
          <span>角色名称</span>
        </div>
        <div>{{item.con}}</div>
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
    // this.getAllClassify();
  },
  methods: {
    getAllClassify() {
      this.axios
        // .get("http://" + this.$store.state.path + ":8080/getAllClassify")
        .get("http://" + this.$store.state.path + ":8080/getGarbage")
        //getGarbage获取垃圾
        .then(res => {
          console.log(res.data);
          var self = this;
          self.list = res.data;
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