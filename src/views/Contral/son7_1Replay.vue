<template>
  <div id="Son7_1Replay">
    <div class="body">
      <el-table :data="replay">
        <el-table-column label="用户名" prop="username"></el-table-column>
        <el-table-column label="反馈内容" prop="content"></el-table-column>
        <el-table-column label="反馈时间" prop="feedbackDate"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Son7_1Replay",
  data() {
    return {
      replay: []
    };
  },
  mounted() {
    this.getInfo();
    this.getInfo2();

  },
  methods: {
    getInfo() {
      this.axios
        .get("http://" + this.$store.state.path + ":8080/getAllReply")
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getInfo2() {
      this.axios
        .get("http://" + this.$store.state.path + ":8080/getHasDeletedFeedBack")
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
@import "../../assets/css/son7_1Replay.scss";
</style>