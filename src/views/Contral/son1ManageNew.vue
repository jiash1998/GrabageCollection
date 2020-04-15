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
                @click="postNotSelf(scope.row)"
                plain
              >发送通知</el-button>
              <!-- <el-button type="danger" size="small" plain>设置黑名单</el-button> -->
            </template>
          </el-table-column>
        </el-table>
      </el-card>
      <el-dialog title :visible.sync="dialogVisible">
        <el-form :model="notice" ref="notice" :rules="rules">
          <el-form-item label="标题" prop="title">
            <el-input v-model="notice.title" placeholder="输入标题"></el-input>
          </el-form-item>
          <el-form-item label="内容" prop="content">
            <el-input v-model="notice.content" placeholder="输入内容"></el-input>
          </el-form-item>
          <el-form-item label>
            <el-button type="primary" @click="postNotice('notice')">发送</el-button>
            <el-button @click="dialogVisible = false" plain>关闭</el-button>
          </el-form-item>
        </el-form>
        <!-- <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>-->
      </el-dialog>
    </div>
  </div>
</template>

<script>
import getAllUserApi from "../../api/getRequest.js";
import addPersonalNoticeApi from "../../api/postRequest.js";

export default {
  name: "son1ManageNew",
  data() {
    var valTitle = (ruel, value, callback) => {
      if (!value) {
        return new callback("请输入内容");
      } else {
        callback();
      }
    };
    var valContent = (ruel, value, callback) => {
      if (!value) {
        return new callback("请输入内容");
      } else {
        callback();
      }
    };
    return {
      user: [],
      //展示
      dialogVisible: false,
      //发送通知
      notice: {
        userId: "",
        title: "",
        content: ""
      },
      rules: {
        title: [{ validator: valTitle, trigger: "change" }],
        content: [{ validator: valContent, trigger: "change" }]
      }
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
          // console.log(res.data);
          for (const i of res.data) {
            if (i.email == "") {
              i.email = "暂无";
            }
          }
          this.user = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    postNotSelf(index) {
      this.dialogVisible = true;
      // console.log(index);
      this.notice.userId = index.userId;
    },
    //发送
    postNotice(form) {
      // console.log(this.notice);
      this.$refs[form].validate(val => {
        if (val) {
          var data = this.notice;
          addPersonalNoticeApi
            .addPersonalNotice(data)
            .then(res => {
              console.log(res.data);
              if (res.data === "ok") {
                this.$message({
                  message: "发送成功",
                  type: "success",
                  duration: 1500
                });
                localStorage.setItem("isDot", "true");
                this.dialogVisible = false;
                this.$refs[form].resetFields();
              }
            })
            .catch(err => {
              console.log(err);
              this.$message({
                message: "发送失败",
                type: "error",
                duration: 1500
              });
            });
        } else {
          console.log("err");
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/css/son1ManageNew.scss";
</style>