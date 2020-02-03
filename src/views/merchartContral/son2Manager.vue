<template>
  <div id="son2Manager">
    <div class="body">
      <el-button type="primary" @click="getData">获取</el-button>
    </div>
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
  methods: {
    getData() {
      this.axios
        .get( "http://" + this.$store.state.path + ":8080/getAllCustom")
        .then(res => {
          console.log(res.data);
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