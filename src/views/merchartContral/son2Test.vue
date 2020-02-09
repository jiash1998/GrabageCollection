<template>
  <div id="son2Test">
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
    </div>
    <public-foot></public-foot>
  </div>
</template>

<script>
import PublicFoot from "../../components/publicFood.vue";
export default {
  name: "son2Test",
  components: {
    PublicFoot
  },
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
      this.$router.push("/merchartContral/Son2Manager/Son2_2Manager");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son2Test.scss";
</style>