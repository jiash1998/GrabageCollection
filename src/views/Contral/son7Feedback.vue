<template>
  <div id="son7Feedback">
    <div class="body">
      <div class="operate">
        <el-button type="primary" @click="get">选中删除</el-button>
      </div>
      <el-table ref="feedback" :data="feedback">
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="username" label="反馈用户"></el-table-column>
        <el-table-column prop="content" label="反馈内容"></el-table-column>
        <el-table-column prop="feedbackDate" sortable label="反馈时间"></el-table-column>
        <el-table-column prop="state" width="120" label="状态"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" v-if="scope.row.state != '未回复'" size="small" disabled>回复</el-button>
            <el-button type="primary" v-else plain size="small" @click="replay(scope.row)">回复</el-button>
            <el-button type="danger" @click.native="delRow(scope.row.id)" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div>
        <el-dialog title="回复" :visible.sync="dialogVisible" width="40%">
          <span>test</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "querystring";
export default {
  name: "son7Feedback",
  data() {
    return {
      feedback: [],
      //回复按钮展示
      isShow: "未回复",
      //存放删除的id
      delId: [],
      //回复框是否开启
      dialogVisible: false
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    //回复
    replay(index) {
      this.dialogVisible = !this.dialogVisible;
      console.log(index);
    },
    //删除某一行
    delRow(index) {
      // data.splice(index, 1);
      console.log(index);
    },
    /**
     * get批量逻辑删除
     */
    get() {
      //获取table的选中数据对应数据库id
      // console.log(data);
      for (const i of this.$refs.feedback.selection) {
        this.delId.push(i.id);
      }
      console.log(this.delId);
      var data = this.delId;
      this.axios
        .post(
          "http://" + this.$store.state.path + ":8080/batchDelFeedback",
          qs.stringify(data),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
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

  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son7Feedback.scss";
</style>