<template>
  <div id="son4Custom">
    <div class="body">
      <div class="content" v-for="(item,index) in storeInfo" :key="index">
        <div class="imgInfo">
          <img :src="item.url" />
        </div>
        <div class="storeInfo">
          <p>
            店铺名称：
            <span>{{item.name}}</span>
          </p>
          <p>
            信用代码：
            <span>{{item.socialCreditCode}}</span>
          </p>
          <p>
            负责人：
            <span>{{item.header}}</span>
          </p>
          <p>
            联系方式：
            <span>{{item.phone}}</span>
          </p>
        </div>
        <div class="detailInfo"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "son4Custom",
  data() {
    return {
      storeInfo: []
    };
  },
  async mounted() {
    await this.getInfo();
  },
  methods: {
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