<template>
  <div id="son6Notice">
    <div class="body">
      <h4>公告</h4>
      <el-form :model="notice" ref="notice" :rules="rules">
        <el-form-item label="公告标题" prop="title">
          <el-input v-model="notice.title" placeholder="请输入公告标题"></el-input>
        </el-form-item>
        <el-form-item label="公告内容" prop="content">
          <el-input type="textarea" v-model="notice.content" placeholder="请输入公告内容"></el-input>
        </el-form-item>
        <el-form-item label="公告标签">
          <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >{{tag}}</el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="notice.inputvalue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          ></el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
          <p id="tag_p">最多输入三个标签</p>
        </el-form-item>
        <el-form-item label="公告形式" prop="type">
          <el-radio-group v-model="notice.type">
            <el-radio label="普通通知"></el-radio>
            <el-radio label="商户通知"></el-radio>
            <el-radio label="用户通知"></el-radio>
            <el-radio label="紧急通知"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label>
          <el-button type="success" size="small" @click="submitForm(vm)">发布公告</el-button>
          <el-button type="reset" size="small" @click="resetForm('notice')">重置</el-button>
          <el-button type="primary" size="small" plain>返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import insertNoticeApi from "../../api/postRequest.js";
import { debounce } from "../../util/debounce.js";

export default {
  name: "son6Notice",
  data() {
    var validateTitle = (rule, value, callback) => {
      if (!value) {
        return new callback("请输入标题");
      } else {
        callback();
      }
    };
    var validateContent = (rule, value, callback) => {
      if (!value) {
        return new callback("请输入内容");
      } else {
        callback();
      }
    };
    var validateInputvalue = (rule, value, callback) => {
      if (!value) {
        return new callback("请输入标签");
      } else {
        callback();
      }
    };
    var validateType = (rule, value, callback) => {
      if (!value) {
        return new callback("请选择通知类型");
      } else {
        callback();
      }
    };
    return {
      rules: {
        title: [{ validator: validateTitle, trigger: "change" }],
        content: [{ validator: validateContent, trigger: "change" }],
        inputvalue: [{ validator: validateInputvalue, trigger: "change" }],
        type: [{ validator: validateType, trigger: "change" }]
      },
      notice: {
        title: "",
        content: "",
        inputvalue: "",
        type: ""
      },
      vm: this,
      dynamicTags: [],
      inputVisible: false
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.notice.inputvalue;
      if (inputValue) {
        //添加到展示数组中
        this.dynamicTags.push(inputValue);
      }
      // console.log(this.dynamicTags);
      this.inputVisible = false;
      this.notice.inputvalue = "";
    },

    //重置表单
    resetForm(FormName) {
      this.$refs[FormName].resetFields();
    },

    submitForm: debounce(
      vm => {
        vm.$refs["notice"].validate(val => {
          if (val) {
            vm.notice.inputvalue = vm.dynamicTags.join(",");
            var data = vm.notice;

            insertNoticeApi.insertNotice(data).then(res => {
              //公告提示
              // localStorage.setItem("isDot", "true");
              vm.$message({
                message: "发布成功",
                type: "success",
                duration: 2500
              });
            });
            console.log(data);
          } else {
            vm.$message({
              message: "发布失败",
              type: "error",
              duration: 1500
            });
            return false;
          }
        });
      },
      3000,
      true
    )
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son6Notice.scss";
</style>