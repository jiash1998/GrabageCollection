<template>
  <div id="son7Feedback">
    <div class="body">
      <div class="view" v-for="(item,index) in feedback" :key="index">
        <div class="info">
          <p id="nameP">
            反馈用户：
            <span >{{item.username}}&nbsp;|&nbsp;</span>
            <span>{{item.feedbackDate}}</span>
          </p>
          <p>
            反馈内容：
            <span>{{item.content}}</span>
          </p>
        </div>
        <div class="state">{{item.state}}</div>
        <div class="replaybtn">
          <span>
            <el-button type="primary" size="small" plain @click="replay(index)">回复</el-button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "son7Feedback",
  data() {
    return {
      feedback: []
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