<template>
  <div id="son3Feedback">
    <div class="body">
      <div class="feedbackForm">
        <el-form :model="feedback" :rules="feedback" refs="feedback">
          <el-form-item label>
            <el-input v-model="feedback.content" type="textarea" placeholder="填写你想反馈的意见或者建议"></el-input>
            <el-button type="primary" size="small" @click="postFeedback(vm)" plain>发送</el-button>
            <el-button type="success" size="small">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="instructions">
        <h4>反馈须知：</h4>
        <p v-for="(item,index) in instructions" :key="index">{{item}}</p>
      </div>
    </div>
    <public-foot-mini></public-foot-mini>
  </div>
</template>

<script>
import publicFootMini from "../../components/publicFootMini.vue";
import addFeedbackApi from "../../api/postRequest.js";
import { debounce } from "../../util/debounce";

export default {
  name: "son3Feedback",
  components: {
    publicFootMini
  },
  data() {
    return {
      instructions: [
        "1.如有意见请如实反馈，请不要出现不文明用语，否则后果自负",
        "2.发送反馈之后，一般1-3个工作日内会收到回复邮件",
        "3.如果情况紧急，请拨打电话：17856006144，负责人：顾一"
      ],
      feedback: {
        username: "",
        content: ""
      },
      vm: this
    };
  },
  methods: {
    postFeedback: debounce(
      vm => {
        vm.feedback.username = sessionStorage.getItem("userName");
        var data = vm.feedback;
        addFeedbackApi
          .addFeedback(data)
          .then(res => {
            console.log(res);
            vm.$message({
              message: "发送成功",
              type: "success",
              duration: 1800
            });
          })
          .catch(err => {
            console.log(err);
            vm.$message({
              message: "发送失败",
              type: "error",
              duration: 1800
            });
          });
      },
      3000,
      true
    )
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son3Feedback.scss";
</style>