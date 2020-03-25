<template>
  <div id="son5Record">
    <div id="son5body">
      <div id="timeline_div">
        <el-timeline>
          <el-timeline-item
            placement="top"
            :color="color"
            v-for="(item,index) in operate"
            :key="index"
          >
            {{item.operateDate}}
            <el-card>
              <h4>操作人员：{{item.operateName}}</h4>
              <p>执行操作：{{item.operateContent}}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import getAllOperateApi from "../../api/getRequest.js";
export default {
  name: "son5Record",
  data() {
    return {
      operate: [],
      color:"#67c23a"
    };
  },
  mounted() {
    var self = this;
    (function() {
      getAllOperateApi
        .getAllOperate()
        .then(res => {
          console.log(res.data);
          self.operate = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    })();
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/son5Record.scss";
</style>