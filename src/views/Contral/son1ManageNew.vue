<template>
  <div id="son1ManageNew">
    <div class="body">
      <el-card shadow="hover">
        <el-table :data="user">
          <el-table-column label="用户名" prop="username"></el-table-column>
          <el-table-column sortable label="身份" prop="identity"></el-table-column>
          <el-table-column label="邮箱" prop="email"></el-table-column>
          <el-table-column label="联系方式" prop="phone"></el-table-column>
          <el-table-column label="注册店铺" prop="registered.count"></el-table-column>
          <el-table-column label="定制店铺" prop="hasCustom.count"></el-table-column>
          <el-table-column label="未付款店铺" prop="unpaid.count"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                type="primary"
                :disabled="scope.row.identity == '管理员' ? true :false"
                size="small"
                plain
              >发送通知</el-button>
              <!-- <el-button type="danger" size="small" plain>设置黑名单</el-button> -->
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
import getAllUserApi from "../../api/getRequest.js";
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
      getAllUserApi
        .getAllUser()
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