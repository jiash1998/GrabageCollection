<template>
  <div id="son2Manager">
    <div class="body">
      <div class="searchDiv">
        <el-form :model="search">
          <el-form-item label>
            <el-input v-model="search.name" placeholder="输入店铺负责人姓名或者用户名"></el-input>
            <el-button type="primary" plain>搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="viewDiv">
        <div class="custom" v-for="(item,index) in custom" :key="index">
          <div class="customImg">
            <img :src="item.url" />
          </div>
          <div class="customCon1">
            <p>店铺名称：{{item.name}}</p>
            <p>所在区域：{{item.address}}</p>
            <p>详细地址：{{item.addressDetail}}</p>
          </div>
          <div class="customCon2">
            <p>负责人：{{item.header}}</p>
            <p>社会信用编码：{{item.socialCreditCode}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="next"></div>
    <public-foot></public-foot>
  </div>
</template>

<script>
import PublicFoot from "../../components/publicFood.vue";
export default {
  name: "son2Manager",
  components: {
    PublicFoot
  },
  data() {
    return {
      custom: [],
      search: {
        name: ""
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
          for (const i of res.data) {
            if (i.user == sessionStorage.getItem("userName")) {
              this.custom.push(i);
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
@import "../../assets/css/son2Manager.scss";
</style>