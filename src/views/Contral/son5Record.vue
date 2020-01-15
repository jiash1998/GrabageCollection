<template>
  <div id="son5Record">
    <div id="son5body">
      <div id="timeline_div">
        <el-timeline>
          <el-timeline-item
            placement="top"
            :color="item.color"
            v-for="(item,index) in test"
            :key="index"
          >
            2018/01/02
            <el-card>
              <h4>{{item.name}}</h4>
              <p>{{item.content}}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "son5Record",
  data() {
    return {
      test: [
        {
          name: "admin",
          content: "admin于2020/01/15/21:05登录了系统，并进行操作1",
          color: "#67c23a"
        },
        {
          name: "admin",
          content: "登录了系统，并进行操作2",
          color: "#67c23a"
        },
        {
          name: "admin",
          content: "登录了系统，并进行操作3",
          color: "#67c23a"
        },
        {
          name: "admin",
          content: "登录了系统，并进行操作4",
          color: "#67c23a"
        },
        {
          name: "admin",
          content: "登录了系统，并进行操作5",
          color: "#67c23a"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    getData() {
      this.axios
        // .get("http://" + this.$store.state.path + ":8080/getAllClassify")
        // .get("http://" + this.$store.state.path + ":8080/getGarbage")
        //getGarbage获取垃圾
        .then(res => {
          console.log(res.data);
          var self = this;
          self.list = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son5Record.scss";
</style>