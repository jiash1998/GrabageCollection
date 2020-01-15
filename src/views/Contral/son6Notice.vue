<template>
  <div id="son6Notice">
    <h4>公告</h4>
    <el-form :model="notice" ref="notice">
      <el-form-item label="公告标题">
        <el-input v-model="notice.title" placeholder="请输入公告标题"></el-input>
      </el-form-item>
      <el-form-item label="公告内容">
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
          v-model="notice.inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        ></el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
        <p id="tag_p">最多输入三个标签</p>
      </el-form-item>
      <el-form-item label="公告形式">
          <el-radio-group v-model="notice.type">
            <el-radio label="全部通知"></el-radio>
            <el-radio label="商户通知"></el-radio>
            <el-radio label="用户通知"></el-radio>
            <el-radio label="紧急通知"></el-radio>
          </el-radio-group>
      </el-form-item>
      <el-form-item label>
          <el-button type="success" plain>发布公告</el-button>
          <el-button type="success">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "son6Notice",
  data() {
    return {
      notice: {
        title: "",
        content: "",
        inputValue:'',
        type:''
      },
      dynamicTags: [],
      inputVisible: false,
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
        let inputValue = this.notice.inputValue;
        if (inputValue) {
            //添加到展示数组中
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.notice.inputValue = "";
      }
    
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son6Notice.scss";
</style>