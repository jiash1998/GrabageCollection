<template>
  <div id="Son7_1Replay">
    <div class="body">
      <el-card shadow="hover">
        <el-table :data="replay">
          <el-table-column label="用户名" prop="feedback.username"></el-table-column>
          <el-table-column label="反馈内容" prop="feedback.content"></el-table-column>
          <el-table-column label="反馈时间" sortable prop="feedback.feedbackDate"></el-table-column>
          <el-table-column label="回复内容" prop="reply.content"></el-table-column>
          <el-table-column label="回复时间" sortable prop="reply.replyTime"></el-table-column>
          <el-table-column label="操作员" prop="reply.admin"></el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
import getAllReplyApi from "../../api/getRequest.js";

export default {
  name: "Son7_1Replay",
  data() {
    return {
      replay: []
    };
  },
  mounted() {
    this.getInfo();
    // this.getInfo2();
  },
  methods: {
    getInfo() {
      // this.axios
      //   .get("http://" + this.$store.state.path + ":8080/getAllReply")
      getAllReplyApi
        .getAllReply()
        .then(res => {
          console.log(res.data);
          this.replay = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
    // getInfo2() {
    //   this.axios
    //     .get("http://" + this.$store.state.path + ":8080/getHasDeletedFeedBack")
    //     .then(res => {
    //       console.log(res.data);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son7_1Replay.scss";
</style>