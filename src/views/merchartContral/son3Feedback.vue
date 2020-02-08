<template>
  <div id="son3Feedback">
    <div class="body">
      <div class="feedbackForm">
        <el-form :model="feedback" :rules="feedback" refs="feedback">
          <el-form-item label>
            <el-input v-model="feedback.content" type="textarea" placeholder="填写你想反馈的意见或者建议"></el-input>
            <el-button type="primary" @click="postFeedback" plain>发送</el-button>
            <el-button type="success">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="instructions">
        <h4>反馈须知：</h4>
        <p v-for="(item,index) in instructions" :key="index">{{item}}</p>
      </div>
    </div>
    <public-foot></public-foot>
  </div>
</template>

<script>
import PublicFoot from "../../components/publicFood.vue";
import qs from "querystring";
export default {
  name: "son3Feedback",
  components: {
    PublicFoot
  },
  data() {
    return {
      instructions: [
        "1.如有意见请如实反馈，请不要出现辱骂性字眼，否则后果自负",
        "2.发送反馈之后，一般1-3个工作日内会收到回复邮件",
        "3.如果情况紧急，请拨打电话：17856006144，负责人：顾一"
      ],
      feedback: {
        username:"",
        content: ""
      }
    };
  },
  methods: {
    postFeedback() {
      this.feedback.username = sessionStorage.getItem("userName");
      var data = this.feedback;
      this.axios
        .post(
          "http://" + this.$store.state.path + ":8080/addFeedback",
          qs.stringify(data),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res);
          alert("发送成功！");
        })
        .catch(err => {
          console.log(err);
          alert("发送失败！");

        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son3Feedback.scss";
</style>