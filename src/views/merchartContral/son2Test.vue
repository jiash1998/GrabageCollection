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
                <span></span>未定制
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
      <div class="content"></div>
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
      custom: []
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