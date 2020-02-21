<template>
  <div id="son7Feedback">
    <div class="body">
      <el-table :data="feedback">
        <el-table-column prop="username" label="反馈用户"></el-table-column>
        <el-table-column prop="content" label="反馈内容"></el-table-column>
        <el-table-column prop="feedbackDate" sortable label="反馈时间"></el-table-column>
        <el-table-column prop="state" width="120" label="状态"></el-table-column>
        <el-table-column label="操作">
          <!-- <el-button type="primary" v-show="isShow" size="small">已回复</el-button> -->
          <el-button type="primary" plain v-show="!isShow" size="small">回复</el-button> 
          <el-button type="danger" size="small">删除</el-button>
        </el-table-column>

      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "son7Feedback",
  data() {
    return {
      feedback: [],
      //回复按钮展示
      isShow:false,
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.axios
        .get("http://" + this.$store.state.path + ":8080/getAllFeedBack")
        .then(res => {
          console.log(res.data);
          this.feedback = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    replay(index) {
      console.log(this.feedback[index]);
      this.$router.push("/contral/Son7_1Replay");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son7Feedback.scss";
</style>