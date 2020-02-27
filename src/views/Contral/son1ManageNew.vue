<template>
  <div id="son1ManageNew">
    <div class="body">
      <el-table :data="user">
        <el-table-column label="用户名" prop="username"></el-table-column>
        <el-table-column sortable label="身份" prop="identity"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="联系方式" prop="phone"></el-table-column>
        <el-table-column label="操作">
          <el-button type="primary" size="small">发送通知</el-button>
          <el-button type="danger" size="small" plain>设置黑名单</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "son1ManageNew",
  data() {
    return {
      user: []
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.axios
        .get("http://" + this.$store.state.path + ":8080/getAllUser")
        .then(res => {
          console.log(res.data);
          this.user = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/css/son1ManageNew.scss";
</style>