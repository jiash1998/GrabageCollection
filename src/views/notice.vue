<template>
  <div id="notice">
    <div class="notice_main">
      <div class="notice_tabber">
        <div class="tabber">
          <ul>
            <li>普通通知</li>
            <li>商户通知</li>
            <li>用户通知</li>
            <li>紧急通知</li>
          </ul>
        </div>
      </div>
      <div class="notice_content">
        <div class="content">
          <el-button type="primary" @click="getNotice">测试</el-button>
        </div>
      </div>
    </div>
    <!-- <public-food></public-food> -->
  </div>
</template>

<script>
import PublicFood from "../components/publicFood.vue";
export default {
  name: "notice",
  components: {
    PublicFood
  },
  methods: {
    getNotice() {
      this.axios
        .get("http://" + this.$store.state.path + ":8080/getAllNotice")
        .then(res => {
          var data = res.data;
          console.log(data);
        }).catch(err=>{
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/notice.scss";
</style>