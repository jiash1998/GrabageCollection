<template>
  <div id="editor">
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="16">
        <div class="col_left">1</div>
      </el-col>
      <el-col :span="4">
        <div class="col_right">2</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name:'editor'
};
</script>

<style lang="scss" scoped>
@import "../assets/css/editor.scss";
</style>