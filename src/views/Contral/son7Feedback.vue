<template>
  <div id="son7Feedback">
    <div class="body">
      <div class="operate">
        <el-button type="primary" @click="get">选中删除</el-button>
      </div>
      <el-table ref="feedback" :data="feedback">
        <el-table-column @click.native="delRow(feedback.$index)" type="selection"></el-table-column>
        <el-table-column prop="username" label="反馈用户"></el-table-column>
        <el-table-column prop="content" label="反馈内容"></el-table-column>
        <el-table-column prop="feedbackDate" sortable label="反馈时间"></el-table-column>
        <el-table-column prop="state" width="120" label="状态"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" v-if="scope.row.state != '未回复'" size="small" disabled>回复</el-button>
            <el-button type="primary" v-else plain size="small">回复</el-button>
            <el-button type="danger" @click.native="delRow(scope.row.id)" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "son7Feedback",
  data() {
    return {
      feedback: [],
      //回复按钮展示
      isShow: "未回复",
      //存放删除的id
      delId: []
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    //删除某一行
    delRow(index) {
      // data.splice(index, 1);
      console.log(index);
    },
    get() {
      //获取table的选中
      var data = this.$refs.feedback.selection;
      console.log(data);
      for (const i of data) {
        this.delId.push(i.id);
      }
      console.log(this.delId);
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